import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faqs } from '../utils/faqs';

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