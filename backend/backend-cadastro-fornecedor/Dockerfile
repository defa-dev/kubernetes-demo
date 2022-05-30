FROM node:alpine

ENV NODE_ENV=DEV

COPY ./ /var/www/

WORKDIR /var/www/

ENTRYPOINT npm run start:dev
EXPOSE 30000
