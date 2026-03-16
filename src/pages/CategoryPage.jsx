import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MediaGrid from '../components/media/MediaGrid/MediaGrid';
import Pagination from '../components/common/Pagination/Pagination';
import { useAppContext } from '../context/AppContext';
import { movieOptions, tvOptions } from '../utils/navOptions';

export default function CategoryPage() {
    const location = useLocation();
    const currentPath = location.pathname; // e.g., '/movie/popular' or '/tv/popular'
    const [currentPage, setCurrentPage] = useState(1);
    const { isAuthenticated, isInMovieWatchlist, isInTVWatchlist, toggleMovieWatchlist, toggleTVWatchlist } = useAppContext();
    
    // Determine if this is movies or tv
    const isMovie = currentPath.startsWith('/movie');
    
    // Get the correct options array
    const options = isMovie ? movieOptions : tvOptions;
    
    // Find the matching option
    const option = options.find(opt => opt.path === currentPath);
    
    if (!option) {
        return (
            <div className="pt-20 text-center">
                <h1 className="text-white text-3xl mb-4">Category Not Found</h1>
            </div>
        );
    }

    const title = `${option.label} ${isMovie ? 'Movies' : 'TV Shows'}`;
    const endpoint = `${option.path}?page=${currentPage}`;
    const { data, loading, error } = useFetch(endpoint);
    
    const items = data?.results || [];
    const totalPages = data?.total_pages || 1;
    
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="pt-16 pb-8">
            <h1 className="text-white text-3xl font-netflix-medium px-4 mb-6">
                {title}
            </h1>
            
            <MediaGrid 
                items={items}
                mediaType={isMovie ? 'movie' : 'tv'}
                isLoading={loading}
                error={error?.message}
                isAuthenticated={isAuthenticated}
                isInWatchlist={isMovie ? isInMovieWatchlist : isInTVWatchlist}
                onWatchlistToggle={isMovie ? toggleMovieWatchlist : toggleTVWatchlist}
            />
            
            {!loading && !error && items.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
}