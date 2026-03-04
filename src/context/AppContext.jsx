import { createContext, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AppContext = createContext();

export function AppProvider({ children }){
    const [user, setUser] = useLocalStorage('user', null);

    const isAuthenticated = !!user;

    const login = (userData) => {
        setUser(userData);
    }

    const logout = () => {
        setUser(null);
    }

    const value = useMemo(() => ({
        isAuthenticated,
        user,
        login,
        logout
    }), [isAuthenticated]);

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