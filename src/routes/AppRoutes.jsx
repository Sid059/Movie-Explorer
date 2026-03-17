import { createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import RootLayout from '../components/layout/RootLayout/RootLayout';
import ProtectedRoute from '../components/layout/ProtectedRoute/ProtectedRoute';
import LoadingSpinner from '../components/common/LoadingSpinner/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary/ErrorBoundary';

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const TVDetailsPage = lazy(() => import('../pages/TVDetailsPage'));
const SearchPage = lazy(() => import('../pages/SearchResultsPage'));
const WatchlistPage = lazy(() => import('../pages/WatchlistPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginContainer'));
const CategoryPage = lazy(() => import('../pages/CategoryPage'));

const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={
                <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                        <HomePage />
                    </Suspense>
                </ErrorBoundary>
            } />
            
            {/* Movie Categories - paths match TMDB endpoints */}
            <Route path="movie/">
                <Route path="popular" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
                <Route path="now_playing" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
                <Route path="upcoming" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
                <Route path="top_rated" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
            </Route>
            
            
            {/* TV Categories - paths match TMDB endpoints */}
            <Route path="tv/">
                <Route path="popular" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
                <Route path="airing_today" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
                <Route path="on_the_air" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
                <Route path="top_rated" element={
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <CategoryPage />
                        </Suspense>
                    </ErrorBoundary>
                } />
            </Route>
            
            {/* Details pages */}
            <Route path="movie/:id" element={
                <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                        <MovieDetailsPage />
                    </Suspense>
                </ErrorBoundary>
            } />
            
            <Route path="tv/:id" element={
                <Suspense fallback={<LoadingSpinner />}>
                    <TVDetailsPage />
                </Suspense>
            } />
            
            {/* Other routes */}
            <Route path="search" element={
                <ErrorBoundary>
                    <Suspense fallback={<LoadingSpinner />}>
                        <SearchPage />
                    </Suspense>
                </ErrorBoundary>
            } />
            
            <Route path="watchlist" element={
                <ProtectedRoute>
                    <ErrorBoundary>
                        <Suspense fallback={<LoadingSpinner />}>
                            <WatchlistPage />
                        </Suspense>
                    </ErrorBoundary>
                </ProtectedRoute>
            } />

            <Route path="login" element={
                <Suspense fallback={<LoadingSpinner />}>
                    <LoginPage />
                </Suspense>
            } />


            <Route path="about" element={
                <Suspense fallback={<LoadingSpinner />}>
                    <AboutPage />
                </Suspense>
            } />

            <Route path="contact" element={
                <Suspense fallback={<LoadingSpinner />}>
                    <ContactPage />
                </Suspense>
            } />

            <Route path="faq" element={
                <Suspense fallback={<LoadingSpinner />}>
                    <FAQPage />
                </Suspense>
            } />

        </Route>
    )
);

export { routes };