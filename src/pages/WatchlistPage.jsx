import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import MediaGrid from '../components/media/MediaGrid/MediaGrid';
import EmptyState from '../components/common/EmptyState/EmptyState';

export default function WatchlistPage() {
    const { isAuthenticated, movieWatchlist, tvWatchlist, toggleMovieWatchlist, toggleTVWatchlist } = useAppContext();
    const [activeTab, setActiveTab] = useState('movies');

    const movieIds = movieWatchlist.map(m => m.id);
    const tvIds = tvWatchlist.map(t => t.id);

    return (
        <div className="pt-20 pb-8">
            <h1 className="text-white text-3xl font-netflix-bold px-4 mb-6">
                My Watchlist
            </h1>

            {/* Category Tabs */}
            <div className="flex gap-4 px-4 mb-6 border-b border-netflix-gray">
                <button
                    onClick={() => setActiveTab('movies')}
                    className={`pb-2 px-4 font-netflix-medium transition-colors ${
                        activeTab === 'movies'
                            ? 'text-netflix-red'
                            : 'text-netflix-gray hover:text-white'
                    }`}
                >
                    Movies ({movieWatchlist.length})
                </button>
                <button
                    onClick={() => setActiveTab('tv')}
                    className={`pb-2 px-4 font-netflix-medium transition-colors ${
                        activeTab === 'tv'
                            ? 'text-netflix-red'
                            : 'text-netflix-gray hover:text-white'
                    }`}
                >
                    TV Shows ({tvWatchlist.length})
                </button>
            </div>

            {/* Movies Tab */}
            {activeTab === 'movies' && (
                <>
                    {movieWatchlist.length === 0 ? (
                        <EmptyState
                            title="No movies in watchlist"
                            message="Start adding movies to keep track of what you want to watch"
                            icon="/images/icons/empty-folder.png"
                            actionText="Browse Movies"
                            actionLink="/movies"
                        />
                    ) : (
                        <MediaGrid 
                            items={movieWatchlist}
                            mediaType="movie"
                            isLoading={false}
                            isAuthenticated={isAuthenticated}
                            watchlistIds={movieIds}
                            onWatchlistToggle={toggleMovieWatchlist}
                        />
                    )}
                </>
            )}

            {/* TV Shows Tab */}
            {activeTab === 'tv' && (
                <>
                    {tvWatchlist.length === 0 ? (
                        <EmptyState
                            title="No TV shows in watchlist"
                            message="Start adding TV shows to keep track of what you want to watch"
                            icon="/images/icons/empty-folder.png"
                            actionText="Browse TV Shows"
                            actionLink="/tv"
                        />
                    ) : (
                        <MediaGrid 
                            items={tvWatchlist}
                            mediaType="tv"
                            isLoading={false}
                            isAuthenticated={isAuthenticated}
                            watchlistIds={tvIds}
                            onWatchlistToggle={toggleTVWatchlist}
                        />
                    )}
                </>
            )}
        </div>
    );
}