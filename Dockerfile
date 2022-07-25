FROM node:latest AS packages
WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --frozen-lockfile --production


FROM node:latest as build
WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY . /app

RUN yarn
RUN yarn build

FROM node:latest as prod
WORKDIR /app

COPY --from=packages /app/package.json .
COPY --from=packages /app/yarn.lock .
COPY --from=packages /app/node_modules .
COPY --from=build /app/build .

EXPOSE 3000

ENTRYPOINT ["node", "server.js"]
