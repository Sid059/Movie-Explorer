import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import MovieCard from '../MovieCard/MovieCard';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import EmptyState from '../../common/EmptyState/EmptyState';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import useWindowSize from '../../../hooks/useWindowSize';

export default function MovieGrid({
    movies = [],
    isLoading = false,
    error = null,
    onRetry,
    isAuthenticated = false,
    watchlistIds = [],
    onWatchlistToggle
}){

    const { width } = useWindowSize();


    // Determine column count based on screen width
    const getColumnCount = () => {
        if (width < 640) return 2;      // Mobile
        if (width < 1024) return 4;      // Tablet
        return 6;                         // Desktop
    };
    
    // Calculate column width based on container width
    const getColumnWidth = () => {
        const columnCount = getColumnCount();
        const totalGap = 16 * (columnCount - 1); // gap-4 = 16px
        const containerWidth = width - 32; // padding
        return Math.floor((containerWidth - totalGap) / columnCount);
    };
    
    // Calculate row height (based on card height)
    const ROW_HEIGHT = 320; // Card height + gap
    
    const columnCount = getColumnCount();
    const columnWidth = getColumnWidth();
    const rowCount = Math.ceil(movies.length / columnCount);
    
    // Loading state
    if (isLoading) {
        return (
            <div className="w-full py-12">
                <LoadingSpinner />
            </div>
        );
    }
    
    // Error state
    if (error) {
        return (
            <div className="w-full py-12">
                <EmptyState
                    title="Failed to load movies"
                    message={error}
                    icon="/images/icons/error.png"
                    actionText="Try Again"
                    onAction={onRetry}
                />
            </div>
        );
    }
    
    // Empty state
    if (!isLoading && !error && movies.length === 0) {
        return (
            <div className="w-full py-12">
                <EmptyState
                    title="No movies found"
                    message="Try adjusting your search or filters"
                    icon="/images/icons/empty-folder.png"
                />
            </div>
        );
    }
    
    // Grid rendering
    return (
        <div className="w-full h-[600px] lg:h-[700px]">
            <AutoSizer>
                {({ height, width }) => (
                    <Grid
                        columnCount={columnCount}
                        columnWidth={columnWidth}
                        height={height}
                        rowCount={rowCount}
                        rowHeight={ROW_HEIGHT}
                        width={width}
                        className="scrollbar-hide"
                    >
                        {({ columnIndex, rowIndex, style }) => {
                            const index = rowIndex * columnCount + columnIndex;
                            const movie = movies[index];
                            
                            if (!movie) return null;
                            
                            return (
                                <div
                                    style={{
                                        ...style,
                                        paddingRight: '16px',
                                        paddingBottom: '16px'
                                    }}
                                >
                                    <MovieCard
                                        movie={movie}
                                        isAuthenticated={isAuthenticated}
                                        isInWatchlist={watchlistIds.includes(movie.id)}
                                        onWatchlistToggle={onWatchlistToggle}
                                    />
                                </div>
                            );
                        }}
                    </Grid>
                )}
            </AutoSizer>
        </div>
    );
}