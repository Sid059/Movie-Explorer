import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
            setSearchTerm('');
        }
    };

    const handleChange = ({ target }) => {
        const { value } = target;
        setSearchTerm(value);
    }

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder= "Search for a movie, TV show, person..."
                    className="w-full bg-white text-black rounded-full py-5 px-8 pr-20 placeholder:text-netflix-gray text-base sm:text-lg outline-none"
                />
                <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full
                             hover:bg-netflix-red transition-colors group"
                >
                    <img 
                        src="/images/icons/search.png" 
                        alt="Search"
                        loading='lazy'
                        className="w-6 h-6 sm:w-7 sm:h-7 opacity-60 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all"
                    />
                </button>
            </div>
        </form>
    );
}