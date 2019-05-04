FROM node:8.16.0-alpine as dist
WORKDIR /tmp/
COPY package.json package-lock.json tsconfig.json ./
COPY src/ src/
RUN yarn
RUN yarn build

FROM node:8.16.0-alpine as node_modules
WORKDIR /tmp/
COPY package.json yarn.lock ./
RUN yarn install --production

FROM node:8.16.0-alpine
WORKDIR /usr/local/nub-api
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
CMD ["node", "dist/src/main.js"]