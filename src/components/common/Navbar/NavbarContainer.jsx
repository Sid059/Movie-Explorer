import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import Navbar from './Navbar';

export default function NavbarContainer(){
    const { isAuthenticated, user, logout } = useAppContext();
    const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to login page instead of calling login
    };

    return (
        <Navbar 
            isAuthenticated={isAuthenticated}
            user={user}
            onLoginClick={handleLoginClick}
            onLogoutClick={logout}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
        />
    )
 }