import { useState } from 'react';
import { formatDate } from '../../../utils/helperFunction';

export default function ReviewsSection({ reviews = [] }) {
    const [expandedReviewId, setExpandedReviewId] = useState(null);

    const toggleReview = (reviewId) => {
        setExpandedReviewId(prevId => prevId === reviewId ? null : reviewId);
    };

    if (reviews.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-netflix-gray text-base">No reviews yet.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-white text-2xl font-netflix-bold mb-6">
                Reviews ({reviews.length})
            </h2>
            
            <div className="space-y-4">
                {reviews.map((review) => {
                    const isExpanded = expandedReviewId === review.id;
                    const shouldTruncate = review.content?.length > 300 && !isExpanded;
                    
                    return (
                        <div 
                            key={review.id} 
                            className="bg-[#111] rounded-lg p-6 border border-netflix-gray/20"
                        >
                            {/* Review Header - Author and Rating */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-netflix-gray/30 flex items-center justify-center">
                                        <span className="text-white font-netflix-medium">
                                            {review.author?.[0]?.toUpperCase() || 'U'}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-netflix-medium">
                                            {review.author || 'Anonymous'}
                                        </h3>
                                        <p className="text-netflix-gray text-xs">
                                            {formatDate(review.created_at)}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Rating if available */}
                                {review.author_details?.rating && (
                                    <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
                                        <span className="text-netflix-red text-sm">★</span>
                                        <span className="text-white text-sm font-netflix-medium">
                                            {review.author_details.rating}/10
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Review Content */}
                            <p className="text-netflix-gray text-sm leading-relaxed">
                                {shouldTruncate 
                                    ? `${review.content.substring(0, 300)}...` 
                                    : review.content
                                }
                            </p>
                            
                            {/* Read More / Show Less button */}
                            {review.content?.length > 300 && (
                                <button 
                                    onClick={() => toggleReview(review.id)}
                                    className="text-netflix-red text-sm font-netflix-medium mt-2"
                                >
                                    {isExpanded ? 'Show less' : 'Read more'}
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}