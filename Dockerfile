FROM node:14.18.1-alpine

COPY ./package.json .
COPY ./package-lock.json .
COPY ./config/config.json ./config/

RUN echo "install all dependencies" && npm ci

COPY . .

EXPOSE 3000

CMD npm start