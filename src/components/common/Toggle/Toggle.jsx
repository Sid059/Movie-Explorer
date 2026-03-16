export default function Toggle({ options, active, onChange }) {
    return (
        <div className="flex gap-2 bg-[#222] p-1 rounded-full">
            {options.map(option => (
                <button
                    key={option.value}
                    onClick={() => onChange(option.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-netflix-medium ${
                        active === option.value
                            ? 'bg-netflix-red text-white'
                            : 'text-netflix-gray hover:text-white'
                    }`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}