FROM node:20-alpine

WORKDIR /app

# Install useful tools
RUN apk add curl vim

# Copy package.json and package-lock.json
COPY package*.json ./
COPY yarn*.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Start development app
CMD ["yarn", "dev", "--host", "0.0.0.0"]