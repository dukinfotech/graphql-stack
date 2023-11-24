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
COPY --from=builder /home/app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /home/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /home/app/.next/static ./.next/static
CMD ["node", "server.js"]