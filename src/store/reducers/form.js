import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false, // Default items per page
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setModal(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setModal } = formSlice.actions;
export default formSlice.reducer;
