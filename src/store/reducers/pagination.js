import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 15, // Default items per page
  skip: 0,   // Items to skip (calculated based on the current page)
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination(state, action) {
      const { limit, skip } = action.payload;
      state.limit = limit;
      state.skip = skip;
    },
    resetPagination(state) {
      state.limit = initialState.limit;
      state.skip = initialState.skip;
    },
  },
});

export const { setPagination, resetPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
