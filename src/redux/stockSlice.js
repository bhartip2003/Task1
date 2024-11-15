import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const API_KEY = import.meta.env.VITE_API_STOCK;

export const fetchTopLosers = createAsyncThunk('stocks/fetchTopGainers', async() => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);

    return response.data.topGainers;
})

export const fetchTopGainers = createAsyncThunk('stocks/fetchTopLosers', async() => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);

    return response.data.topLosers;
})


const stockSlice = createSlice({
    name: "stocks",
    initialState: {
        topGainers: [],
        topLosers: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTopGainers.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchTopGainers.fulfilled, (state, action) => {
            state.loading = false,
            state.topGainers = action.payload
        })
        .addCase(fetchTopGainers.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
        .addCase(fetchTopLosers.loading, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchTopLosers.fulfilled, (state, action) => {
            state.loading = false,
            state.topLosers = action.payload
        })
        .addCase(fetchTopLosers.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }

})

export default stockSlice.reducer;