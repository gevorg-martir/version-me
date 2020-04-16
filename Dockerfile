FROM node:12

# nice clean home for our action files
RUN mkdir /action
WORKDIR /action

# install deps
COPY ./package.json ./package-lock.json ./
RUN npm ci --only=prod

# copy in entrypoint after dependency installation
COPY index.js .

ENTRYPOINT ["node", "/action/index.js"]