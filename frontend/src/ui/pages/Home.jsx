import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
            <h1 className="text-4xl font-bold text-teal-300">DayStride</h1>
            <p className="text-center max-w-md mt-4 text-gray-400">
                Track your habits, goals, and daily tasks with a minimal and modern interface.
            </p>
            <div className="flex space-x-4 mt-6">
                <Link to="/login" className="px-4 py-2 bg-pink-600 text-white rounded">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-yellow-300 text-black rounded">Register</Link>
            </div>
        </div>
    );
};

export default Home;
