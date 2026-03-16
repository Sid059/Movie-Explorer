import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import MediaGrid from '../components/media/MediaGrid/MediaGrid';
import Pagination from '../components/common/Pagination/Pagination';
import { useAppContext } from '../context/AppContext';

export default function MoviesPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const { isAuthenticated, isInMovieWatchlist, toggleMovieWatchlist } = useAppContext();
    
    const { data, loading, error } = useFetch(`/movie/popular?page=${currentPage}`);
    
    const totalPages = data?.total_pages || 1;
    
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    return (
        <div className="pt-20 pb-8">
            <h1 className="text-white text-3xl font-netflix-medium px-4 mb-6">
                Popular Movies
            </h1>
            
            <MediaGrid 
                items={data?.results || []}
                mediaType="movie"
                isLoading={loading}
                error={error?.message}
                isAuthenticated={isAuthenticated}
                isInWatchlist={isInMovieWatchlist}  // Pass function, not array
                onWatchlistToggle={toggleMovieWatchlist}
            />
            
            {!loading && !error && data?.results.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}