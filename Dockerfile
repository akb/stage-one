FROM node:16.13.0-alpine3.13

RUN apk update && apk add jq

WORKDIR /app

COPY . .
RUN npm ci
RUN node build-variables.cjs > src/build-variables.js

CMD ["node", "src/index.js"]
