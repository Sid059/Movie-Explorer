import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function TrailerModal({ trailerKey, isOpen, onClose, title }) {
    if (!isOpen || !trailerKey) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95" />
            
            {/* Modal */}
            <div 
                className="relative w-full max-w-4xl mx-4 z-10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute -top-6 right-0 text-white hover:text-netflix-red transition-colors"
                >
                    <FontAwesomeIcon icon={faXmark} className="w-8 h-8" />
                </button>
                
                {/* Video */}
                <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                        title={title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
}