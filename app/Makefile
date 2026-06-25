.PHONY: help build up down restart logs shell clean push deploy-local deploy-prod

# Default target
help:
	@echo "海盈平科技官网 - Docker 部署命令"
	@echo ""
	@echo "Usage:"
	@echo "  make build        构建 Docker 镜像"
	@echo "  make up           启动容器 (后台运行)"
	@echo "  make up-fg        启动容器 (前台运行，查看日志)"
	@echo "  make down         停止并移除容器"
	@echo "  make restart      重启容器"
	@echo "  make logs         查看容器日志"
	@echo "  make shell        进入容器 Shell"
	@echo "  make status       查看容器状态"
	@echo "  make clean        清理容器、镜像和卷"
	@echo "  make rebuild      重新构建并启动"
	@echo "  make deploy       构建 + 启动（一键部署）"
	@echo ""

# Build Docker image
build:
	docker-compose build --no-cache

# Start containers in background
up:
	docker-compose up -d
	@echo ""
	@echo "服务已启动，访问: http://localhost:8080"

# Start containers in foreground
up-fg:
	docker-compose up

# Stop and remove containers
down:
	docker-compose down

# Restart containers
restart:
	docker-compose restart

# View logs
logs:
	docker-compose logs -f --tail=50

# Enter container shell
shell:
	docker-compose exec haiyingping /bin/sh

# Check status
status:
	docker-compose ps

# Clean everything
clean:
	docker-compose down --rmi all --volumes --remove-orphans

# Rebuild and restart
rebuild: down build up

# One-click deploy
deploy: build up

# Tag and push (example for private registry)
tag:
	docker tag haiyingping-web:latest your-registry.com/haiyingping-web:latest

push: tag
	docker push your-registry.com/haiyingping-web:latest
