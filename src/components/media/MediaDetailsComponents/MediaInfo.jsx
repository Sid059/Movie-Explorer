import { formatDate } from "../../../utils/helperFunction";

export default function MediaInfo({ overview, genres, releaseDate, runtime }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overview - takes 2 columns on desktop */}
            <div className="lg:col-span-2">
                <h2 className="text-white text-2xl font-netflix-bold mb-4">Overview</h2>
                <p className="info-text text-base lg:text-lg leading-relaxed text-netflix-gray">
                    {overview}
                </p>
            </div>
            
            {/* Movie Details Sidebar */}
            <div className="space-y-6">
                {/* Genres */}
                <div>
                    <h3 className="info-section-heading mb-2">Genres</h3>
                    <div className="flex flex-wrap gap-2">
                        {genres.map(genre => (
                            <span
                                key={genre.id}
                                className="bg-[#222] info-text px-3 py-2 rounded-full text-sm text-netflix-gray"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Release Date */}
                <div>
                    <h3 className="info-section-heading">Release Date</h3>
                    <p className="info-text text-netflix-gray">
                        { formatDate(releaseDate) }
                    </p>
                </div>
                
                {/* Runtime */}
                <div>
                    <h3 className="info-section-heading">Runtime</h3>
                    <p className="info-text text-netflix-gray">
                        {runtime}
                    </p>
                </div>
            </div>
        </div>
    );
}