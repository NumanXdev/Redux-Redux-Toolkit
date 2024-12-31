import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "Sample Task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //     Direct Mutation
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markasDone: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id == action.payload) {
          todo.isDone = true;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, markasDone } = todoSlice.actions;

export default todoSlice.reducer;