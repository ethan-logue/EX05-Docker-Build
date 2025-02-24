FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY src ./src
COPY index.html ./

# Build the application
RUN npm run build

# Production image
FROM node:20 AS production

# Set the working directory
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist

# Install serve to serve the built application
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "dist"]