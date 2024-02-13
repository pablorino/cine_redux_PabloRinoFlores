import { configureStore } from '@reduxjs/toolkit'
import {moviesSlice} from './slices/moviesSlice'
import { ticketsSlice } from './slices/ticketsSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        tickets: ticketsSlice.reducer
    },
})