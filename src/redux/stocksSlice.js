import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const API_KEY = import.meta.env.VITE_API_STOCK;

export const fetchTopGainers = createAsyncThunk('stocks/fetchTopGainers', async(params, {dispatch}) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
    console.log("top Gainers: ", response.data.top_gainers);
    dispatch(setTopGainers(response.data.top_gainers));
})

export const fetchTopLosers = createAsyncThunk('stocks/fetchTopLosers', async(params, {dispatch}) => {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
    console.log("top Losers: ",response.data.top_losers);
    dispatch(setTopLosers(response.data.top_losers));
})


const stocksSlice = createSlice({
    name: 'stocks',
    initialState: {
        topGainers: [],
        topLosers: [],
        loading: false,
        error: null,
    },
    reducers: {
        setTopGainers : (state, action) => {
            state.topGainers = action.payload
        },
        setTopLosers : (state, action) => {
            state.topLosers = action.payload
        },
        setLoading: (state, action) => {
            state.loading= action.payload
        },
        setError: (state, action) => {
            state.error= action.payload
        }
    },
});

export const {
    setError,
    setLoading,
    setTopGainers,
    setTopLosers
} = stocksSlice.actions;

export default stocksSlice.reducer;