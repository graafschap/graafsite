FROM node:alpine3.17 AS builder
COPY . ./site
WORKDIR /site
RUN npm i
# RUN $(npm bin)/ng build --configuration production
run npm build production

FROM nginx:1.23.2-alpine
COPY default.conf /etc/nginx/conf.d
COPY --from=builder /site/dist/defjef/ /usr/share/nginx/html