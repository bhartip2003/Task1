import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import {income} from "../../data/income.json";

const API_KEY = import.meta.env.VITE_API_STOCK;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const isMockData = true;

export const fetchIncomeStatement = createAsyncThunk('income/fetchIncomeStatement', async(ticker, {dispatch}) => {
    
    if(isMockData){
        dispatch(setIncomeStatement(income.annualReports));
    }else {
        const response = await axios.get(`${BASE_URL}/query?function=INCOME_STATEMENT&symbol=${ticker}&apikey=${API_KEY}`);
        dispatch(setIncomeStatement(response.data.annualReports));
    }
})


const incomeSlice = createSlice({
    name: 'income',
    initialState: {
        incomeStatement: [],
        loading: false,
        error: null,
    },
    reducers: {
        setIncomeStatement : (state, action) => {
            state.incomeStatement = action.payload
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
    setIncomeStatement
} = incomeSlice.actions;

export default incomeSlice.reducer;