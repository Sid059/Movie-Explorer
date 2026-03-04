import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie, isAuthenticated, isInWatchlist, onWatchlistToggle }) {

    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    
    // Destructure movie object for cleaner code
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
    
    // Handle watchlist button click (stop propagation to prevent card click)
    const handleWatchlistClick = (e) => {
        e.stopPropagation();
        onWatchlistToggle(movie);
    };
    
    // Poster URL Full URL needed: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
    const posterUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : null;
    
    return (
        <div
            onClick={handleCardClick}
            className="relative group cursor-pointer bg-[#111] rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105 hover:z-10"
        >
            {/* Poster Container */}
            <div className="relative aspect-[2/3] bg-[#222]">
                {/* Loading Skeleton */}
                {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 bg-[#333] animate-pulse" />
                )}
                
                {/* Poster Image */}
                {posterUrl && !imageError ? (
                    <img
                        src={posterUrl}
                        alt={title}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ) : (
                    // Fallback when no poster
                    <div className="w-full h-full flex items-center justify-center bg-[#333]">
                        <span className="text-netflix-gray text-sm px-2 text-center">
                            No Poster
                        </span>
                    </div>
                )}
                
                {/* Rating Badge */}
                {rating > 0 && (
                    <div className="absolute top-2 left-2 bg-netflix-red text-white px-2 py-1 rounded-md text-xs font-netflix-medium">
                        ★ {rating}
                    </div>
                )}
                
                {/* Watchlist Button - Only for authenticated users */}
                {isAuthenticated && (
                    <button
                        onClick={handleWatchlistClick}
                        className="absolute top-2 right-2 bg-black/50 hover:bg-netflix-red text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                    >
                        {isInWatchlist ? '✓' : '+'}
                    </button>
                )}
            </div>
            
            {/* Movie Info - Visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-base lg:text-lg font-netflix-medium line-clamp-2">
                    {title}
                </h3>
                <p className="text-netflix-gray text-sm mt-1">
                    {year}
                </p>
            </div>
            
            {/* Simple info for non-hover devices (mobile) */}
            <div className="p-3 bg-[#111] lg:hidden">
                <h3 className="text-white text-sm font-netflix-medium line-clamp-1">
                    {title}
                </h3>
                <p className="text-netflix-gray text-xs mt-1">
                    {year} • ★ {rating}
                </p>
            </div>
        </div>
    );
}