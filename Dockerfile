# Build stage
FROM node:16-alpine as builder
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY src ./src
COPY tsconfig.json .

# Compile TypeScript
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /usr/src/app

# Copy the compiled JS from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Expose the application port
EXPOSE 3000

# Run the compiled app
CMD ["node", "dist/app.js"]
