FROM node:10

ENV PORT="8174"

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8174
CMD [ "yarn", "run", "prod" ]
