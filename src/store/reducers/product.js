import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_PRODUCT_URL;

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (limit, skip, { dispatch }) => {
      
        const response = await axios.get(
          `${BASE_URL}/products?limit=${limit}&skip=${skip}`
        );
      dispatch(setProducts(response.data.products));
    }  
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.productData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading, setProducts } = productSlice.actions;

export default productSlice.reducer;
