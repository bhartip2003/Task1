import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { overview } from "../../data/company.json";

const isMockData = true;

const mockData = { ...overview};

const API_KEY = import.meta.env.VITE_API_STOCK;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchCompanyOverview = createAsyncThunk(
  "company/fetchCompanyOverview",
  async (ticker, { dispatch }) => {
      
      if (isMockData) {
          dispatch(setCompanyDetails(mockData));
          
        } else {
        const response = await axios.get(
          `${BASE_URL}/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`
        );
      dispatch(setCompanyDetails(response.data));
    }
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    companyOverview: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCompanyDetails: (state, action) => {
      state.companyOverview = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading, setCompanyDetails } = companySlice.actions;

export default companySlice.reducer;
