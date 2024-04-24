import { configureStore } from "@reduxjs/toolkit/react";
import todoReducer from "./reducer/todo-reducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
