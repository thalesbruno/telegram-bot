FROM node:12.7.0-alpine

WORKDIR /app
COPY . .
RUN ["npm", "install"]

ENV BOT_TOKEN=<BOT_TOKEN_HERE>

ENTRYPOINT ["npm", "start"]
