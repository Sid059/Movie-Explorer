import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import TVDetails from '../components/media/TVDetailsContainer/TVDetails';
import ErrorBoundary from '../components/common/ErrorBoundary/ErrorBoundary'
import EmptyState from '../components/common/EmptyState/EmptyState';

export default function TVDetailsPage() {
    const { id } = useParams();

    const { 
        data: show, 
        loading: showLoading, 
        error: showError 
    } = useFetch(`/tv/${id}?append_to_response=credits,reviews,similar,videos`);

    // console.log('TV Show details:', show);
    
    if (showLoading) {
        return null;
    }
    
    if (showError || !show) {
        return (
            <div className="fullscreen-center">
                <EmptyState
                    title="Failed to load TV show"
                    message={showError || "TV show not found"}
                    icon="/images/icons/error.png"
                    actionText="Go Back"
                    actionLink="/tv/popular"
                />
            </div>
        );
    }
    
    return (
        <ErrorBoundary>
            <TVDetails show={show} />
        </ErrorBoundary>
    );
}