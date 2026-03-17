# Movie Explorer

A modern, Netflix-inspired movie and TV show discovery application built with React. Explore millions of movies, TV shows, and discover your next favorite content with an intuitive and responsive interface.

## Live Demo

[View Live Application](https://movie-info-explorer.netlify.app/) 

## Description

Movie Explorer is a full-featured media discovery platform that leverages The Movie Database (TMDB) API to provide users with comprehensive information about movies and TV shows. 

**Why I Built This Project:**

I built this project to master modern React development through practical, real-world application. Rather than building another todo app, I wanted to create something that would challenge me to implement:

- **Complex State Management**: Using Context API for authentication and watchlist, with localStorage persistence
- **Performance Optimization**: Implementing React.memo, useMemo, useCallback, lazy loading, and API caching
- **Real API Integration**: Working with TMDB's REST API, handling pagination, and managing loading/error states
- **Authentication Flows**: Building protected routes with redirect patterns and seamless user experience
- **Reusable Components**: Creating flexible components like MediaCard, MediaGrid, and Pagination that work for both movies and TV shows
- **Custom Hooks**: Developing useFetch with abort controllers and useLocalStorage for clean, reusable logic

Every feature was built to solve a specific challenge and deepen my understanding of React patterns and best practices.

**What I Learned:**

- Advanced React patterns including Container/Presentational components
- Effective state management using Context API and custom hooks
- Performance optimization with React.memo, useMemo, and useCallback
- Building scalable folder structures for large applications
- Implementing protected routes and authentication flows
- Working with external APIs and managing asynchronous data
- Creating responsive, accessible user interfaces

## Features

### Core Functionality

- **Browse Movies & TV Shows** - Explore trending, popular, and free-to-watch content
- **Search Functionality** - Search for movies and TV shows with URL-based query parameters
- **Detailed Information** - View comprehensive details including cast, reviews, ratings, and trailers
- **Watchlist Management** - Save favorite content with localStorage persistence
- **Authentication Flow** - Login/logout with protected routes and redirect patterns

### Technical Architecture

- **Custom Hooks** - Reusable logic with useFetch (AbortController) and useLocalStorage
- **API Response Caching** - Global cache reduces redundant network requests
- **Error Boundaries** - Isolated error handling prevents full app crashes
- **Lazy Loading with Suspense** - Code-splitting for optimized initial load
- **Performance Optimization** - React.memo, useMemo, and useCallback for efficient renders
- **Dynamic Routing** - React Router v6 with nested and protected routes

### User Experience

- **Netflix-Inspired UI** - Modern, dark-themed interface
- **Responsive Design** - Seamless experience across mobile, tablet, and desktop
- **Loading States** - Skeleton loaders and spinners for async operations
- **Empty States** - Friendly messages when no data exists
- **Modal Trailers** - Watch YouTube trailers without leaving the page
- **Pagination** - Smart page navigation for large datasets

## How to Use

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TMDB API Key (free from [themoviedb.org](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

4. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Technologies

### Frontend Framework
- **React 18** - UI library for building component-based interfaces
- **Vite** - Next-generation frontend build tool for faster development

### Routing & Navigation
- **React Router v6** - Declarative routing with dynamic routes, nested routes, and protected routes

### Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Font Awesome** - Icon library for UI elements

### State Management
- **Context API** - Global state management for authentication and watchlist
- **Custom Hooks** - Reusable stateful logic (useFetch, useLocalStorage)

### API Integration
- **TMDB API** - The Movie Database REST API for media data

### Performance Optimization
- **React.lazy** - Code-splitting for route-based components
- **React.memo** - Memoization for expensive re-renders
- **useMemo & useCallback** - Performance optimization hooks

### Developer Tools
- **ESLint** - Code quality and consistency

## Key Features Breakdown

### Authentication System
- Protected routes for authenticated users
- Login/Logout flow with redirect
- User state persistence with localStorage
- Context API for global auth state

### Search & Discovery
- Multi-category results (Movies/TV)
- URL-based search state for shareable links

### Watchlist Feature
- Add/remove movies and TV shows
- Persistent storage across sessions
- Context API for global watchlist state
- Visual indicators for saved content

### Responsive Design
- Mobile-first approach
- Breakpoints: mobile (< 640px), tablet (640-1024px), desktop (> 1024px)
- Touch-friendly interfaces
- Adaptive navigation menus

## API Endpoints Used

- `/movie/popular` - Popular movies
- `/tv/popular` - Popular TV shows
- `/trending/movie/week` - Trending movies
- `/movie/now_playing` - Now playing movies
- `/tv/on_the_air` - Currently airing TV shows
- `/search/movie` - Movie search
- `/search/tv` - TV show search
- `/movie/{id}` - Movie details
- `/tv/{id}` - TV show details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- User profiles with watch history
- Social features (ratings, reviews, sharing)
- Advanced filtering (genre, year, rating)
- Infinite scroll pagination
- User authentication with backend integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [React Documentation](https://react.dev/) for excellent learning resources

