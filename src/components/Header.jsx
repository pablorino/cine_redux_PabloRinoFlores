import logo from '../assets/image-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function Component() {
    return (
        <header className="flex h-20 w-full bg-gray-800 text-white items-center px-4 md:px-6">
            <div><Link to={'/'}><img src={logo} alt="Logo" className="h-16 ml-0" /></Link></div>
            <nav aria-label="Main" className="flex-1 hidden lg:flex justify-center">
                <ul className="flex space-x-4">
                    <li>
                        <Link
                            to="/"
                            className="inline-block px-3 py-2 text-lg font-semibold transition-all rounded-full hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/movies"
                            className="inline-block px-3 py-2 text-lg font-semibold transition-all rounded-full hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/favorites"
                            className="inline-block px-3 py-2 text-lg font-semibold transition-all rounded-full hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                            Favorites
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tickets"
                            className="inline-block px-3 py-2 text-lg font-semibold transition-all rounded-full hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        >
                            Tickets
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
