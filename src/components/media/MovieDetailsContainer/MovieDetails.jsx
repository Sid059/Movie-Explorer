import { useState, useMemo } from 'react';
import HeroSection from '../MediaDetailsComponents/HeroSection';
import MediaInfo from '../MediaDetailsComponents/MediaInfo';
import CastList from '../MediaDetailsComponents/CastList';
import SimilarMedia from '../MediaDetailsComponents/SimilarMedia';
import ReviewsSection from '../MediaDetailsComponents/ReviewsSection';
import './MovieDetails.css';

import { useAppContext } from '../../../context/AppContext';

export default function MovieDetails({ movie }) {
    const [activeTab, setActiveTab] = useState('info');
    
    const {
        title,
        backdrop_path,
        poster_path,
        vote_average,
        release_date,
        runtime,
        genres,
        overview,
        credits = { cast: [] },
        reviews = { results: [] },
        similar = { results: [] },
        videos = { results: [] }
    } = movie;

    // Find the first YouTube trailer
    const trailer = videos.results?.find(
        video => video.site === 'YouTube' && video.type === 'Trailer'
    );

    // Get just the YouTube video ID (key)
    const trailerKey = trailer?.key || null;


    const { isAuthenticated, toggleMovieWatchlist, isInMovieWatchlist } = useAppContext();
    
    // Format runtime (e.g., 148 → "2h 28m")
    const formattedRuntime = useMemo(() => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return `${hours}h ${minutes}m`;
    }, [runtime]);
    
    // Format release year
    const releaseYear = useMemo(() => {
        return new Date(release_date).getFullYear();
    }, [release_date]);
    
    return (
        <div className="bg-black min-h-screen">
            {/* Hero Section with Backdrop */}
            <HeroSection
                backdropPath={backdrop_path}
                posterPath={poster_path}
                title={title}
                rating={vote_average}
                releaseYear={releaseYear}
                runtime={formattedRuntime}
                trailerKey={trailerKey} 
                isInWatchlist={isInMovieWatchlist(movie?.id)}  
                onWatchlistToggle={() => toggleMovieWatchlist(movie)}
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
                        <MediaInfo
                            overview={overview}
                            genres={genres}
                            releaseDate={release_date}
                            runtime={formattedRuntime}
                        />
                    )}
                    
                    {activeTab === 'cast' && (
                        <CastList cast={credits.cast} />
                    )}
                    
                    {activeTab === 'reviews' && (
                        <ReviewsSection reviews={reviews.results} />
                    )}
                </div>
                
                {/* Similar Movies Section (always visible) */}
                {similar.results.length > 0 && (
                    <SimilarMedia 
                        items={similar.results}
                        mediaType="movie"
                     />
                )}
            </div>
        </div>
    );
}