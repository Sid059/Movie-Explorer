import React from 'react';
import { useLocation } from 'react-router-dom';

class ErrorBoundaryClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-black">
                    <div className="w-full max-w-lg mx-auto px-4 py-8">
                        <div className="rounded-lg p-8 text-center">
                            <img 
                                src="/images/icons/error.png" 
                                alt="Error"
                                className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6"
                            />
                            
                            <h2 className="text-netflix-red font-netflix-medium mb-3 lg:mb-4 text-2xl lg:text-3xl">
                                Oops! Something went wrong
                            </h2>
                            
                            {/* Error message - responsive */}
                            <p className="text-netflix-gray mb-6 lg:mb-8 text-sm lg:text-base">
                                {this.state.error?.message || "We couldn't load this content."}
                            </p>
                            
                            <button
                                onClick={this.handleReset}
                                className="flex items-center justify-center gap-2 mx-auto bg-netflix-red hover:bg-netflix-dark-red text-white px-6 py-2 rounded-md font-netflix-medium transition-colors text-sm"
                            >
                                <img 
                                    src="/images/icons/refresh.png" 
                                    alt=""
                                    className="w-4 h-4"
                                />
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default function ErrorBoundary(props) {
    const location = useLocation();  // Get current location
    // key={location.pathname} - the error boundary always has a key for every component it is wrapped around regardless of errors, when location changes it causes the key to change and component resets or the old one is destroyed and new one is created
    // {...props} - pass all children down
    return <ErrorBoundaryClass key={location.pathname} {...props} />;
}