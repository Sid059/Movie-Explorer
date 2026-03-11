import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ currentPage, totalPages, onPageChange }) {

    if (totalPages <= 1) return null;
    
    const getPageNumbers = () => {
        if (totalPages <= 10) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        
        const pages = [];
        
        // 1. ALWAYS show first page
        pages.push(1);
        
        // 2. Add dots if current page is far from first
        if (currentPage > 3) {
            pages.push('...');
        }
        
        // 3. Add pages around current page (with bounds checking)
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        
        // 4. Add dots if current page is far from last
        if (currentPage < totalPages - 2) {
            pages.push('...');
        }
        
        // 5. ALWAYS show last page
        if (totalPages > 1) {
            pages.push(totalPages);
        }
        
        // 6. Remove duplicates and ensure all numbers are within range
        return [...new Set(pages)].filter(page => 
            page === '...' || (page >= 1 && page <= totalPages)
        );
    };

    return (
        <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 px-4">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 sm:px-4 sm:py-2 text-netflix-gray rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:text-netflix-red transition-colors text-sm sm:text-base"
            >
                <FontAwesomeIcon icon={faAnglesLeft} />
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' ? onPageChange(page) : null}
                    disabled={page === '...'}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full font-netflix-medium transition-colors text-sm sm:text-base ${
                        currentPage === page
                            ? 'bg-netflix-red text-white'
                            : page === '...'
                            ? 'text-netflix-gray cursor-default'
                            : 'text-netflix-gray hover:text-netflix-red'
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 sm:px-4 sm:py-2 text-netflix-gray rounded-md disabled:opacity-30 disabled:cursor-not-allowed hover:text-netflix-red transition-colors text-sm sm:text-base"
            >
                <FontAwesomeIcon icon={faAnglesRight} />
            </button>
        </div>
    );
}