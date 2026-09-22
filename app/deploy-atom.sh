#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="root@59.110.213.100"
REMOTE_DIR="/data/seawealthy_web/app"
REMOTE_NAME="origin"

REPO_ROOT="$(git rev-parse --show-toplevel)"
CURRENT_BRANCH="$(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD)"
LOCAL_COMMIT="$(git -C "$REPO_ROOT" rev-parse HEAD)"
REMOTE_COMMIT="$(ssh "$REMOTE_HOST" "git -C '$REMOTE_DIR' rev-parse HEAD")"

if [[ -n "$(git -C "$REPO_ROOT" status --porcelain -- app/public/atom app/docker-compose.yml app/Makefile app/deploy-atom.sh)" ]]; then
  echo "请先提交 Atom 静态文件和发布配置的本地修改" >&2
  exit 1
fi

git -C "$REPO_ROOT" merge-base --is-ancestor "$REMOTE_COMMIT" "$LOCAL_COMMIT" || {
  echo "远端提交不在当前分支历史中，停止发布" >&2
  exit 1
}

while IFS= read -r path; do
  case "$path" in
    app/public/atom/*|app/docker-compose.yml|app/Makefile|app/deploy-atom.sh) ;;
    *) echo "包含非 Atom 静态发布文件: $path" >&2; exit 1 ;;
  esac
done < <(git -C "$REPO_ROOT" diff --name-only "$REMOTE_COMMIT" "$LOCAL_COMMIT")

git -C "$REPO_ROOT" push "$REMOTE_NAME" "$CURRENT_BRANCH"

if [[ "$LOCAL_COMMIT" != "$REMOTE_COMMIT" ]]; then
  BUNDLE_FILE="$(mktemp "${TMPDIR:-/tmp}/seawealthy-atom.XXXXXX")"
  trap 'rm -f -- "$BUNDLE_FILE"' EXIT
  REMOTE_BUNDLE="/tmp/seawealthy-atom-${LOCAL_COMMIT:0:12}.bundle"

  git -C "$REPO_ROOT" bundle create "$BUNDLE_FILE" "$CURRENT_BRANCH" "^$REMOTE_COMMIT"
  scp "$BUNDLE_FILE" "${REMOTE_HOST}:${REMOTE_BUNDLE}"

  ssh "$REMOTE_HOST" bash -s -- "$REMOTE_DIR" "$REMOTE_BUNDLE" "$CURRENT_BRANCH" <<'EOF'
set -euo pipefail
cd "$1"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "远端工作区有未提交修改，停止发布" >&2
  exit 1
fi
git fetch "$2" "$3"
git merge --ff-only FETCH_HEAD
docker-compose up -d --no-build
docker-compose ps
rm -f -- "$2"
EOF
else
  ssh "$REMOTE_HOST" "cd '$REMOTE_DIR' && docker-compose up -d --no-build && docker-compose ps"
fi
