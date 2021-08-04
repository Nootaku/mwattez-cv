# Base image
FROM node:lts-alpine3.14


# Add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH


# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent


# add app
COPY . ./

# start app
CMD ["npm", "start"]
