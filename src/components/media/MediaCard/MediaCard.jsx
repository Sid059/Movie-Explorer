import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBookmark as fasBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

export default function MediaCard({ 
    item,                    // Can be movie or TV show
    mediaType = 'movie',      // 'movie' or 'tv'
    isAuthenticated, 
    isInWatchlist, 
    onWatchlistToggle 
}) {
    
    if (!item) return null;

    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    // Handle both movie and TV show data structures
    const id = item.id;
    const title = item.title || item.name || 'Untitled';
    const posterPath = item.poster_path;
    const rating = item.vote_average?.toFixed(1);
    
    // Get year from release_date (movie) or first_air_date (TV)
    const date = item.release_date || item.first_air_date;
    const year = date ? new Date(date).getFullYear() : 'N/A';
    
    const handleImageLoad = () => setImageLoaded(true);
    const handleImageError = () => setImageError(true);
    
    // Navigate to correct details page
    const handleCardClick = () => {
        navigate(`/${mediaType}/${id}`);  // /movie/123 or /tv/123
    };
    
    const handleWatchlistClick = (e) => {
        e.stopPropagation();
        onWatchlistToggle(item);
    };
    
    const posterUrl = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : null;
    
    return (
        <div
            onClick={handleCardClick}
            className="relative cursor-pointer bg-[#111] rounded-lg overflow-hidden"
        >
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
                        <FontAwesomeIcon icon={faStar} /> {rating}
                    </div>
                ) : (
                    <div className="absolute top-2 left-2 bg-netflix-red text-netflix-white px-2 py-1 rounded-md text-xs font-netflix-medium">
                        N/A
                    </div>
                )}
                
                {/* Watchlist Button */}
                {isAuthenticated && (
                    <button
                        onClick={handleWatchlistClick}
                        className="absolute top-2 right-2 bg-black/50 hover:bg-netflix-red cursor-pointer text-white w-8 h-8 rounded-full flex items-center justify-center"
                    >
                        {isInWatchlist ? <FontAwesomeIcon icon={fasBookmark} /> : <FontAwesomeIcon icon={farBookmark} />}
                    </button>
                )}

                {/* Info - Always visible */}
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