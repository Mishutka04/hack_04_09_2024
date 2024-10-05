# Use an official Node runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create a minimal tsconfig.json with path alias
RUN echo '{"compilerOptions":{"baseUrl":".","paths":{"@/*":["./src/*"]}}}' > tsconfig.json

# Build the app using Vite directly
RUN npm run build

# Install a simple http server for serving static content
RUN npm install -g http-server

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["http-server", "dist"]
