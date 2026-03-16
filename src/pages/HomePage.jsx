import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import MediaRow from '../components/media/MediaRow/MediaRow';
import Toggle from '../components/common/Toggle/Toggle';
import SearchBar from '../components/search/SearchBar/SearchBar';
import { useAppContext } from '../context/AppContext';

const TOGGLE_OPTIONS = [
    { value: 'movie', label: 'Movies' },
    { value: 'tv', label: 'TV Shows' }
];

export default function Home() {
    const { 
        isAuthenticated, 
        isInMovieWatchlist, 
        isInTVWatchlist, 
        toggleMovieWatchlist, 
        toggleTVWatchlist 
    } = useAppContext();
    
    const [popularType, setPopularType] = useState('movie');
    const [freeType, setFreeType] = useState('movie');
    
    const { data: trending } = useFetch('/trending/movie/week');
    
    const popularEndpoint = popularType === 'movie' ? '/movie/popular' : '/tv/popular';
    const { data: popular } = useFetch(popularEndpoint);
    
    const freeEndpoint = freeType === 'movie' ? '/movie/now_playing' : '/tv/on_the_air';
    const { data: freeToWatch } = useFetch(freeEndpoint);

    return (
        <div className="pt-20 pb-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-netflix-red to-netflix-dark-red mb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-netflix-medium mb-3">
                        Welcome.
                    </h1>
                    <p className="text-white/90 text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl">
                        Millions of movies & TV shows to discover. Explore now.
                    </p>
                    <SearchBar />
                </div>
            </div>

            {/* Trending Row */}
            <div className="mb-8">
                <h2 className="text-white text-2xl sm:text-3xl font-netflix-medium mb-4 px-4">
                    Trending This Week
                </h2>
                <MediaRow 
                    items={trending?.results || []}
                    mediaType="movie"
                    isAuthenticated={isAuthenticated}
                    isInWatchlist={isInMovieWatchlist}
                    onWatchlistToggle={toggleMovieWatchlist}
                />
            </div>

            {/* Popular Section - Responsive header */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 px-4">
                    <h2 className="text-white text-2xl sm:text-3xl font-netflix-medium">
                        What's Popular
                    </h2>
                    <div className="flex justify-start sm:justify-end">
                        <Toggle 
                            options={TOGGLE_OPTIONS}
                            active={popularType}
                            onChange={setPopularType}
                        />
                    </div>
                </div>
                <MediaRow 
                    items={popular?.results || []}
                    mediaType={popularType}
                    isAuthenticated={isAuthenticated}
                    isInWatchlist={popularType === 'movie' ? isInMovieWatchlist : isInTVWatchlist}
                    onWatchlistToggle={popularType === 'movie' ? toggleMovieWatchlist : toggleTVWatchlist}
                />
            </div>

            {/* Free to Watch Section - Responsive header */}
            <div className="mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 px-4">
                    <h2 className="text-white text-2xl sm:text-3xl font-netflix-medium">
                        Free to Watch
                    </h2>
                    <div className="flex justify-start sm:justify-end">
                        <Toggle 
                            options={TOGGLE_OPTIONS}
                            active={freeType}
                            onChange={setFreeType}
                        />
                    </div>
                </div>
                <MediaRow 
                    items={freeToWatch?.results || []}
                    mediaType={freeType}
                    isAuthenticated={isAuthenticated}
                    isInWatchlist={freeType === 'movie' ? isInMovieWatchlist : isInTVWatchlist}
                    onWatchlistToggle={freeType === 'movie' ? toggleMovieWatchlist : toggleTVWatchlist}
                />
            </div>
        </div>
    );
}