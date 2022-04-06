FROM node:lts-alpine3.15 as build-env

WORKDIR /src

COPY . .

RUN npm install 
RUN npm run build 

FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/
COPY --from=build-env /src/build/ /usr/share/nginx/html/