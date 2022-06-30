import React, { useState } from "react";

function TodoInput({ addTodo, refreshTodos }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo === "" || todo === null) {
      return;
    } else {
      addTodo(todo).then(() => {
        setTodo({ content: "" });
        refreshTodos();
      });
    }
  };
  const handleInputChange = (event) => {
    if (!event) {
      return;
    }

    const newValue = event.target.value;
    setTodo({ content: newValue });
  };

  return (
    <form class="todo__form">
      <input
        class="form--input"
        value={todo.content}
        onChange={handleInputChange}
      />
      <button class="btn--submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </form>
  );
}

export default TodoInput;
