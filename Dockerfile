# Use an official Node.js runtime as a parent image
FROM node

# # Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Define the command to run the application
CMD ["npm", "start"]
