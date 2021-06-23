# Base image
# Make folder to put our files in
FROM node
RUN mkdir -p /usr/src/app
# Set working directory so that all
RUN mkdir -p /usr/src/app/client
# subsequent command runs in this folder
# Copy package json and install dependencies
WORKDIR /usr/src/app/client
COPY package*.json ./
# Copy our app
RUN npm install --legacy-peer-deps
# Expose port to access server
COPY . .
# Command to run our app
EXPOSE 3000
CMD [ "npm", "start" ] 