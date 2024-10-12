ARG NODE_VERSION=20.18.0

FROM node:${NODE_VERSION}-slim AS build

RUN corepack prepare yarn@stable --activate

WORKDIR /app

COPY ./package.json /app/

COPY ./yarn.lock /app/

RUN yarn install

COPY . ./

RUN yarn build

FROM node:${NODE_VERSION}-slim

WORKDIR /app

COPY --from=build /app/.output ./

ENV HOST=0.0.0.0 NODE_ENV=production

EXPOSE 3000

CMD ["node","/app/server/index.mjs"]