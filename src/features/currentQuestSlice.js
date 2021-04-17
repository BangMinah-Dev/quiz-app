import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuest: 1,
};

export const currentQuest = createSlice({
  name: "quest",
  initialState,

  reducers: {
    updateCurrentQuest: (state, action) => {
      state.currentQuest = action.payload;
    },
  },
});

export const { updateCurrentQuest } = currentQuest.actions;

export const selectQuest = (state) => state.quest.currentQuest;

export default currentQuest.reducer;
