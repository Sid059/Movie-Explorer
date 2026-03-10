export default function HeroSection({ 
    backdropPath, 
    posterPath, 
    title, 
    rating, 
    releaseYear, 
    runtime 
}) {
    return (
        <div className="relative h-[60vh] lg:h-[70vh] w-full">
            {/* Backdrop Image */}
            <div className="absolute inset-0">
                <img
                    src={`https://image.tmdb.org/t/p/original${backdropPath}`}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-end">
                    {/* Poster (hidden on mobile) */}
                    <img
                        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                        alt={title}
                        className="hidden lg:block w-64 rounded-lg shadow-2xl"
                    />
                    
                    {/* Movie Info */}
                    <div className="flex-1">
                        <h1 className="text-white text-4xl lg:text-5xl font-netflix-bold mb-4">
                            {title}
                        </h1>
                        
                        <div className="flex items-center gap-4 text-netflix-gray mb-4">
                            <span className="flex items-center gap-1">
                                <span className="text-netflix-red">★</span>
                                {rating.toFixed(1)}
                            </span>
                            <span>•</span>
                            <span>{releaseYear}</span>
                            <span>•</span>
                            <span>{runtime}</span>
                        </div>
                        
                        {/* Action Buttons */}
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
    );
}