import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const cityRequest = createAsyncThunk("city", async (country_id)=> {
    const city = await fetch(`https://backend.ichat.hu/api/countries/${country_id}/cities`);  //reláció!!! hogy ne az első országot kérje folyamatosan...
    return city.json();
});

const cityReducer = createSlice({
    name: 'city',
    initialState: {
        status: null,
        list: [],
    },

    extraReducers: (build) => {
        build
        .addCase(cityRequest.pending, (state) => {
            state.status = 'Loading'})
        .addCase(cityRequest.fulfilled, (state, action) => {
            state.status = 'Ready'
            state.list = action.payload
        })
    }
});

export default cityReducer.reducer
