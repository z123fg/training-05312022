import React, { useState } from "react";

function TodoInput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    if (todo === "" || todo === null) {
      return;
    } else {
      addTodo(todo);
    }
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    if (!event) {
      return;
    }

    const newValue = event.target.value;
    setTodo(newValue);
  };

  return (
    <form class="todo__form">
      <input class="form--input" value={todo} onChange={handleInputChange} />
      <button class="btn--submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </form>
  );
}

export default TodoInput;
