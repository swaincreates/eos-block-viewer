FROM node:alpine

RUN apk update \ 
    && apk upgrade \
    && apk add --update --no-cache git
 
WORKDIR /code

COPY package.json /code/package.json
COPY yarn.lock /code/yarn.lock

COPY . /code

RUN yarn install
