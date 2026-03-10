import { NavLink } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-[#000000] border-t border-[#564D4D] py-8 w-full">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main footer content - 4 columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Column 1 - Brand */}
                    <div className="space-y-4">
                        <h3 className='text-netflix-red font-netflix-bold text-lg mb-4 tracking-wider'>
                            MOVIE<span className="text-white">FLIX</span>
                        </h3>
                        <p className="text-[#B3B3B3] text-sm leading-relaxed">
                            Your ultimate movie and TV show explorer. Discover, track, and enjoy your favorite content.
                        </p>
                    </div>
                    
                    {/* Column 2 - Explore Links */}
                    <div>
                        <h4 className="topic-header">Explore</h4>
                        <ul className="space-y-3">
                            <li>
                                <NavLink 
                                    to="/movies" 
                                    className="nav-link"
                                >
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/tv" 
                                    className="nav-link"
                                >
                                    TV Shows
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/search" 
                                    className="nav-link"
                                >
                                    Search
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 3 - Support Links */}
                    <div>
                        <h4 className="topic-header">Support</h4>
                        <ul className="space-y-3">
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className="nav-link"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className="nav-link"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/faq" 
                                    className="nav-link"
                                >
                                    FAQ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Column 4 - Legal Links */}
                    <div>
                        <h4 className="topic-header">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <NavLink 
                                    to="/privacy" 
                                    className="nav-link"
                                >
                                    Privacy Policy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/terms" 
                                    className="nav-link"
                                >
                                    Terms of Use
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* Bottom bar with copyright */}
                <div className="border-t border-[#333333] mt-10 pt-8 text-center">
                    <p className="text-[#B3B3B3] text-sm">
                        &copy; {currentYear} MOVIEFLIX. All rights reserved.
                    </p>
                    <p className="text-[#808080] text-xs mt-3">
                        This is a demo project for educational purposes.
                    </p>
                </div>
            </div>
        </footer>
    );
}