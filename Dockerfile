FROM node:12.22.7-buster

WORKDIR /usr/service-playlistmaker

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3333

RUN yarn start

CMD ["yarn","start"]
