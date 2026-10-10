# Seawealthy Web

海盈平科技官网及统一 Web 入口。生产环境由 Traefik 接管公网 HTTP/HTTPS，官网由容器内 Nginx 提供，其他项目通过 Docker labels 接入共享网络。

## 生产环境

| 项目 | 当前值 |
| --- | --- |
| 服务器公网 IP | `59.110.213.100` |
| 部署目录 | `/data/seawealthy_web/app` |
| 公网入口 | `seawealthy-traefik`，端口 `80/443` |
| 官网容器 | `haiyingping-web`，内部端口 `80` |
| 共享网络 | `web-proxy` |
| 主站域名 | `seawealthy.com`、`www.seawealthy.com` |
| TradeCal 域名 | `tradecal.seawealthy.com` |

完整拓扑、证书、接入规范和运维命令见 [容器部署架构](./DEPLOYMENT_ARCHITECTURE.md)。

## 常用命令

```bash
# 完整构建并启动
make deploy

# 查看状态和日志
make status
make logs

# 仅发布 app/public/atom 静态文件，不构建镜像
make deploy-atom
```

## 关键文件

- `docker-compose.yml`：Traefik、官网 Nginx、网络和路由标签
- `traefik/dynamic.yml`：现有商业证书的动态 TLS 配置
- `nginx.conf`：官网静态文件、SPA fallback 和 Atom 固定路由
- `deploy.sh`：完整远程部署
- `deploy-atom.sh`：Atom 静态文件免构建部署

证书私钥、ACME 状态和环境变量文件不得提交到 Git。
