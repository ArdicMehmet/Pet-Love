import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sample: 1,
};

const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    setSample: (state, action) => {
      state.sample = action.payload;
    },
  },
});

export const { setSample } = sampleSlice.actions;
export default sampleSlice.reducer;
