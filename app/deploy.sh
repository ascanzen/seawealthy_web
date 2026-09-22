#!/usr/bin/env bash
set -euo pipefail

REMOTE_HOST="root@59.110.213.100"
REMOTE_DIR="/data/seawealthy_web/app"
CERT_DIR="cert"

# 找到 git 仓库根目录，确保在 app 子目录执行时也能正常 push
REPO_ROOT="$(git rev-parse --show-toplevel)"
CURRENT_BRANCH="$(git -C "$REPO_ROOT" rev-parse --abbrev-ref HEAD)"
REMOTE_NAME="${1:-origin}"

echo "[1/3] 本地推送分支: ${CURRENT_BRANCH} -> ${REMOTE_NAME}"
git -C "$REPO_ROOT" push "$REMOTE_NAME" "$CURRENT_BRANCH"

echo "[2/4] 上传证书到远端"
if [[ -f "${REPO_ROOT}/app/${CERT_DIR}/www.seawealthy.com.pem" && -f "${REPO_ROOT}/app/${CERT_DIR}/www.seawealthy.com.key" ]]; then
  ssh "$REMOTE_HOST" "mkdir -p '${REMOTE_DIR}/${CERT_DIR}' && chmod 700 '${REMOTE_DIR}/${CERT_DIR}'"
  scp \
    "${REPO_ROOT}/app/${CERT_DIR}/www.seawealthy.com.pem" \
    "${REPO_ROOT}/app/${CERT_DIR}/www.seawealthy.com.key" \
    "${REMOTE_HOST}:${REMOTE_DIR}/${CERT_DIR}/"
  ssh "$REMOTE_HOST" "chmod 600 '${REMOTE_DIR}/${CERT_DIR}/www.seawealthy.com.key' && chmod 644 '${REMOTE_DIR}/${CERT_DIR}/www.seawealthy.com.pem'"
else
  echo "未找到本地证书文件：${REPO_ROOT}/app/${CERT_DIR}/www.seawealthy.com.{pem,key}" >&2
  exit 1
fi

echo "[3/4] 连接远端: ${REMOTE_HOST}"
ssh "$REMOTE_HOST" bash <<EOF
set -euo pipefail

cd "$REMOTE_DIR"
echo "[远端] 当前目录: \\$(pwd)"

echo "[远端] git pull --ff-only ${REMOTE_NAME} ${CURRENT_BRANCH}"
git pull --ff-only "$REMOTE_NAME" "$CURRENT_BRANCH"

echo "[远端] 停止服务"
if make -n stop >/dev/null 2>&1; then
  make stop
elif make -n down >/dev/null 2>&1; then
  make down
else
  echo "未找到 make stop/down 目标，请检查 Makefile" >&2
  exit 1
fi

echo "[远端] 启动服务"
if make -n start >/dev/null 2>&1; then
  make start
elif make -n up >/dev/null 2>&1; then
  make up
else
  echo "未找到 make start/up 目标，请检查 Makefile" >&2
  exit 1
fi
EOF

echo "[4/4] 部署完成"
