# 后台容器部署架构

> 线上快照日期：2026-10-10。本文记录 Seawealthy 服务器的实际部署，并提供其他 Docker Compose 项目接入 Traefik 的标准模板。

## 1. 服务器清单

| 项目 | 当前值 |
| --- | --- |
| 公网 IP | `59.110.213.100` |
| 主机名 | `node` |
| 操作系统 | Ubuntu 18.04.6 LTS，`linux/amd64` |
| Docker | 19.03.12 |
| Docker Compose | v2.38.2，服务器使用 `docker-compose` 命令 |
| Traefik | 3.6.25，镜像标签 `traefik:v3.6` |
| Nginx | 1.31.2，运行在 `haiyingping-web` 容器内 |
| 官网目录 | `/data/seawealthy_web/app` |
| TradeCal 目录 | `/data/seawealthy/tradecal` |
| 部署账号 | `root@59.110.213.100` |

宿主机没有第二个 Nginx 占用公网入口。公网 `80/443` 只允许 Traefik 绑定，应用 Nginx 和 API 均作为内部后端。

## 2. 总体拓扑

```text
Internet
   |
   | TCP 80 / 443
   v
59.110.213.100
   |
   +-- seawealthy-traefik (172.20.0.4)
         |
         +-- Host: seawealthy.com / www.seawealthy.com
         |      -> haiyingping-web:80 (172.20.0.3)
         |            -> React/Vite 静态站
         |            -> /atom 静态目录映射
         |
         +-- Host: tradecal.seawealthy.com
                -> tradecal-api-1:8765 (172.20.0.2)
                      -> db / redis / worker / beat / gorush

共享 Docker bridge 网络：web-proxy，172.20.0.0/16
```

请求只通过 Traefik 进入。数据库、Redis、Worker 等内部组件仅加入各项目自己的默认网络，不加入 `web-proxy`。

## 3. 组件职责

### Traefik

- 容器：`seawealthy-traefik`
- 对外端口：`0.0.0.0:80`、`0.0.0.0:443`
- 网络：`web-proxy`
- Docker Provider：读取容器 labels，`exposedByDefault=false`
- File Provider：读取 `app/traefik/dynamic.yml`
- HTTP 自动跳转 HTTPS
- ACME HTTP-01 验证入口：`web`
- ACME 状态：`/data/seawealthy_web/app/traefik/letsencrypt/acme.json`
- 健康检查：Traefik `ping`

Docker socket 以只读方式挂载，但仍属于高权限接口。只有受信任的管理员可以修改 Compose 和容器 labels。

### 官网 Nginx

- Compose 服务：`haiyingping`
- 容器：`haiyingping-web`
- 镜像：`haiyingping-web:latest`
- 内部端口：`80`，不映射宿主机端口
- 网络：`app_haiyingping-net`、`web-proxy`
- 路由：`seawealthy.com`、`www.seawealthy.com`
- 静态目录：`/usr/share/nginx/html`
- Atom 映射：`./public/atom:/usr/share/nginx/html/atom:ro`

Nginx 配置仍包含内部 `443` server，但公网 TLS 已由 Traefik 终止。Traefik 当前只转发到 Nginx 的 `80`。

### TradeCal

- Compose 项目：`tradecal`
- API 容器：`tradecal-api-1`
- API 内部端口：`8765`
- 宿主机调试映射：`127.0.0.1:8765 -> 8765`
- 网络：`tradecal_default`、`web-proxy`
- 路由：`tradecal.seawealthy.com`
- 健康检查：`https://tradecal.seawealthy.com/readyz`

内部容器包括：

- `tradecal-db-1`：PostgreSQL 16
- `tradecal-redis-1`：Redis 7.4
- `tradecal-worker-1`：后台任务 Worker
- `tradecal-beat-1`：定时任务调度
- `tradecal-gorush-1`：推送服务

这些内部组件不应设置 Traefik labels，也不应直接暴露公网端口。

## 4. 域名与证书

| 域名 | 路由后端 | 证书方式 |
| --- | --- | --- |
| `seawealthy.com` | `haiyingping-web:80` | DigiCert 商业证书 |
| `www.seawealthy.com` | `haiyingping-web:80` | DigiCert 商业证书 |
| `tradecal.seawealthy.com` | `tradecal-api-1:8765` | Let's Encrypt ACME 自动签发与续期 |

主站证书：

- 文件：`app/cert/www.seawealthy.com.pem`
- 私钥：`app/cert/www.seawealthy.com.key`
- SAN：`www.seawealthy.com`、`seawealthy.com`
- 当前有效期：2026-09-22 至 2027-03-22
- Traefik 加载配置：`app/traefik/dynamic.yml`

TradeCal 证书由 Traefik 的 `letsencrypt` resolver 管理，当前证书有效期至 2026-12-24，续期状态保存在 `acme.json`。该文件权限应保持 `600`，目录已被 Git 忽略。

## 5. 共享网络

当前网络：

```text
名称：web-proxy
驱动：bridge
子网：172.20.0.0/16
网关：172.20.0.1
```

容器 IP 可能在重建后变化，配置中禁止写死 `172.20.0.x`。Traefik 应通过 Docker 服务名和 labels 发现后端。

