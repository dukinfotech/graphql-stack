FROM node:20.10.0-alpine3.18 as builder
ENV NODE_ENV build
USER node
WORKDIR /home/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY --chown=node:node . .
RUN yarn build
 
FROM node:20.10.0-alpine3.18
ENV NODE_ENV production
USER node
WORKDIR /home/app
COPY --from=builder --chown=node:node /home/app/package*.json ./
COPY --from=builder --chown=node:node /home/app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/app/dist/ ./dist/
CMD ["node", "dist/main.js"]