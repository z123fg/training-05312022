import React from "react";
import { useState } from "react";

function TodoList() {
  const [todoList, setTodolist] = useState([
    { id: 1, content: "one", isComplete: false },
    { id: 2, content: "two", isComplete: false },
    { id: 3, content: "three", isComplete: false },
  ]);

  const handleDelete = (id) => {
    setTodolist(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todoList.map((todoList) => (
        <li key={todoList.id}>
          {todoList.content}
          <button>Edit</button>
          <button onClick={handleDelete} id={todoList.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
