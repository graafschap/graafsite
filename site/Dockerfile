FROM node:alpine3.14 AS builder
COPY . ./site
WORKDIR /site
RUN npm i
RUN $(npm bin)/ng build --configuration production

FROM nginx:1.21.4-alpine
COPY --from=builder /site/dist/defjef/ /usr/share/nginx/html