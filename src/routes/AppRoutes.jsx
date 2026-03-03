import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from '../components/layout/RootLayout/RootLayout';
import ProtectedRoute from '../components/layout/ProtectedRoute/ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';
// Lazy load pages
const HomePage = lazy(() => import('../pages/Home'));
const MoviesPage = lazy(() => import('../pages/Movies'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails'));
const TvShowsPage = lazy(() => import('../pages/TvShows'));
const SearchPage = lazy(() => import('../pages/SearchResults'));
const WatchlistPage = lazy(() => import('../pages/Watchlist'));

// Create router using JSX notation with createRoutesFromElements
const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* Index route - Home page */}
            <Route 
                index 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <HomePage />
                    </Suspense>
                } 
            />
            
            {/* Movies routes */}
            <Route 
                path="movies" 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <MoviesPage />
                    </Suspense>
                } 
            />
            
            {/* Dynamic route for movie details */}
            <Route 
                path="movie/:id" 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <MovieDetailsPage />
                    </Suspense>
                } 
            />
            
            {/* TV Shows routes */}
            <Route 
                path="tv" 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <TvShowsPage />
                    </Suspense>
                } 
            />
            
            {/* Search route with query params */}
            <Route 
                path="search" 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <SearchPage />
                    </Suspense>
                } 
            />
            
            {/* Protected watchlist route */}
            <Route 
                path="watchlist" 
                element={
                    <ProtectedRoute>
                        <Suspense fallback={<LoadingSpinner />}>
                            <WatchlistPage />
                        </Suspense>
                    </ProtectedRoute>
                } 
            />
        </Route>
    )
);

export { routes };