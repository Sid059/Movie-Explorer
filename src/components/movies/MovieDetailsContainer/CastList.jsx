export default function CastList({ cast }) {
    return (
        <div>
            <h2 className="text-white text-2xl font-netflix-bold mb-6">Cast</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {cast.map(person => (
                    <div key={person.id} className="text-center">
                        <img
                            src={person.profile_path 
                                ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
                                : '/images/icons/no-profile.png'
                            }
                            alt={person.name}
                            className="w-full aspect-square object-cover rounded-lg mb-2"
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