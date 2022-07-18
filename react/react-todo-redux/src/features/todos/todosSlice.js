import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3500/todos";

const initialState = {
  todos: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (initialTodo) => {
    const response = await axios.post(BASE_URL, initialTodo);
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (initialTodo) => {
    const { id } = initialTodo;

    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);

      if (response?.status === 200) {
        return initialTodo;
      }
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateTodoStatus = createAsyncThunk(
  "todos/updateTodoStatus",
  async (initialTodo) => {
    const { id } = initialTodo;
    try {
      const response = await axios.patch(`${BASE_URL}/${id}`, initialTodo);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (initialTodo) => {
    const { id } = initialTodo;
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, initialTodo);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers(builder) {
    builder

      // fetch todos
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

      // add todo
      .addCase(addNewTodo.fulfilled, (state, action) => {
        action.payload.id = state.todos[state.todos.length - 1].id + 1;
        state.todos.push(action.payload);
      })

      // edit todo status
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not update Todo Status", action.payload);
          return;
        }
        // console.log(action.payload);
        const { id } = action.payload;
        // console.log(id);
        const upadatedTodo = state.todos.map((todo) => {
          if (todo.id !== id) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        });

        state.todos = upadatedTodo;
      })

      .addCase(editTodo.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Edit could not be completed', action.payload)
          console.log(action.payload)
          return;
        }
        // console.log(action.payload);
        const { id, title, description, completed } = action.payload;
        // console.log(id);
        const editedTodos = state.todos.map((todo) => {
          if (todo.id !== id) {
            return todo
          }
          return {
            title: title,
            description: description,
            completed: completed,
            id: id,
          }
        })
        state.todos = editedTodos;
      })

      // delete todo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Could not delete todo", action.payload);
          return;
        }
        // console.log(action.payload);
        const { id } = action.payload;
        // console.log(id);
        const todos = state.todos.filter((todo) => todo.id !== id);
        state.todos = todos;
      });
  },
});

export const getAllTodos = (state) => state.todos.todos;
export const getTodosError = (state) => state.todos.error;
export const getTodosStatus = (state) => state.todos.status;

export default todosSlice.reducer;
