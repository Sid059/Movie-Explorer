import MediaCard from '../MediaCard/MediaCard';

export default function SimilarMedia({ items = [], mediaType }) {  // Renamed prop
    return (
        <div>
            <h2 className="text-white text-2xl font-netflix-bold mb-6">
                Similar {mediaType === 'movie' ? 'Movies' : 'TV Shows'}
            </h2>
            
            <div className="flex overflow-x-auto gap-4 pb-4">
                {items.map(item => (
                    <div key={item.id} className="flex-none w-[200px]">
                        <MediaCard
                            item={item}
                            mediaType={mediaType}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}