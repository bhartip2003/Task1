import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import {top_gainers, top_losers} from "../../data/data.json"

const isMockData = true;

const API_KEY = import.meta.env.VITE_API_STOCK;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchTopGainers = createAsyncThunk('stocks/fetchTopGainers', async(params, {dispatch}) => {
    
    if(isMockData){
        dispatch(setTopGainers(top_gainers));
        dispatch(setTopLosers(top_losers));
    }else {
        const response = await axios.get(`${BASE_URL}/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`);
        dispatch(setTopGainers(response.data.top_gainers));
        dispatch(setTopLosers(response.data.top_losers));
    }
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