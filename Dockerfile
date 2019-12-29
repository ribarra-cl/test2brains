FROM node:8

RUN mkdir /app
WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000:3000
CMD ["node", "dist/app.js"]