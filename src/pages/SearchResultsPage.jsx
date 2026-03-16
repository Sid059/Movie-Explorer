import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MediaGrid from '../components/media/MediaGrid/MediaGrid';
import Pagination from '../components/common/Pagination/Pagination'
import { useAppContext } from '../context/AppContext';
import EmptyState from '../components/common/EmptyState/EmptyState';

export default function SearchResultsPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const [currentPage, setCurrentPage] = useState(1);
    const { isAuthenticated, isInMovieWatchlist, isInTVWatchlist, toggleMovieWatchlist, toggleTVWatchlist } = useAppContext();
    
    // Reset page when query changes
    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    // Fetch search results for both movies and TV shows
    const { data: movieResults, loading: moviesLoading, error: moviesError } = 
        useFetch(`/search/movie?query=${encodeURIComponent(query)}&page=${currentPage}`);
    
    const { data: tvResults, loading: tvLoading, error: tvError } = 
        useFetch(`/search/tv?query=${encodeURIComponent(query)}&page=${currentPage}`);

    const [activeTab, setActiveTab] = useState('movies'); // Tracks whether the user is viewing Movies or TV Shows tab. Defaults to movies

    // Map the tab value to the correct mediaType
    const mediaType = activeTab === 'movies' ? 'movie' : 'tv';

    if (!query) {
        return (
            <div className="pt-16 pb-8">
                <EmptyState
                    title="Search for something"
                    message="Type in the search bar to find movies and TV shows"
                    icon="/images/icons/search.png"
                />
            </div>
        );
    }

    const isLoading = activeTab === 'movies' ? moviesLoading : tvLoading;
    const error = activeTab === 'movies' ? moviesError : tvError;
    const results = activeTab === 'movies' ? movieResults : tvResults;
    
    const items = results?.results || [];
    const totalPages = results?.total_pages || 1;
    const totalResults = results?.total_results || 0;

    return (
        <div className="pt-16 pb-8">
            <div className="px-4 mb-6">
                <h1 className="text-white text-3xl font-netflix-medium mb-2">
                    Search Results for "{query}"
                </h1>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 px-4 mb-6 border-b border-netflix-gray">
                <button
                    onClick={() => setActiveTab('movies')}
                    className={`pb-2 px-4 font-netflix-medium text-sm sm:text-base transition-colors ${
                        activeTab === 'movies'
                            ? 'text-netflix-red '
                            : 'text-netflix-gray hover:text-white'
                    }`}
                >
                    Movies ({movieResults?.total_results || 0})
                </button>
                <button
                    onClick={() => setActiveTab('tv')}
                    className={`pb-2 px-4 font-netflix-medium text-sm sm:text-base transition-colors ${
                        activeTab === 'tv'
                            ? 'text-netflix-red '
                            : 'text-netflix-gray hover:text-white'
                    }`}
                >
                    TV Shows ({tvResults?.total_results || 0})
                </button>
            </div>

            {/* Results Grid - Now using mediaType which is either 'movie' or 'tv' */}
            <MediaGrid 
                items={items}
                mediaType={mediaType}  // This will be 'movie' or 'tv'
                isLoading={isLoading}
                error={error?.message}
                isAuthenticated={isAuthenticated}
                isInWatchlist={activeTab === 'movies' ? isInMovieWatchlist : isInTVWatchlist}
                onWatchlistToggle={activeTab === 'movies' ? toggleMovieWatchlist : toggleTVWatchlist}
            />

            {/* Pagination */}
            {!isLoading && !error && items.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}