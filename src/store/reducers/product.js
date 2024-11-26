import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCT_URL;

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ limit, skip }, { dispatch }) => {
    const response = await axios.get(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`
    );
    dispatch(setProducts(response.data.products));
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "product/fetchProductsByCategory",
  async ({ category, limit, skip }, { dispatch }) => {
    const response = await axios.get(
      `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
    );

    dispatch(setProducts(response.data.products));
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetProducts: (state, action) => {
      state.productData = [];
    },
    setProducts: (state, action) => {
      state.productData = [...productData, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError, setLoading, setProducts, resetProducts } = productSlice.actions;

export default productSlice.reducer;
