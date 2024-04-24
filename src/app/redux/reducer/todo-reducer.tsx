import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      return { todos: [...state.todos, action.payload] };
    },
    del: (state, action) => {
      return {
        todos: [...state.todos.filter((item) => item.id !== action.payload.id)],
      };
    },
  },
});

export default todosReducer.reducer;

export const { add, del } = todosReducer.actions;
