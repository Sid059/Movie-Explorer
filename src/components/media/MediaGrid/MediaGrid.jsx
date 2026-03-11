import MediaCard from '../MediaCard/MediaCard';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import EmptyState from '../../common/EmptyState/EmptyState';

export default function MediaGrid({
    items = [],              // Array of movies or TV shows
    mediaType = 'movie',      // 'movie' or 'tv'
    isLoading = false,
    error = null,
    onRetry,
    isAuthenticated = false,
    watchlistIds = [],
    onWatchlistToggle
}) {
    
    // Loading state
    if (isLoading) {
        return (
            <div className="w-full py-12">
                <LoadingSpinner />
            </div>
        );
    }
    
    // Error state
    if (error) {
        return (
            <div className="w-full py-12">
                <EmptyState
                    title="Failed to load"
                    message={error}
                    icon="/images/icons/error.png"
                    actionText="Try Again"
                    onAction={onRetry}
                />
            </div>
        );
    }
    
    // Empty state
    if (!isLoading && !error && items.length === 0) {
        return (
            <div className="w-full py-12">
                <EmptyState
                    title="No items found"
                    message="Try adjusting your search or filters"
                    icon="/images/icons/empty-folder.png"
                />
            </div>
        );
    }
    
    // Grid rendering
    return (
        <div className="px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {items.map(item => (
                    <div key={item.id}>
                        <MediaCard
                            item={item}
                            mediaType={mediaType}
                            isAuthenticated={isAuthenticated}
                            isInWatchlist={watchlistIds.includes(item.id)}
                            onWatchlistToggle={onWatchlistToggle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}