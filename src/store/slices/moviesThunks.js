import { searchMovie, searchMovies } from "../../sevices/getMovies"
import { setMovie, setMovies} from "./moviesSlice"
import { getMoviesPop } from '../../sevices/getMovies'


//El thunk es una funcion que devuelve una accion asincrona
export const getMovies = () => {
    return async (dispatch, getState) => {
        try {
            const res = await getMoviesPop();

            if (!res.ok) {

            }
            const data = await res.json();

            dispatch(setMovies({movies: data.results}))

        } catch (error) {

        }

    }
}

export const getMoviesBy = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await searchMovies(id);

            if (!res.ok) {

            }
            const data = await res.json();

            dispatch(setMovies({movies: data.results}))

        } catch (error) {

        }

    }
}


export const getMovie = (id) => {
    return async (dispatch, getState) => {

        try {
            const res = await searchMovie(id);

            if (!res.ok) {

            }
            const data = await res.json();
            
            dispatch(setMovie(data))

        } catch (error) {

        }

    }
}