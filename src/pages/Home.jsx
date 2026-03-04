import EmptyState from '../components/common/EmptyState/EmptyState';

// export default function Home() {
//     // throw new Error("hey hey");

//     return (
//         <div className="space-y-12 py-8">
//             {/* Test 1 - Watchlist empty state */}
//             <EmptyState
//                 title="Your watchlist is empty"
//                 message="Start adding movies to keep track of what you want to watch"
//                 icon="/images/icons/empty-folder.png"
//                 actionText="Browse Movies"
//                 actionLink="/movies"
//             />
            
//             {/* Test 2 - No search results */}
//             <EmptyState
//                 title="No movies found"
//                 message="Try searching with different keywords"
//                 icon="/images/icons/no-results.png"
//                 actionText="Clear Search"
//                 onAction={() => alert('Clear search clicked!')}
//             />
//         </div>
//     );
// }

import MovieCard from '../components/movies/MovieCard/MovieCard';

// Sample movie data for testing
const testMovie = {
    id: 1,
    title: "Inception",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", // Inception poster
    vote_average: 8.8,
    release_date: "2010-07-16",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
};

export default function Home() {
    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-xs mx-auto"> {/* Card width limited to see it properly */}
                <MovieCard
                    movie={testMovie}
                    isAuthenticated={true}
                    isInWatchlist={false}
                    onWatchlistToggle={(movie) => console.log('Toggle watchlist:', movie.title)}
                />
            </div>
        </div>
    );
}