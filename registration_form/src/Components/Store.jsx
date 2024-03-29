import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './CountrySlice'
import cityReducer from './CitySlice'

export const store = configureStore({
    reducer: {
        countries: countryReducer,
        city: cityReducer,
    },
})


