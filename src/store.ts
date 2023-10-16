import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export type RootState = {
    counterR: ReturnType<typeof counterReducer>;
}

export const store = configureStore({
    reducer: {
        counterR: counterReducer,
    },
});