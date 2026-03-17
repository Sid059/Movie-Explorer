import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MovieDetails from '../components/media/MovieDetailsContainer/MovieDetails';
import ErrorBoundary from '../components/common/ErrorBoundary/ErrorBoundary'
import EmptyState from '../components/common/EmptyState/EmptyState';
import '../components/media/MovieDetailsContainer/MovieDetails.css';

export default function MovieDetailsPage() {

    const { id } = useParams();

    const { 
        data: movie, 
        loading: movieLoading, 
        error: movieError 
    } = useFetch(`/movie/${id}?append_to_response=credits,reviews,similar,videos`);

    
    if (movieLoading) {
        return null;
    }
    
    if (movieError || !movie) {
        return (
            <div className="fullscreen-center">
                <EmptyState
                    title="Failed to load movie"
                    message={movieError || "Movie not found"}
                    icon="/images/icons/error.png"
                    actionText="Go Back"
                    actionLink="/movie/popular"
                />
            </div>
        );
    }
    
    return (
        <ErrorBoundary>
            <MovieDetails movie={movie} />
        </ErrorBoundary>
    );
}