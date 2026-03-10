import { useState } from 'react';

export default function HeroSection({ 
    backdropPath, 
    posterPath, 
    title, 
    rating, 
    releaseYear, 
    runtime 
}){

    const [backdropError, setBackdropError] = useState(false);
    const [posterError, setPosterError] = useState(false);

    return (
        <div className="relative h-[60vh] lg:h-[70vh] w-full">
            {/* Backdrop Image */}
            <div className="absolute inset-0">
                {!backdropError ? (
                    <img
                        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={() => setBackdropError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                        <img 
                            src="/images/icons/unavailable.png" 
                            alt="Backdrop not available"
                            className="w-32 h-32 opacity-50"
                        />
                    </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            {/* Content Overlay - Bottom on all screens */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-16">
                <div className="w-full">
                    {/* Mobile Layout - Centered */}
                    <div className="block lg:hidden text-center">
                        <h1 className="text-white text-3xl sm:text-4xl font-netflix-bold mb-3">
                            {title}
                        </h1>
                        
                        <div className="flex items-center justify-center gap-3 sm:gap-4 text-netflix-gray mb-4 flex-wrap">
                            <span className="flex items-center gap-1">
                                <span className="text-netflix-red">★</span>
                                {rating?.toFixed(1) || 'N/A'}
                            </span>
                            <span>•</span>
                            <span>{releaseYear || 'N/A'}</span>
                            <span>•</span>
                            <span>{runtime || 'N/A'}</span>
                        </div>
                        
                        <div className="flex gap-3 sm:gap-4 justify-center">
                            <button className="bg-netflix-red hover:bg-netflix-dark-red text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-netflix-medium transition-colors text-sm sm:text-base">
                                ▶ Watch Now
                            </button>
                            <button className="bg-netflix-gray/50 hover:bg-netflix-gray text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md font-netflix-medium transition-colors text-sm sm:text-base">
                                + Watchlist
                            </button>
                        </div>
                    </div>
                    
                    {/* Desktop Layout - With Poster */}
                    <div className="hidden lg:flex max-w-7xl mx-auto gap-8 items-end">
                        {/* Poster */}
                        <div className="w-64">
                            {!posterError ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                                    alt={title}
                                    className="w-full rounded-lg shadow-2xl"
                                    onError={() => setPosterError(true)}
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full aspect-[2/3] bg-[#222] rounded-lg shadow-2xl flex flex-col items-center justify-center gap-3">
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
                        </div>
                        
                        {/* Movie Info */}
                        <div className="flex-1">
                            <h1 className="text-white text-5xl font-netflix-bold mb-4">
                                {title}
                            </h1>
                            
                            <div className="flex items-center gap-4 text-netflix-gray mb-4">
                                <span className="flex items-center gap-1">
                                    <span className="text-netflix-red">★</span>
                                    {rating && rating > 0 ? rating.toFixed(1) : 'N/A'}
                                </span>
                                <span>•</span>
                                <span>{releaseYear || 'N/A'}</span>
                                <span>•</span>
                                <span>{runtime || 'N/A'}</span>
                            </div>
                            
                            <div className="flex gap-4">
                                <button className="bg-netflix-red hover:bg-netflix-dark-red text-white px-8 py-3 rounded-md font-netflix-medium transition-colors">
                                    ▶ Watch Now
                                </button>
                                <button className="bg-netflix-gray/50 hover:bg-netflix-gray text-white px-8 py-3 rounded-md font-netflix-medium transition-colors">
                                    + Watchlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}