# Movies Website

A React movie discovery app that lets you browse popular films and search The Movie Database (TMDB) in real time. Search activity is logged to an Appwrite backend so the app can surface a "Trending Movies" list based on what people actually search for.

## Features

- Browse popular movies on load, pulled live from the TMDB API
- Debounced search (waits 500ms after typing stops) to avoid firing a request on every keystroke
- Loading spinner and error states while movies are being fetched
- Movie cards showing poster, title, rating, language, and release year
- Trending movies section backed by Appwrite, which tracks how often each search term is used and links it to the top matching movie/poster
- Responsive layout

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/) — UI and dev/build tooling
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) — styling
- [react-use](https://github.com/streamich/react-use) — `useDebounce` hook for the search input
- [Appwrite](https://appwrite.io/) — backend database used to store and rank search terms for the trending list
- [TMDB API](https://developer.themoviedb.org/) — movie data
- ESLint — linting
- Deployed via [Vercel](https://vercel.com/) (`vercel.json` included)

## Project Structure

```
myapp/
├── public/              # Static assets (icons, hero images)
├── src/
│   ├── components/
│   │   ├── search.jsx       # Search input box
│   │   ├── spinner.jsx      # Loading indicator
│   │   └── MovieCard.jsx    # Movie poster/details card
│   ├── App.jsx           # Main app logic: fetching, search, trending list
│   ├── appwrite.js       # Appwrite client + search-count tracking helpers
│   ├── main.jsx          # React entry point
│   ├── App.css / index.css
├── index.html
├── vite.config.js
└── vercel.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- A [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) read access token
- An [Appwrite](https://appwrite.io/) project with a database/collection for storing search terms (optional — only required for the "Trending Movies" feature)

### Installation

```bash
git clone https://github.com/kingofthehills/movies-website.git
cd movies-website/myapp
npm install
```

### Environment Variables

Create a `.env` file inside `myapp/` with:

```
VITE_TMDB_API_KEY=your_tmdb_api_read_access_token
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### Run the dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

### Lint

```bash
npm run lint
```
