# Use an official Node runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install serve for serving static content with SPA support
RUN npm install -g serve

# Build the app using Vite directly
RUN npm run build

# Adjust base url
RUN ln -snf "`pwd`/dist" dist/hack-judge

# Define the command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
