FROM node:20-alpine

WORKDIR /app

RUN corepack enable

# Copy dependency files + patches folder (IMPORTANT)
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Install deps
RUN pnpm install --no-frozen-lockfile

# Copy the rest of the project
COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "5173"]

