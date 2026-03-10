import useFetch from '../hooks/useFetch';
import MovieGrid from '../components/movies/MovieGrid/MovieGrid';

export default function MoviesPage() {
    
    const { data, loading, error } = useFetch('/movie/popular');
    
    return (
        <div className="pt-20 pb-8">
            <h1 className="text-white text-3xl font-netflix-bold px-4 mb-6">
                Popular Movies
            </h1>
            <MovieGrid 
                movies={data?.results || []}
                isLoading={loading}
                error={error?.message}
            />
        </div>
    );
}