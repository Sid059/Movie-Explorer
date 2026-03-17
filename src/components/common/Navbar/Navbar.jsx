import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { movieOptions, tvOptions } from '../../../utils/navOptions';
import './Navbar.css';

export default function Navbar({ isAuthenticated, user, onLoginClick, onLogoutClick, isMobileMenuOpen, toggleMobileMenu }){
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null); //use to detect clicks outside navbar

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = ({ target }) => {
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside); //Adds an event listener to the whole page for mouse clicks.
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = dropdown => setOpenDropdown(prev => (prev === dropdown ? null : dropdown));


    return (
        <nav className="bg-[#000000] border-b border-netflix-gray px-4 py-3 relative z-50" ref={dropdownRef}> 
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <NavLink to="/" className="text-netflix-red font-netflix-medium text-2xl sm:text-3xl lg:text-4xl tracking-wider">
                    MOVIE<span className="text-white">FLIX</span>
                </NavLink>

                <div className="hidden md:flex items-center space-x-6">
                    {/* Movies Dropdown - Click */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('movies')}
                            className="nav-link flex items-center gap-1"
                        >
                            Movies
                            <FontAwesomeIcon 
                                icon={openDropdown === 'movies' ? faAngleUp : faAngleDown} 
                                className="w-4 h-4 transition-transform duration-200"
                            />
                        </button>
                        
                        {openDropdown === 'movies' && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#111] rounded-lg shadow-xl border border-netflix-gray/30 py-2">
                                {movieOptions.map(option => (
                                    <NavLink
                                        key={option.path}
                                        to={option.path}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm transition-colors ${
                                                isActive 
                                                    ? 'text-netflix-red' 
                                                    : 'text-netflix-gray hover:text-white hover:bg-netflix-red/80'
                                            }`
                                        }
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        {option.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* TV Shows Dropdown - Click */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown('tv')}
                            className="nav-link flex items-center gap-1"
                        >
                            TV Shows
                            <FontAwesomeIcon 
                                icon={openDropdown === 'tv' ? faAngleUp : faAngleDown} 
                                className="w-4 h-4 transition-transform duration-200"
                            />
                        </button>
                        
                        {openDropdown === 'tv' && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-[#111] rounded-lg shadow-xl border border-netflix-gray/30 py-2">
                                {tvOptions.map(option => (
                                    <NavLink
                                        key={option.path}
                                        to={option.path}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 text-sm transition-colors ${
                                                isActive 
                                                    ? 'text-netflix-red' 
                                                    : 'text-netflix-gray hover:text-white hover:bg-netflix-red/80'
                                            }`
                                        }
                                        onClick={() => setOpenDropdown(null)}
                                    >
                                        {option.label}
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>

                    <NavLink 
                        to="/watchlist" 
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                        }
                    >
                        Watchlist
                    </NavLink>
                </div>

                <div className="flex items-center">
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-3">
                            <span className="text-white hidden md:inline">{user?.name || 'User'}</span>
                            <button 
                                onClick={onLogoutClick}
                                className="nav-button"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={onLoginClick}
                            className="nav-button"
                        >
                            Login
                        </button>
                    )}
                    
                    <button className="md:hidden text-white ml-4" onClick={toggleMobileMenu}>
                        <img 
                            src={isMobileMenuOpen ? "/images/icons/close.png" : "/images/icons/menu.png"} 
                            alt={isMobileMenuOpen ? "Close" : "Menu"} 
                            className="w-6 h-6" 
                        />
                    </button>
                </div>
            </div>
            
            {isMobileMenuOpen && (
                <div className="md:hidden mt-3 pb-2">
                    <div className="flex flex-col space-y-2">
                        {/* Mobile Movies Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-movies')}
                                className="mobile-nav-link w-full text-left flex items-center justify-between"
                            >
                                Movies
                                <FontAwesomeIcon 
                                    icon={openDropdown === 'mobile-movies' ? faAngleUp : faAngleDown} 
                                    className="w-4 h-4"
                                />
                            </button>
                            {openDropdown === 'mobile-movies' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {movieOptions.map(option => (
                                        <NavLink
                                            key={option.path}
                                            to={option.path}
                                            className="mobile-nav-link block"
                                            onClick={toggleMobileMenu}
                                        >
                                            {option.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile TV Shows Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('mobile-tv')}
                                className="mobile-nav-link w-full text-left flex items-center justify-between"
                            >
                                TV Shows
                                <FontAwesomeIcon 
                                    icon={openDropdown === 'mobile-tv' ? faAngleUp : faAngleDown} 
                                    className="w-4 h-4"
                                />
                            </button>
                            {openDropdown === 'mobile-tv' && (
                                <div className="pl-4 mt-2 space-y-2">
                                    {tvOptions.map(option => (
                                        <NavLink
                                            key={option.path}
                                            to={option.path}
                                            className="mobile-nav-link block"
                                            onClick={toggleMobileMenu}
                                        >
                                            {option.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                        <NavLink to="/watchlist" className="mobile-nav-link" onClick={toggleMobileMenu}>Watchlist</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}