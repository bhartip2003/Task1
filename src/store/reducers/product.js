import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCT_URL;

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
    productItem: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetProducts: (state) => {
      state.productData = [];
    },
    clearProductItem: (state) => {
      state.productItem = null;
    },
    setProducts: (state, action) => {
      state.productData = [...state.productData, ...action.payload];
    },
    setProductItem: (state, action) => {
      state.productItem = action.payload;
    },
    setUpdatedProduct: (state, action) => {
      state.productItem = action.payload;

      const index = state.productData.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.productData[index] = {
          ...state.productData[index],
          ...action.payload,
        };
      }
    },
    setAddedProduct: (state, action) => {
      state.productItem = action.payload;

      state.productData = [...state.productData, state.productItem];
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
  async ({ category = null, limit, skip }, { dispatch }) => {
    dispatch(setLoading(true));
    const url = category
      ? `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`
      : `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

    const response = await axios.get(url);
    dispatch(setProducts(response.data.products));
    dispatch(setLoading(false));
  }
);

export const fetchOneProduct = createAsyncThunk(
  "product/fetchOneProduct",
  async (id, { dispatch }) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    dispatch(setLoading(true));
    dispatch(setProductItem(response.data));
    dispatch(setLoading(false));
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data, { dispatch }) => {
    const { id, ...updateFields } = data;
    const response = await axios.put(
      `${BASE_URL}/products/${id}`,
      updateFields
    );
    dispatch(setUpdatedProduct(response.data));
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data, { dispatch }) => {
    const response = await axios.post(`${BASE_URL}/products/add`, data, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(setAddedProduct(response.data));
    
  }
);

export const {
  setError,
  setLoading,
  setProducts,
  setProductItem,
  setUpdatedProduct,
  setAddedProduct,
  resetProducts,
  clearProductItem,
} = productSlice.actions;

export default productSlice.reducer;
