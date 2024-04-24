import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Todo {}

interface TodoState {
  todos: {
    id: number;
    name: string;
  }[];
}

const initialState: TodoState = {
  todos: [],
};

const todosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },
    del: (state, action) => {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export default todosReducer.reducer;

export const { add, del } = todosReducer.actions;
