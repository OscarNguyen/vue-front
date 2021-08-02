# Dockerfile
FROM node:15.14.0 as build

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
# RUN apk update && apk upgrade
# RUN apk add git
COPY package*.json ./
RUN npm install

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm run generate

EXPOSE 3000

ENV PROXY_API=$PROXY_API
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
