import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "../features/resultSlice";
import totalQuestionReducer from "../features/totalQuestionSlice"

export const store = configureStore({
    reducer: {
        result: resultReducer,
        totalQuestion : totalQuestionReducer
    },
});
