# syntax=docker/dockerfile:1.7
# The public site: an Astro static build served by nginx on 8080.
# Node 24.22.1: the October 2026 security release (Brotli RCE, TLS hostname bypasses).
ARG NODE_VERSION=24.22.1-alpine

FROM node:${NODE_VERSION} AS build
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile
COPY . .
ARG SITE_URL=https://learn.theafricandreamlab.com
ENV SITE_URL=${SITE_URL} ASTRO_TELEMETRY_DISABLED=1
RUN pnpm build

FROM nginxinc/nginx-unprivileged:1.29-alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