官网 Compose 创建并维护 `web-proxy`。其他 Compose 项目必须引用外部网络：

```yaml
networks:
  web-proxy:
    external: true
```

## 6. 新项目接入模板

以下模板假设新 API 在容器内监听 `8080`：

```yaml
services:
  api:
    image: example-api:latest
    expose:
      - "8080"
    restart: unless-stopped
    networks:
      - default
      - web-proxy
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:8080/readyz"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=web-proxy"
      - "traefik.http.routers.example.rule=Host(`example.seawealthy.com`)"
      - "traefik.http.routers.example.entrypoints=websecure"
      - "traefik.http.routers.example.tls=true"
      - "traefik.http.routers.example.tls.certresolver=letsencrypt"
      - "traefik.http.services.example.loadbalancer.server.port=8080"

networks:
  web-proxy:
    external: true
```

接入规则：

1. DNS A 记录先指向 `59.110.213.100`。
2. 业务进程必须监听容器内 `0.0.0.0`，不能只监听 `127.0.0.1`。
3. Traefik 的 service port 填容器内部端口，不是宿主机映射端口。
4. 同时加入多个网络时必须设置 `traefik.docker.network=web-proxy`。
5. 后端通常只需要 `expose`，不要使用 `0.0.0.0:端口` 暴露公网。
6. Router、service 名在整台服务器上保持唯一，例如使用项目名作为前缀。
7. 数据库、缓存和消息队列只加入项目内部网络。

## 7. 发布流程

### 官网完整发布

本地执行：

```bash
cd app
./deploy.sh
```

流程：

1. 推送当前 Git 分支。
2. 上传主站 PEM 和私钥到服务器。
3. 服务器执行 `git pull --ff-only`。
4. `make deploy` 重新构建官网镜像并执行 `docker-compose up -d`。

发布前确认远端工作区干净。证书私钥只能通过受控传输上传，不能提交 Git。

### Atom 静态页面发布

`app/public/atom` 已通过只读 bind mount 进入官网容器，无需重新构建镜像：

```bash
cd app
make deploy-atom
```

脚本只允许发布 Atom 静态文件和相关部署配置，使用 Git bundle 增量同步远端，并执行：

```bash
docker-compose up -d --no-build
```

### 独立后台项目发布

后台项目使用自己的 Compose 和内部网络。首次部署前确认 `web-proxy` 存在：

```bash
docker network inspect web-proxy
```

更新业务项目时不要执行或删除官网 Compose；只在业务目录运行该项目自己的 `docker-compose up -d`。

## 8. 更新与避免端口冲突

- Traefik 是唯一公网入口，只有它可以绑定宿主机 `80/443`。
- 应用 Nginx、API 和管理后台使用 Docker 内部端口。
- 不要为接入 Traefik 的服务配置 `80:80` 或 `443:443`。
- 同机其他历史服务当前占用公网 `9001`；新增项目不要复用该端口。
- `127.0.0.1:8765`、`127.0.0.1:8848`、`127.0.0.1:9848` 仅供宿主机本地访问。
- 修改 `traefik/dynamic.yml` 会由 File Provider 自动热加载。
- 修改 Compose 后使用 `docker-compose up -d --no-build`，不要为了普通配置更新先执行 `down`。

## 9. 验证与排障

```bash
# 容器状态
docker-compose ps
docker ps --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}\t{{.Networks}}'

# Traefik 日志和路由结果
docker logs --since 10m seawealthy-traefik
curl -I https://www.seawealthy.com/
curl -I https://tradecal.seawealthy.com/
curl -f https://tradecal.seawealthy.com/readyz

# 查看共享网络成员
docker network inspect web-proxy

# 官网容器到 TradeCal 的共享网络连通性
docker exec haiyingping-web wget -qO- http://tradecal-api-1:8765/readyz

# 检查证书
openssl s_client -connect tradecal.seawealthy.com:443 \
  -servername tradecal.seawealthy.com </dev/null 2>/dev/null \
  | openssl x509 -noout -issuer -subject -dates

# 检查宿主机端口
ss -ltnp | grep -E ':(80|443|8765|9001)\b'
```

常见故障：

| 现象 | 优先检查 |
| --- | --- |
| Traefik 返回 404 | Router rule、entrypoint、`traefik.enable` |
| Traefik 返回 502 | 内部端口、进程监听地址、共享网络 |
| 证书签发失败 | DNS、80 端口、CAA、ACME 日志和频率限制 |
| 路由到错误容器 | Router 名重复、Host rule 重复、Docker network 未指定 |
| 容器名可见但无法连接 | 两个容器是否同时加入 `web-proxy` |

## 10. 安全与维护清单

- `app/cert/`、`traefik/letsencrypt/` 和 `.env.production` 不进入 Git。
- 主站私钥权限保持 `600`，证书文件权限保持 `644`。
- 定期备份 ACME 状态、数据库和生产环境变量。
- 不在 labels 中保存密码、Token 或数据库连接串。
- 新容器默认不暴露，只有明确设置 `traefik.enable=true` 才能接入公网。
- 发布后检查 Traefik 日志、健康检查和公网证书。
- Ubuntu 18.04 与 Docker 19.03 属于较旧运行环境，升级前应在测试机验证 Docker 网络、Compose 和 Traefik兼容性。
