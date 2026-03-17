import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="pt-16 pb-8 min-h-screen">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-white text-4xl sm:text-5xl font-netflix-medium mb-6">
                    Contact Us
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#111] rounded-lg p-6 mb-6">
                            <h2 className="text-white text-2xl font-netflix-medium mb-6">
                                Get in Touch
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-netflix-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-netflix-red" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-netflix-medium mb-1">Email</h3>
                                        <p className="text-netflix-gray">support@cineverse.com</p>
                                        <p className="text-netflix-gray">info@cineverse.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-netflix-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faPhone} className="text-netflix-red" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-netflix-medium mb-1">Phone</h3>
                                        <p className="text-netflix-gray">+1 (555) 123-4567</p>
                                        <p className="text-netflix-gray">+1 (555) 987-6543</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-netflix-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-netflix-red" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-netflix-medium mb-1">Address</h3>
                                        <p className="text-netflix-gray">
                                            123 Movie Street<br />
                                            Hollywood, CA 90210<br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-[#111] rounded-lg p-6">
                            <h2 className="text-white text-2xl font-netflix-medium mb-4">
                                Business Hours
                            </h2>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-netflix-gray">Monday - Friday</span>
                                    <span className="text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-netflix-gray">Saturday</span>
                                    <span className="text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-netflix-gray">Sunday</span>
                                    <span className="text-white">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#111] rounded-lg p-6">
                            <h2 className="text-white text-2xl font-netflix-medium mb-6">
                                Send us a message
                            </h2>

                            {isSubmitted ? (
                                <div className="bg-green-500/20 border border-green-500 text-green-500 px-6 py-4 rounded-lg mb-6">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-white font-netflix-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-netflix-red"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white font-netflix-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-netflix-red"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-white font-netflix-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-netflix-red"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-white font-netflix-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full bg-[#222] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-netflix-red resize-none"
                                        placeholder="Write your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-netflix-red hover:bg-netflix-dark-red text-white py-3 rounded-lg font-netflix-medium transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}