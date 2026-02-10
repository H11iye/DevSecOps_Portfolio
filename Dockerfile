FROM node:20-alpine

WORKDIR /app

# Enable corepack (pnpm manager)
RUN corepack enable && corepack prepare pnpm@10.29.2 --activate

# Copy only dependency files first (better caching)
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Improve pnpm network stability
RUN pnpm config set fetch-retries 5 \
 && pnpm config set fetch-retry-mintimeout 20000 \
 && pnpm config set fetch-retry-maxtimeout 120000 \
 && pnpm install --no-frozen-lockfile

# Copy full project after dependencies installed
COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]
