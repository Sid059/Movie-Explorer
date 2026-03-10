import MovieCard from "../MovieCard/MovieCard";

export default function SimilarMovies({ movies }) {
    return (
        <div>
            <h2 className="text-white text-2xl font-netflix-bold mb-6">
                Similar Movies
            </h2>
            
            {/* Simple horizontal scroll with visible scrollbar */}
            <div className="flex overflow-x-auto gap-4 pb-4">
                {movies.map(movie => (
                    <div key={movie.id} className="flex-none w-[200px]">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}