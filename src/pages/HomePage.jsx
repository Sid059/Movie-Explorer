import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import MediaRow from '../components/media/MediaRow/MediaRow';
import Toggle from '../components/common/Toggle/Toggle';
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
            <div className="h-[60vh] bg-gradient-to-r from-netflix-red to-netflix-dark-red mb-8 flex items-center justify-center">
                <h1 className="text-white text-5xl font-netflix-bold">MovieFlix</h1>
            </div>

            {/* Trending Row */}
            <div className="mb-8">
                <h2 className="text-white text-3xl font-netflix-medium mb-4 px-4">Trending This Week</h2>
                <MediaRow 
                    items={trending?.results || []}
                    mediaType="movie"
                    isAuthenticated={isAuthenticated}
                    isInWatchlist={isInMovieWatchlist}
                    onWatchlistToggle={toggleMovieWatchlist}
                />
            </div>

            {/* Popular Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4 px-4">
                    <h2 className="text-white text-3xl font-netflix-medium">What's Popular</h2>
                    <Toggle 
                        options={TOGGLE_OPTIONS}
                        active={popularType}
                        onChange={setPopularType}
                    />
                </div>
                <MediaRow 
                    items={popular?.results || []}
                    mediaType={popularType}
                    isAuthenticated={isAuthenticated}
                    isInWatchlist={popularType === 'movie' ? isInMovieWatchlist : isInTVWatchlist}
                    onWatchlistToggle={popularType === 'movie' ? toggleMovieWatchlist : toggleTVWatchlist}
                />
            </div>

            {/* Free to Watch Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4 px-4">
                    <h2 className="text-white text-3xl font-netflix-medium">Free to Watch</h2>
                    <Toggle 
                        options={TOGGLE_OPTIONS}
                        active={freeType}
                        onChange={setFreeType}
                    />
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