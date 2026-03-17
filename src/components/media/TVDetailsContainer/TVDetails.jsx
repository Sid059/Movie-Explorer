import { useState, useMemo } from 'react';
import HeroSection from '../MediaDetailsComponents/HeroSection';
import MediaInfo from '../MediaDetailsComponents/MediaInfo';
import CastList from '../MediaDetailsComponents/CastList';
import ReviewsSection from '../MediaDetailsComponents/ReviewsSection';
import SimilarMedia from '../MediaDetailsComponents/SimilarMedia';
import './TVDetails.css';

import { useAppContext } from '../../../context/AppContext';

export default function TVDetails({ show }) {
    const [activeTab, setActiveTab] = useState('info');
    
    const {
        name,                    // TV shows use 'name' instead of 'title'
        backdrop_path,
        poster_path,
        vote_average,
        first_air_date,          // TV shows use 'first_air_date'
        last_air_date,
        number_of_seasons,
        number_of_episodes,
        genres,
        overview,
        credits = { cast: [] },
        reviews = { results: [] },
        similar = { results: [] },
        videos = { results: [] }
    } = show;
    
    // Find the first YouTube trailer
    const trailer = videos.results?.find(
        video => video.site === 'YouTube' && video.type === 'Trailer'
    );

    // Get YouTube video ID (key)
    const trailerKey = trailer?.key || null;

    const { isAuthenticated, toggleTVWatchlist, isInTVWatchlist } = useAppContext();

    // Format seasons/episodes info
    const seasonsInfo = `${number_of_seasons} season${number_of_seasons !== 1 ? 's' : ''}, ${number_of_episodes} episode${number_of_episodes !== 1 ? 's' : ''}`;
    
    // Format release year for HeroSection (uses first air date)
    const releaseYear = useMemo(() => {
        return first_air_date ? new Date(first_air_date).getFullYear() : 'N/A';
    }, [first_air_date]);
    
    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section with Backdrop */}
            <HeroSection
                backdropPath={backdrop_path}
                posterPath={poster_path}
                title={name}
                rating={vote_average}
                releaseYear={releaseYear}
                runtime={seasonsInfo}  // Passing seasons info instead of runtime
                trailerKey={trailerKey}
                isInWatchlist={isInTVWatchlist(show?.id)}  // From context
                onWatchlistToggle={() => toggleTVWatchlist(show)}
                isAuthenticated={isAuthenticated}
            />
            
            {/* Main Content Container */}
            <div className="content-container">
                {/* Tab Navigation */}
                <div className="flex border-b border-netflix-gray mb-6">
                    <button
                        onClick={() => setActiveTab('info')}
                        className={`tab-button ${
                            activeTab === 'info' 
                                ? 'tab-button-active' 
                                : 'tab-button-inactive'
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('cast')}
                        className={`tab-button ${
                            activeTab === 'cast' 
                                ? 'tab-button-active' 
                                : 'tab-button-inactive'
                        }`}
                    >
                        Cast ({credits.cast.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`tab-button ${
                            activeTab === 'reviews' 
                                ? 'tab-button-active' 
                                : 'tab-button-inactive'
                        }`}
                    >
                        Reviews ({reviews.results.length})
                    </button>
                </div>
                
                {/* Tab Content */}
                <div className="mb-12">
                    {activeTab === 'info' && (
                        <div className="space-y-6">
                            <MediaInfo
                                overview={overview}
                                genres={genres}
                                releaseDate={first_air_date}
                                runtime={seasonsInfo}
                            />
                            
                            {/* Additional TV-specific info */}
                            <div className="bg-[#111] rounded-lg p-6 border border-netflix-gray/20">
                                <h3 className="text-white font-netflix-medium mb-3">Series Info</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="text-netflix-gray">Seasons</p>
                                        <p className="text-white">{number_of_seasons}</p>
                                    </div>
                                    <div>
                                        <p className="text-netflix-gray">Episodes</p>
                                        <p className="text-white">{number_of_episodes}</p>
                                    </div>
                                    <div>
                                        <p className="text-netflix-gray">First Air Date</p>
                                        <p className="text-white">
                                            {new Date(first_air_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-netflix-gray">Last Air Date</p>
                                        <p className="text-white">
                                            {last_air_date ? new Date(last_air_date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }) : 'Ongoing'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'cast' && (
                        <CastList cast={credits.cast.slice(0, 12)} />
                    )}
                    
                    {activeTab === 'reviews' && (
                        <ReviewsSection reviews={reviews.results} />
                    )}
                </div>
                
                {/* Similar Shows Section */}
                {similar.results?.length > 0 && (
                    <SimilarMedia 
                        items={similar.results}
                        mediaType="tv"
                    />
                )}
            </div>
        </div>
    );
}