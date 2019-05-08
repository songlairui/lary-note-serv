FROM node:carbon-alpine as base
WORKDIR /app
COPY package.json yarn.lock tsconfig.json tsconfig.build.json ./

FROM base AS dependencies
RUN npm config delete registry
RUN yarn config delete registry
# RUN yarn config set registry https://registry.npm.taobao.org
# RUN yarn global add prisma
RUN yarn 
RUN cp -R ./node_modules /tmp

FROM base AS release
COPY --from=dependencies /tmp/node_modules ./node_modules
COPY . .
RUN yarn build
ENV APP_PORT 3000
EXPOSE $APP_PORT

CMD [ "node", "dist/src/main.js" ]
