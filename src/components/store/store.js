import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./slices/TaskSlice";

const rootReduser = combineReducers({
    task: TaskSlice,
})

export const store = configureStore({
    reducer: rootReduser
})