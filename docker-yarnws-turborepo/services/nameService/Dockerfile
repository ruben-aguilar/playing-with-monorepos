
FROM alpine:latest as base

RUN apk update
RUN apk add nodejs npm yarn


FROM base as prod 

RUN mkdir /src
COPY ./package.json /src
ADD node_modules.tar.gz /src/

COPY ./index.js /src

EXPOSE 3001
CMD ["node", "/src/index.js"]