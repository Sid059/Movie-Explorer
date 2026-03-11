import { createContext, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AppContext = createContext();

export function AppProvider({ children }){
    const [user, setUser] = useLocalStorage('user', null);
    const [movieWatchlist, setMovieWatchlist] = useLocalStorage('movieWatchlist', []);
    const [tvWatchlist, setTvWatchlist] = useLocalStorage('tvWatchlist', []);

    const isAuthenticated = !!user;

    const login = (userData) => {
        setUser(userData);
    }

    const logout = () => {
        setUser(null);

        //clear watchlist on logout
        setMovieWatchlist([]);
        setTvWatchlist([]);
    }

    // Toggle movie in watchlist
    const toggleMovieWatchlist = (movie) => {
        setMovieWatchlist(prev => {
            const exists = prev.some(m => m.id === movie.id);
            if (exists) {
                return prev.filter(m => m.id !== movie.id);
            } else {
                return [...prev, movie];
            }
        });
    };

    // Toggle TV show in watchlist
    const toggleTVWatchlist = (show) => {
        setTvWatchlist(prev => {
            const exists = prev.some(s => s.id === show.id);
            if (exists) {
                return prev.filter(s => s.id !== show.id);
            } else {
                return [...prev, show];
            }
        });
    };
    
    // Check if movie is in watchlist
    const isInMovieWatchlist = (movieId) => {
        return movieWatchlist.some(m => m.id === movieId);
    };

    // Check if TV show is in watchlist
    const isInTVWatchlist = (showId) => {
        return tvWatchlist.some(s => s.id === showId);
    };

    const value = useMemo(() => ({
        isAuthenticated,
        user,
        login,
        logout,
        movieWatchlist,
        tvWatchlist,
        toggleMovieWatchlist,
        toggleTVWatchlist,
        isInMovieWatchlist,
        isInTVWatchlist
    }), [isAuthenticated, user, movieWatchlist, tvWatchlist]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}


export function useAppContext() {
    const context = useContext(AppContext);
    if(!context){
        throw new Error('useAppContext must be used within an AppProvider')
    }
    return context;
}