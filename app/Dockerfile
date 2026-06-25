# Stage 1: Build
# Use alpine variant to avoid glibc/thread creation issues on some older Docker hosts.
FROM node:20-alpine AS builder

WORKDIR /app

# npm 10 may fail silently on some Docker/overlayfs hosts; upgrade to a stable npm 11.
RUN npm install -g npm@11.17.0

# Copy dependency files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci --legacy-peer-deps --include=dev

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
