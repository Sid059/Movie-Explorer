import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from '../components/layout/RootLayout/RootLayout';
import ProtectedRoute from '../components/layout/ProtectedRoute/ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary/ErrorBoundary';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const TVShowsPage = lazy(() => import('../pages/TvShowsPage'));
const TVDetailsPage = lazy(() => import('../pages/TVDetailsPage'));
const SearchPage = lazy(() => import('../pages/SearchResults'));
const WatchlistPage = lazy(() => import('../pages/WatchlistPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginContainer'));


// Create router using JSX notation with createRoutesFromElements
const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/* Index route - Home page */}
            <Route 
                index 
                element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <HomePage />
                        </Suspense>
                    </ErrorBoundary>
                } 
            />
            
            {/* Movies routes */}
            <Route 
                path="movies" 
                element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <MoviesPage />
                        </Suspense>
                    </ErrorBoundary>
                } 
            />
            
            {/* Dynamic route for movie details */}
            <Route 
                path="movie/:id" 
                element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <MovieDetailsPage />
                        </Suspense>
                    </ErrorBoundary>
                } 
            />
            
            {/* TV Shows routes */}
            <Route 
                path="tv" 
                element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <TVShowsPage />
                        </Suspense>
                    </ErrorBoundary>
                }  
            />

            {/* Dynamic route for tv shows details */}
            <Route 
                path="tv/:id" 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <TVDetailsPage />
                    </Suspense>
                } 
            />
            
            {/* Search route with query params */}
            <Route 
                path="search" 
                element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <SearchPage />
                        </Suspense>
                    </ErrorBoundary>
                } 
            />
            
            {/* Protected watchlist route */}
            <Route 
                path="watchlist" 
                element={
                    <ProtectedRoute>
                        <ErrorBoundary>
                            <Suspense fallback={<LoadingSpinner />}>
                                <WatchlistPage />
                            </Suspense>
                        </ErrorBoundary>
                    </ProtectedRoute>
                } 
            />

             {/* Login route */}
            <Route 
                path="login" 
                element={
                    <Suspense fallback={<LoadingSpinner />}>
                        <LoginPage />
                    </Suspense>
                } 
            />

        </Route>
    )
);

export { routes };