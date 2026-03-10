export default function MovieInfo({ overview, genres, releaseDate, runtime }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview - takes 2 columns on desktop */}
            <div className="lg:col-span-2">
                <h2 className="text-white text-2xl font-netflix-bold mb-4">Overview</h2>
                <p className="info-text text-base lg:text-lg leading-relaxed">
                    {overview}
                </p>
            </div>
            
            {/* Movie Details Sidebar */}
            <div className="space-y-6">
                {/* Genres */}
                <div>
                    <h3 className="info-section-heading">Genres</h3>
                    <div className="flex flex-wrap gap-2">
                        {genres.map(genre => (
                            <span
                                key={genre.id}
                                className="bg-[#222] info-text px-3 py-1 rounded-full text-sm"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Release Date */}
                <div>
                    <h3 className="info-section-heading">Release Date</h3>
                    <p className="info-text">
                        {new Date(releaseDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>
                
                {/* Runtime */}
                <div>
                    <h3 className="info-section-heading">Runtime</h3>
                    <p className="info-text">
                        {runtime}
                    </p>
                </div>
            </div>
        </div>
    );
}