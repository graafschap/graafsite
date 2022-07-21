FROM node:latest AS builder
COPY . ./graafschap-web
WORKDIR /graafschap-web
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /graafschap-web/dist/defjef/ /usr/share/nginx/html