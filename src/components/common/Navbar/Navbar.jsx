import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ isAuthenticated, user, onLoginClick, onLogoutClick, isMobileMenuOpen, toggleMobileMenu }){
    return (
        <nav className="bg-[#000000] border-b border-netflix-gray px-4 py-3"> 
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <NavLink to="/" className="text-netflix-red font-netflix-bold text-logo tracking-wider">
                    MOVIE<span className="text-white">FLIX</span>
                </NavLink>

                <div className="hidden md:flex items-center space-x-6">
                    <NavLink 
                        to="/movies" 
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                        }
                    >
                        Movies
                    </NavLink>
                    
                    <NavLink 
                        to="/tv" 
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                        }
                    >
                        TV Shows
                    </NavLink>
                    
                    <NavLink 
                        to="/search" 
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'nav-link-active' : ''}`
                        }
                    >
                        Search
                    </NavLink>
                    
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
                        <NavLink to="/movies" className="mobile-nav-link" onClick={toggleMobileMenu}>Movies</NavLink>
                        <NavLink to="/tv" className="mobile-nav-link" onClick={toggleMobileMenu}>TV Shows</NavLink>
                        <NavLink to="/search" className="mobile-nav-link" onClick={toggleMobileMenu}>Search</NavLink>
                        <NavLink to="/watchlist" className="mobile-nav-link" onClick={toggleMobileMenu}>Watchlist</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}