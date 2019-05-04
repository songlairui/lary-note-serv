FROM node:carbon-alpine as dist
WORKDIR /tmp/
COPY package.json tsconfig.json tsconfig.build.json ./
COPY src/ src/
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn
RUN yarn build

FROM node:carbon-alpine as node_modules
WORKDIR /tmp/
COPY package.json ./
RUN yarn config set registry https://registry.npm.taobao.org
RUN yarn install --production

FROM node:carbon-alpine
WORKDIR /usr/local/nub-api
COPY --from=node_modules /tmp/node_modules ./node_modules
COPY --from=dist /tmp/dist ./dist
CMD ["node", "dist/src/main.js"]