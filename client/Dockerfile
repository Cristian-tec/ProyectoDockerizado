FROM node:16

WORkDIR /app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 4000

CMD [ "npm", "run" , "dev"]