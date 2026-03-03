import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import Navbar from './Navbar';

export default function NavbarContainer(){
    const { isAuthenticated, user, login, logout } = useAppContext();
    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Navbar 
            isAuthenticated={isAuthenticated}
            user={user}
            onLoginClick={login}
            onLogoutClick={logout}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
        />
    )
 }