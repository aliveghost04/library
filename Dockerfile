FROM node:10.16.0-alpine

WORKDIR /app

COPY . .

ENV NODE_ENV=production

RUN wget https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.1/wait && \
chmod +x wait start.sh && \
npm i && \
cp .env.example .env

CMD ./wait && ./start.sh
