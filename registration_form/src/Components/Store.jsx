import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './CountrySlice'

export const store = configureStore({
    reducer: {
        countries: countryReducer,
    },
})