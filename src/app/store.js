import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "../features/resultSlice";
import totalQuestionReducer from "../features/totalQuestionSlice";
import currentQuestReducer from "../features/currentQuestSlice";

export const store = configureStore({
  reducer: {
    result: resultReducer,
    totalQuestion: totalQuestionReducer,
    quest: currentQuestReducer,
  },
});
