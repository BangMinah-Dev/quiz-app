import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    totalQuest : 0
}

export const totalQuestion = createSlice({
    name: "totalQuestion",
    initialState,
    reducers: {
        updateTotalQuestion: (state, action) => {
            state.totalQuest = action.payload
        }
    }
})

export const {updateTotalQuestion} = totalQuestion.actions

export const selectTotalQuestion = (state) => state.totalQuestion.totalQuest

export default totalQuestion.reducer