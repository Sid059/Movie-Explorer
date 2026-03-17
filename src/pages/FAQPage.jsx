import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
    {
        question: "What is MovieFlix?",
        answer: "MovieFlix is a comprehensive movie and TV show discovery platform. We provide detailed information about thousands of movies and TV shows, including ratings, cast details, reviews, trailers, and more."
    },
    {
        question: "Is MovieFlix free to use?",
        answer: "Yes, MovieFlix is completely free to use! You can browse movies, TV shows, and access all information without any cost. Creating an account is free and allows you to create and manage your personal watchlist."
    },
    {
        question: "Do I need to create an account?",
        answer: "No, you can browse all content without an account. However, creating a free account allows you to create a watchlist, save your favorite movies, and get personalized recommendations."
    },
    {
        question: "How does the watchlist work?",
        answer: "Once you create an account, you can add movies and TV shows to your watchlist by clicking the bookmark icon on any movie or TV show card. You can view and manage your watchlist anytime from the Watchlist page."
    },
    {
        question: "Where do you get your movie data?",
        answer: "We use The Movie Database (TMDB) API to provide accurate and up-to-date information about movies and TV shows, including ratings, cast details, and trailers."
    },
    {
        question: "Can I watch movies on MovieFlix?",
        answer: "MovieFlix is a discovery platform, not a streaming service. We provide information about movies and TV shows, including links to official trailers on YouTube, but we don't host or stream actual content."
    },
    {
        question: "How do I search for movies?",
        answer: "You can use the search bar on our homepage to search for any movie or TV show. Simply type in the title and press Enter or click the search icon to see results."
    },
    {
        question: "Are there TV shows available?",
        answer: "Yes! MovieFlix includes both movies and TV shows. You can browse popular TV shows, filter by categories like 'Airing Today' or 'Top Rated', and view detailed information about each show."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-16 pb-8 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-white text-4xl sm:text-5xl font-netflix-medium mb-6">
                    Frequently Asked Questions
                </h1>
                
                <p className="text-netflix-gray text-lg mb-8">
                    Find answers to common questions about MovieFlix. Can't find what you're looking for? 
                    Feel free to <Link to="/contact" className="text-netflix-red hover:underline">contact us</Link>.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-[#111] rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1a1a1a] transition-colors"
                            >
                                <span className="text-white text-lg font-netflix-medium">
                                    {faq.question}
                                </span>
                                <FontAwesomeIcon 
                                    icon={openIndex === index ? faChevronUp : faChevronDown}
                                    className="text-netflix-red w-5 h-5"
                                />
                            </button>
                            
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-netflix-gray leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-[#111] rounded-lg p-8 text-center">
                    <h2 className="text-white text-2xl font-netflix-medium mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-netflix-gray mb-6">
                        We're here to help! Reach out to us anytime.
                    </p>
                    <a 
                        href="/contact"
                        className="inline-block bg-netflix-red hover:bg-netflix-dark-red text-white px-8 py-3 rounded-md font-netflix-medium transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}