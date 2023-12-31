FROM node:18
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
COPY . ./
RUN yarn build
CMD ["node", "index.js"]