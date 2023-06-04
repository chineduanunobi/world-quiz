# Use an official Node.js runtime as a parent image
FROM node:13-alpine AS build
# Set the working directory to /app
WORKDIR /app
# Copy package.json and package-lock.json separately
COPY package.json .
COPY package-lock.json .
# Install dependencies based on package-lock.json
RUN npm ci
# Copy the rest of the application code
COPY . .
# Build the application
RUN npm run build
# Start a new stage with a lightweight base image
FROM nginx:alpine
# Copy the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose the application port
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
