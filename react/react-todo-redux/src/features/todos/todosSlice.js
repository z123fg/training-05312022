import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3500/todos";

const initialState = {
  todos: [],
  status: "idle", // Request Stages => "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (initialTodo) => {
  const response = await axios.post(BASE_URL, initialTodo);
  return response.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (initialTodo) => {
  const { id } = initialTodo;
  try {
    const response = await axios.post(`${BASE_URL}/${id}`);
    if (response?.status === 200) {
      return `${response?.status}: ${response?.statusText}`;
    }
  } catch (err) {
    return err.message;
  }
})

export const updateTodoStatus = createAsyncThunk("todos/updateTodoStatus", async (initialTodo) => {
  const { id } = initialTodo;
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return err.message
    // return initialTodo; // remove => Only for testing Redux
  }
})

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // todoAdded: {
    //   reducer(state, action) {
    //     state.todos.push(action.payload);
    //   },
    //   prepare(title, description, completed) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         description,
    //         completed
    //       }
    //     }
    //   }
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedTodos = action.payload.map((todo) => {
          return todo;
        });
        state.todos = loadedTodos;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        action.payload.id = state.todos[state.todos.length - 1].id + 1;
        console.log(action.payload);
        state.todos.push(action.payload);
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not update Todo Status", action.payload);
          return;
        }
        const id = action.payload
        console.log(id);
        const todos = state.todos.filter(todo => todo.id !== id);
        state.todos = [...todos, action.payload];
      })
  },
});

export const getAllTodos = (state) => state.todos.todos;
export const getTodosError = (state) => state.todos.error;
export const getTodosStatus = (state) => state.todos.status;

export const selectTodoById = (state, todoId) => state.todos.todos.find(todo => todo.id === todoId);

export const { todoAdded } = todosSlice.actions;

export default todosSlice.reducer;
