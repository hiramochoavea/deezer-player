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

# Run sass --watch in the background and start the development app
CMD ["sh", "-c", "yarn sass-watch & yarn dev --host 0.0.0.0"]