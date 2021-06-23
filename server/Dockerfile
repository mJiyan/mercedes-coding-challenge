
FROM node:14


# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/server 

WORKDIR /usr/src/app/server

# Install app dependencies
COPY package.json /usr/src/app/server


RUN npm install

# Bundle app source
COPY . /usr/src/app/server


EXPOSE 4000
 
EXPOSE 8081

CMD [ "npm", "start" ]
