import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_PRODUCT_URL;

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (params, { dispatch }) => {
      
        const response = await axios.get(
          `${BASE_URL}/products/categories`
        );
     
      dispatch(setCategory(response.data));
    }  
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryData: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.categoryData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading, setCategory } = categorySlice.actions;

export default categorySlice.reducer;
