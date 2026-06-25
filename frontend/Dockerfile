# pull official base image
FROM node:18-bullseye

# set work directory
WORKDIR /srv/app

# add node_modules binaries to PATH
ENV PATH=/srv/app/node_modules/.bin:$PATH

# install dependencies
COPY package.json package-lock.json ./

RUN npm install

# copy source code
COPY . .

# run react
CMD ["npm", "start"]