import { Link } from 'react-router-dom';

export default function EmptyState({ 
    title,
    message,
    icon = "/images/icons/empty-folder.png",
    actionText,
    actionLink,
    onAction
}) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <img 
                src={icon}
                alt={title}
                className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6"
            />
            
            <h2 className="text-netflix-red font-netflix-medium mb-3 lg:mb-4 text-2xl lg:text-3xl">
                {title}
            </h2>
            
            <p className="text-netflix-gray text-sm sm:text-base max-w-md mb-6">
                {message}
            </p>
            
            {actionText && (actionLink ? (
                <Link
                    to={actionLink}
                    className="bg-netflix-red hover:bg-netflix-dark-red text-white px-6 py-2 rounded-md transition-colors text-sm"
                >
                    {actionText}
                </Link>
            ) : onAction && (
                <button
                    onClick={onAction}
                    className="bg-netflix-red hover:bg-netflix-dark-red text-white px-6 py-2 rounded-md transition-colors text-sm"
                >
                    {actionText}
                </button>
            ))}
        </div>
    );
}