FROM docker.io/library/node:lts-alpine

WORKDIR /app 

RUN npm i -g corepack@latest && corepack enable

RUN apk update

RUN apk add git --no-cache

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN pnpm i --frozen-lockfile --ignore-scripts

COPY . ./

RUN pnpm i --frozen-lockfile

RUN pnpm dlx prisma generate

EXPOSE 3000/tcp

ENV PORT=3000

VOLUME [ "/app/data" ]

CMD ["pnpm", "dev"]
