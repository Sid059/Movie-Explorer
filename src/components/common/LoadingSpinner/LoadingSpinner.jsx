export default function LoadingSpinner(){
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="h-12 w-12 border-4 border-netflix-red border-t-transparent rounded-full animate-spin" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
