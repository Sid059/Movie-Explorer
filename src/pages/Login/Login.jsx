export default function Login({ 
    email, 
    password, 
    error,
    emailError,
    passwordError,
    onEmailChange, 
    onPasswordChange, 
    onSubmit 
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="bg-[#111] p-8 rounded-lg w-full max-w-md mx-auto">
                <h2 className="text-netflix-red text-3xl font-bold text-center mb-8">
                    Login to MOVIE<span className="text-white">FLIX</span>
                </h2>
                
                {error && (
                    <div className="bg-red-500/20 border border-netflix-red text-netflix-red px-4 py-3 rounded mb-6 text-sm">
                        {error}
                    </div>
                )}
                
                <form onSubmit={onSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label className="text-white block mb-2 text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={onEmailChange}
                            className={`w-full px-4 py-3 rounded bg-[#333] text-white focus:outline-none focus:ring-2 ${
                                emailError ? 'ring-2 ring-netflix-red' : 'focus:ring-netflix-red'
                            }`}
                            placeholder="john@example.com"
                            required
                        />
                        {emailError && (
                            <p className="text-netflix-red text-xs mt-1">{emailError}</p>
                        )}
                    </div>
                    
                    {/* Password Field */}
                    <div>
                        <label className="text-white block mb-2 text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={onPasswordChange}
                            className={`w-full px-4 py-3 rounded bg-[#333] text-white focus:outline-none focus:ring-2 ${
                                passwordError ? 'ring-2 ring-netflix-red' : 'focus:ring-netflix-red'
                            }`}
                            placeholder="********"
                            required
                        />
                        {passwordError && (
                            <p className="text-netflix-red text-xs mt-1">{passwordError}</p>
                        )}
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-netflix-red hover:bg-netflix-dark-red text-white py-3 rounded-md font-medium transition-colors mt-4"
                    >
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}