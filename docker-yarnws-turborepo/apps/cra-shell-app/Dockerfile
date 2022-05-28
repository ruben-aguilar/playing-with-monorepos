FROM nginx:alpine as prod

WORKDIR /app

COPY ./build ./static

COPY ./nginx.conf /etc/nginx/nginx.conf

FROM alpine:latest as dev

RUN apk update
RUN apk add nodejs npm yarn

EXPOSE 3000
CMD ["yarn", "dev"]