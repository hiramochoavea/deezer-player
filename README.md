# Deezer Player Clone

Welcome to the Deezer Player Clone project! This is a basic React application that mimics some of the functionality of Deezer. You can search for artists, view songs, and listen to 30-second previews.

This project was built on Node.js `v20` and React `v18`.

A preview can be found here: https://deezer-clone-hochoa.netlify.app/

## Features

- **Search for Artists**: Look up your favorite artists and find their songs.
- **Display Songs**: View a list of songs for the selected artist.
- **Preview Playback**: Listen to a 30-second preview of each song.

## Prerequisites

Before running the application, you need to set up a few things:

1. **API Key**: You'll need an API key from RapidAPI to fetch data. Add your key to a `.env` file in the root of the project:

    ```plaintext
    VITE_RAPIDAPI_KEY=YOUR-KEY-HERE
    ```

2. **Docker**: This project is dockerized for easy setup and deployment.

## Getting Started

To get the application up and running, follow these steps:

### 1. Clone the Repository

git clone https://github.com/hiramochoavea/deezer-player.git

cd deezer-player

### 2. Build and Run with Docker

docker-compose up --build -d

Your application will be accessible at http://localhost:5173.

### ADDITIONAL INFORMATION

### Running Locally (Without Docker)

yarn install

yarn dev

yarn sass-watch

### Running unit-tests

yarn test:watch