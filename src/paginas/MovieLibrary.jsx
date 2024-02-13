import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { getMoviesPop } from '../sevices/getMovies'
import { searchMovies } from '../sevices/getMovies'
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getMoviesBy } from '../store/slices/moviesThunks';


const MovieLibrary = () => {
    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getMovies())
    }, []);

    const handleSearch = (query) => {
        if (query == '') {
            dispatch(getMovies())
        } else {
            dispatch(getMoviesBy(query))
        }
    }

    let isLoading = useSelector(state => state.movies.isLoading);

    console.log(isLoading);

    return (
        <div className="container mx-auto py-8 px-32">
            { movies.length===0 ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Películas</h2>

                    <input
                        type="text"
                        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                        placeholder="Buscar películas..."
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {movies.map(movie => (
                            <Link to={`/movie/${movie.id}`}>
                                <div key={movie.id} className="relative scale-100 hover:scale-105 hover:shadow-lg hover:z-10 transition-transform duration-300 mb-10 mt-10" >
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

export default MovieLibrary;
