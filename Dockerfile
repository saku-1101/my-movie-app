

FROM node:16-alpine
# base image

COPY . /my-movie-app
# to add all the contents under this directory into the /my-movie-app (absolute path)
#COPY local container directory
# CAUTION! : local -> relative path from Dockerfile directory/ container -> absolute path from work directory↓

WORKDIR /my-movie-app
# work directry assigned for RUN,CMD,ENTRYPOINT,ADD,COPY

RUN npm install -g npm@8.1.2
