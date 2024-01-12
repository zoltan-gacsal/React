import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//adatok lekérése...

export const dataRequest = createAsyncThunk("country", async ()=> {
    const country = await fetch('https://backend.ichat.hu/api/countries');
    return country.json();
});


//reducer elkészítése...

const countryReducer = createSlice({
    name: 'countries',
    initialState: {
        status: null,
        list: [],
    },

//extraReducer elkészítése az adatfolyamhoz...

    extraReducers: (build) => {
        build
        .addCase(dataRequest.pending, (state) => {
            state.status = 'Loading'})
        .addCase(dataRequest.fulfilled, (state, action) => {
            state.status = 'Ready'
            state.list = action.payload
        })
    }
});

export default countryReducer.reducer



