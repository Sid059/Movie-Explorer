import MovieCard from '../MovieCard/MovieCard';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import EmptyState from '../../common/EmptyState/EmptyState';

export default function MovieGrid({
    movies = [],
    isLoading = false,
    error = null,
    onRetry,
    isAuthenticated = false,
    watchlistIds = [],
    onWatchlistToggle
}) {
    if (isLoading) return <LoadingSpinner />;
    if (error) return <EmptyState title="Error" message={error} onAction={onRetry} actionText="Try Again" />;
    if (movies.length === 0) return <EmptyState title="No movies found" />;

    return (
        <div className="px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <MovieCard
                            movie={movie}
                            isAuthenticated={isAuthenticated}
                            isInWatchlist={watchlistIds?.includes(movie.id)}
                            onWatchlistToggle={onWatchlistToggle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}