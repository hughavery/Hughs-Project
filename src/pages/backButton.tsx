import { Link } from 'react-router-dom';
function BackButton() {
return (
        <Link to="/" className="absolute top-4 left-4">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </div>
        </Link>
        )
}
export default BackButton