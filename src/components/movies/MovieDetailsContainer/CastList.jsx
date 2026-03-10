import { useState } from 'react';

export default function CastList({ cast }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const INITIAL_DISPLAY_COUNT = 12;
    
    const displayedCast = isExpanded ? cast : cast.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMore = cast.length > INITIAL_DISPLAY_COUNT;

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-2xl font-netflix-bold">
                    Cast ({cast.length})
                </h2>
                
                {hasMore && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-netflix-gray text-sm font-netflix-medium hover:text-white focus:outline-none"
                    >
                        {isExpanded ? 'Show less' : `View all ${cast.length} cast members`}
                    </button>
                )}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {displayedCast.map(person => (
                    <div key={person.id} className="text-center">
                        <img
                            src={person.profile_path 
                                ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                                : '/images/icons/no-profile.png'
                            }
                            alt={person.name}
                            className="w-full aspect-square object-cover rounded-lg mb-2"
                            loading='lazy'
                        />
                        <h3 className="text-white text-sm font-netflix-medium">
                            {person.name}
                        </h3>
                        <p className="text-netflix-gray text-xs">
                            {person.character}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}