import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/counter/todoSlice.js";
export const store = configureStore({
  reducer: todoReducer,
});
