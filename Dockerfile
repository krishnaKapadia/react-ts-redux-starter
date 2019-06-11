# Base image
FROM node:8.16.0-alpine

# Set the working directory to /app
WORKDIR /app

# Add node_modules.bin to $path
# ENV PATH /app/node_modules/.bin:$PATH

# copy package.json into the container at /app
COPY package*.json /app/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . /app/

# Make port 3000 avaliable to the world outside of the container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]