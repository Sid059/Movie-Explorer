import useFetch from '../hooks/useFetch';
import MediaGrid from '../components/media/MediaGrid/MediaGrid';
import { useAppContext } from '../context/AppContext';

export default function TVShowsPage() {
    const { isAuthenticated, tvWatchlist, toggleTVWatchlist } = useAppContext();
    const { data, loading, error } = useFetch('/tv/popular');
    
    const watchlistIds = tvWatchlist.map(show => show.id);
    
    return (
        <div className="pt-20 pb-8">
            <h1 className="text-white text-3xl font-netflix-bold px-4 mb-6">
                Popular TV Shows
            </h1>
            <MediaGrid 
                items={data?.results || []}
                mediaType="tv"  // Add this prop
                isLoading={loading}
                error={error?.message}
                isAuthenticated={isAuthenticated}
                watchlistIds={watchlistIds}
                onWatchlistToggle={toggleTVWatchlist}
            />
        </div>
    );
}