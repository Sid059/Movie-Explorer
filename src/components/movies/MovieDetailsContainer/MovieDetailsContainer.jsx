import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import MovieDetails from './MovieDetails';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import EmptyState from '../../common/EmptyState/EmptyState';
import './MovieDetails.css';

export default function MovieDetailsContainer() {

    const { id } = useParams();

    const { 
        data: movie, 
        loading: movieLoading, 
        error: movieError 
    } = useFetch(`/movie/${id}?append_to_response=credits,reviews,similar`);

    // console.log('Movie details:', movie);
    
    if (movieLoading) {
        return (
            <div className="fullscreen-center">
                <LoadingSpinner />
            </div>
        );
    }
    
    if (movieError || !movie) {
        return (
            <div className="fullscreen-center">
                <EmptyState
                    title="Failed to load movie"
                    message={movieError || "Movie not found"}
                    icon="/images/icons/error.png"
                    actionText="Go Back"
                    actionLink="/movies"
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