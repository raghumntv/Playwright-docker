# Use an official Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.41.1-jammy

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Command to run Playwright tests
# CMD ["npm", "test"]