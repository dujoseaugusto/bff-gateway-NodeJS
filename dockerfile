
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 9229

CMD ["node", "--inspect=0.0.0.0:9229", "index.js"]