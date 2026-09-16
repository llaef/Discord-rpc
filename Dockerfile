FROM node:18
WORKDIR /usr/src/app
RUN npm install discord.js-selfbot-v13
COPY . .
CMD ["node", "index.js"]

