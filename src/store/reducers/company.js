import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";


const API_KEY = import.meta.env.VITE_API_STOCK;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchCompanyOverview = createAsyncThunk('company/fetchCompanyOverview', async(ticker, {dispatch}) => {
    const response = await axios.get(`${BASE_URL}/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`);
   
    dispatch(setCompanyDetails(response.data));
})


const companySlice = createSlice({
    name: 'company',
    initialState: {
        company: null,
        loading: false,
        error: null,
    },
    reducers: {
        setCompanyDetails : (state, action) => {
            state.company = action.payload
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
    setCompanyDetails
} = companySlice.actions;

export default companySlice.reducer;