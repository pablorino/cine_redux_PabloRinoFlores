import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../store/slices/moviesThunks';
import { setFavorites } from '../store/slices/moviesSlice';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { setTickets } from '../store/slices/ticketsSlice';

export async function loader({ params }) {
    const id = params.id;
    return { id };
}

function Movie() {
    const { id } = useLoaderData();
    const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar si la película está cargada
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();
    const movie = useSelector(state => state.movies.movie);
    const favs = useSelector(state=> state.movies.favorites)
    const comprobarFav = () =>{
        favs.forEach(film => {
            if (film.id == id) {
                setIsClicked(true)
            }
        });
    }
    useEffect(() => {
        if (id) {
            dispatch(getMovie(id))
                .then(() => {
                    comprobarFav()
                    setIsLoaded(true); // Marcar como cargado una vez que la película se ha cargado completamente
                });
        }
    }, [id, dispatch]);

    

    const handleClick = () => {
        setIsClicked(true);
    };
    
    const addToFavorites = () => {
        setIsClicked(true)
        dispatch(setFavorites(movie));
    };

    const addToTickets = () => {
        dispatch(setTickets(movie));
    };

    return (
        <div className="container mx-auto py-11 px-4 lg:px-36">
            {isLoaded && movie && ( // Mostrar contenido solo cuando la película esté cargada y exista
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-2/3 lg:pl-8 mt-6 lg:mt-0">
                        <h2 className="text-5xl font-bold mb-4">{movie.title}</h2>
                        <button className={`focus:outline-none ${isClicked ? 'text-red-500 cursor-not-allowed' : ''}`} disabled={isClicked} onClick={addToFavorites}><FaHeart /></button>
                        <p className="text-gray-700 mb-4 text-xl">{movie.overview}</p>
                        <div className="mb-4">
                            <span className="font-bold text-2xl">Release Date: </span>
                            <span className="text-xl">{movie.release_date}</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-2xl">Average Rating: </span>
                            <span className="text-xl">{movie.vote_average}</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-2xl">Vote Count: </span>
                            <span className="text-xl">{movie.vote_count}</span>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-2xl">Genres:</span>{' '}
                            {movie.genres && movie.genres.map(genre => (
                                <span key={genre.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 text-xl">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        <Link to={`/form/${movie.title}/${movie.backdrop_path.substr(1)}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Comprar Entradas
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie;
