import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Favorites() {
    const favorites = useSelector(state => state.movies.favorites);
    console.log(favorites);

    return (
        <div className="container mx-auto py-8 px-32">
            {typeof favorites === 'undefined' ? (
                <p className=' mb-48'>Cargando...</p>
            ) : (
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Películas Favoritas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {favorites?.map(movie => (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <div className="relative scale-100 hover:scale-105 hover:shadow-lg hover:z-10 transition-transform duration-300 mb-10 mt-10">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        alt={movie.title}
                                        className="w-full h-auto transition-transform transform  rounded-xl"
                                    />
                                    <div className=' opacity-0 hover:opacity-100 transition-opacity h-full w-full'>
                                        <div className="absolute rounded-xl bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                                            <h3 className="text-lg font-bold">{movie.title}</h3>
                                            <p className="text-sm">{movie.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Favorites;
