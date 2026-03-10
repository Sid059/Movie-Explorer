import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie, isAuthenticated, isInWatchlist, onWatchlistToggle }) {
    
    if (!movie) {
        return null;
    }

    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    // Destructure movie object
    const { 
        id, 
        title, 
        poster_path, 
        vote_average, 
        release_date 
    } = movie;
    
    // Format rating to 1 decimal place
    const rating = vote_average?.toFixed(1);
    
    // Get year from release date
    const year = release_date ? new Date(release_date).getFullYear() : 'N/A';
    
    // Handle image load
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    
    // Handle image error
    const handleImageError = () => {
        setImageError(true);
    };
    
    // Handle card click
    const handleCardClick = () => {
        navigate(`/movie/${id}`);
    };
    
    // Handle watchlist button click
    const handleWatchlistClick = (e) => {
        e.stopPropagation();
        onWatchlistToggle(movie);
    };
    
    // Poster URL
    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : null;
    
    return (
        <div
            onClick={handleCardClick}
            className="relative cursor-pointer bg-[#111] rounded-lg overflow-hidden"
        >
            {/* Poster Container */}
            <div className="relative aspect-[2/3] bg-[#222]">
                {/* Loading Skeleton */}
                {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-[#333]" />
                )}
                
                {/* Poster Image */}
                {posterUrl && !imageError ? (
                    <img
                        src={posterUrl}
                        alt={title}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        className={`w-full h-full object-cover ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading='lazy'
                    />
                ) : (
                    // Fallback when no poster
                    <div className="w-full h-full bg-[#222] flex flex-col items-center justify-center gap-3">
                        <img 
                            src="/images/icons/unavailable.png" 
                            alt="Poster not available"
                            className="w-24 h-24 opacity-70"
                        />
                        <span className="text-netflix-gray text-base font-netflix-medium text-center px-3">
                            {title}
                        </span>
                    </div>
                )}
                
                {/* Rating Badge */}
                {rating > 0 ? (
                    <div className="absolute top-2 left-2 bg-netflix-red text-white px-2 py-1 rounded-md text-xs font-netflix-medium">
                        ★ {rating}
                    </div>
                ) : (
                    <div className="absolute top-2 left-2 bg-netflix-gray/50 text-netflix-gray px-2 py-1 rounded-md text-xs font-netflix-medium">
                        N/A
                    </div>
                )}
                
                {/* Watchlist Button - Only for authenticated users */}
                {isAuthenticated && (
                    <button
                        onClick={handleWatchlistClick}
                        className="absolute top-2 right-2 bg-black/50 hover:bg-netflix-red cursor-pointer text-white w-8 h-8 rounded-full flex items-center justify-center"
                    >
                        {isInWatchlist ? '✓' : '+'}
                    </button>
                )}

                {/* Movie Info - ALWAYS VISIBLE at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                    <h3 className="text-white text-base lg:text-lg font-netflix-medium line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-netflix-gray text-sm mt-1">
                        {year}
                    </p>
                </div>
            </div>
        </div>
    );
}