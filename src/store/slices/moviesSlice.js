import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    movies: [],
    favorites:[],
    movie:[]
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload.movies
        },
        setMovie: (state, action) => {
            state.movie = action.payload
        },
        setFavorites: (state, action) => {
            state.favorites.push(action.payload)
        },
    },
})

export const { startLoadingMovies, setMovies, setMovie, setIsLoading, setFavorites, setIsNotLoading } = moviesSlice.actions

