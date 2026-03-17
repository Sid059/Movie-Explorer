import MediaCard from '../MediaCard/MediaCard';
import React from 'react';

function MediaRow({ 
    items = [],
    mediaType = 'movie',
    isAuthenticated = false,
    isInWatchlist,  // This should be a FUNCTION
    onWatchlistToggle
}) {
    if (!items.length) return null;

    return (
        <div className="flex overflow-x-auto gap-4 px-4 pb-4 scrollbar-hide">
            {items.slice(0, 20).map(item => (
                <div key={item.id} className="flex-none w-[200px]">
                    <MediaCard
                        item={item}
                        mediaType={mediaType}
                        isAuthenticated={isAuthenticated}
                        isInWatchlist={isInWatchlist(item.id)}
                        onWatchlistToggle={onWatchlistToggle}
                    />
                </div>
            ))}
        </div>
    );
}

export default React.memo(MediaRow);