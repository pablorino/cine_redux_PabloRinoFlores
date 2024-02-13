import { createSlice } from '@reduxjs/toolkit'

const initialState= {
    tickets: [],
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setTickets: (state, action) => {
            state.tickets.push(action.payload)
        },
    },
})

export const { startLoadingTickets, setTickets} = ticketsSlice.actions

