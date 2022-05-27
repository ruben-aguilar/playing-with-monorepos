
FROM alpine:latest as base

RUN apk update
RUN apk add nodejs npm yarn


FROM base as prod 

RUN mkdir /src

COPY ./package.json /src
COPY ../../yarn.lock src

RUN cd /src; yarn

COPY ./index.js /src

EXPOSE 3001
CMD ["node", "/src/index.js"]