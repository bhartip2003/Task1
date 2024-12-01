import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCT_URL;

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
      state.productData = [...state.productData, ...action.payload];
    },
    setProductItem: (state, action) => {
      state.productData = [...state.productData, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async ({ category=null, limit, skip }, { dispatch }) => {

    dispatch(setLoading(true));
    const url = category
      ? `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
      : `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
   
    const response = await axios.get(url);
    dispatch(setProducts(response.data.products));
    dispatch(setLoading(false));

  }
);

export const fetchOneProduct = createAsyncThunk("product/fetchOneProduct", async(id, {dispatch}) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  dispatch(setProductItem(response.data));
})

export const { setError, setLoading, setProducts, setProductItem, resetProducts } =
  productSlice.actions;

export default productSlice.reducer;
