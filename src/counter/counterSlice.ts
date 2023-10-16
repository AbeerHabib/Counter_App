import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
    },
});

export const {increment, decrement, reset} = counterSlice.actions; //export actions
export default counterSlice.reducer; //export reducer