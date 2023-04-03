# Use an official Node.js runtime as a parent image
FROM node:13-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install any needed dependencies
RUN npm install

# Run the build script using Webpack
RUN npm run build

# Install the Jest testing framework
# RUN npm install --save-dev jest

# Expose the application port
EXPOSE 3000

# Define environment variable
# ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]

