FROM node:14-alpine AS builder
COPY . /app
WORKDIR /app
RUN yarn install --network-timeout=1000000
RUN yarn build

FROM node:14-alpine
RUN yarn global add http-server
COPY --from=builder /app/dist /dist
WORKDIR /dist
ENTRYPOINT [ "http-server" ]
