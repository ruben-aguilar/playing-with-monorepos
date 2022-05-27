FROM nginx:alpine as prod

WORKDIR /app

RUN cd build

COPY . .

COPY ./nginx.conf /etc/nginx/nginx.conf

FROM alpine:latest as dev

RUN apk update
RUN apk add nodejs npm yarn

EXPOSE 3000
CMD ["yarn", "dev"]