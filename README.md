# Game Searcher

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can also view [Demo](https://games-search-s237.vercel.app/) which is hosted on Vercel.

## About

Fullstack app with quick search of games, developer companies and platforms.
There are sort parameters for games search. Game Page has a lot of info, like as description,
screenshots, trailers, achievements, and stores with links.

## Technology stack

Next, React, Redux Toolkit, Typescript, Material UI, Supabase

## Architecture

App is implemented on the Next platform, using server and client components.
Data is fetched through requests in server components and then forwarded to client components.
There are some server actions for update add/remove game from User game collection.
Supabase is used as storage for Users and User game collections. 

## Features

- Convenient search for games (you can use sort select)
- View game info in Game Page
- View list of game developer companies and game platforms
- Sign in/Sign up user account by Supabase auth service (including OAuth)
- Add/remove games to favorites
- Adaptive layout is also supported for Mobiles and Tablets

## Screenshots

### Home Page

<img src="/screenshots/home.png" alt="Home Page" width="100%" height="600" style="{{object-fit: cover}}">

### Game Search Page

<img src="/screenshots/game-search.png" alt="Game Search Page" width="100%" height="600" style="{{object-fit: cover}}">

### Platforms Page

<img src="/screenshots/platforms-page.png" alt="Platforms Page" width="100%" height="600" style="{{object-fit: cover}}">

### Developers Page

<img src="/screenshots/developers-page.png" alt="Developers Page" width="100%" height="600" style="{{object-fit: cover}}">

### Game Page

<img src="/screenshots/game_page.png" alt="Game Page" width="100%" height="600" style="{{object-fit: cover}}">

### Game Screenshots, Trailers and Achievements

<img src="/screenshots/game-screenshots.png" alt="Screenshots, Trailes and Achievements" width="100%" height="600" style="{{object-fit: cover}}">

### Profile Page

<img src="/screenshots/profile.png" alt="Profile Page" width="100%" height="600" style="{{object-fit: cover}}">

### Login Page

<img src="/screenshots/login_page.png" alt="Login Page" width="100%" height="600" style="{{object-fit: cover}}">

### Error Page

<img src="/screenshots/error_page.png" alt="Error Page" width="100%" height="600" style="{{object-fit: cover}}">

