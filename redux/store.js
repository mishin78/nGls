import { configureStore } from "@reduxjs/toolkit";
import countReducer from './fetures/slices'

export const store = configureStore({
    reducer: {
        countReducer
    }
})