import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

export const resultSlice = createSlice({
  name: "result",
  initialState,

  reducers: {
    updateResult: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { updateResult } = resultSlice.actions;

export const selectResult = (state) => state.result.score;

export default resultSlice.reducer;
