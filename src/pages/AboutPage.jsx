import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="pt-16 pb-8 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-white text-2xl sm:text-3xl font-netflix-medium mb-4 px-4">
                    About CINEVERSE
                </h1>
                
                <div className="bg-[#111] rounded-lg p-8 mb-8">
                    <p className="text-netflix-gray text-lg leading-relaxed mb-6">
                        Welcome to CINEVERSE, your ultimate destination for discovering movies and TV shows. 
                        We're passionate about bringing the world of entertainment to your fingertips.
                    </p>
                    
                    <p className="text-netflix-gray text-lg leading-relaxed mb-6">
                        Our mission is to help you find your next favorite watch by providing comprehensive 
                        information about thousands of movies and TV shows, including ratings, cast details, 
                        reviews, and trailers.
                    </p>
                </div>

                <h2 className="text-white text-2xl sm:text-3xl font-netflix-medium mb-4 px-4">
                    What We Offer
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#111] rounded-lg p-6">
                        <h3 className="text-netflix-red text-xl font-netflix-medium mb-3">
                            Extensive Library
                        </h3>
                        <p className="text-netflix-gray">
                            Access thousands of movies and TV shows with detailed information, ratings, and reviews.
                        </p>
                    </div>
                    
                    <div className="bg-[#111] rounded-lg p-6">
                        <h3 className="text-netflix-red text-xl font-netflix-medium mb-3">
                            Personalized Watchlist
                        </h3>
                        <p className="text-netflix-gray">
                            Create and manage your personal watchlist to keep track of what you want to watch.
                        </p>
                    </div>
                    
                    <div className="bg-[#111] rounded-lg p-6">
                        <h3 className="text-netflix-red text-xl font-netflix-medium mb-3">
                            Latest Trailers
                        </h3>
                        <p className="text-netflix-gray">
                            Watch the latest trailers and get a sneak peek of upcoming releases.
                        </p>
                    </div>
                    
                    <div className="bg-[#111] rounded-lg p-6">
                        <h3 className="text-netflix-red text-xl font-netflix-medium mb-3">
                          Cast & Crew Info
                        </h3>
                        <p className="text-netflix-gray">
                            Discover detailed information about your favorite actors, directors, and crew members.
                        </p>
                    </div>
                </div>

                <div className="bg-[#111] rounded-lg p-8 text-center">
                    <h2 className="text-white text-2xl font-netflix-medium mb-4">
                        Ready to Start Exploring?
                    </h2>
                    <Link 
                        to="/movie/popular" 
                        className="inline-block bg-netflix-red hover:bg-netflix-dark-red text-white px-8 py-3 rounded-md font-netflix-medium transition-colors"
                    >
                        Browse Movies
                    </Link>
                </div>
            </div>
        </div>
    );
}