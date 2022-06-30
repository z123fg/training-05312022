import React, { useState } from "react";

const editIcon = (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="EditIcon"
    aria-label="fontSize small"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
  </svg>
);

const deleteIcon = (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="DeleteIcon"
    aria-label="fontSize small"
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
  </svg>
);

function TodoList({
  todos,
  editTodo,
  deleteTodo,
  refreshTodos,
  completeTodo,
  unfinishTodo,
}) {
  const completed = todos.filter((todo) => todo.status === true);
  const incomplete = todos.filter((todo) => todo.status === false);

  const [showingField, setShowingField] = useState("");
  const [newTodo, setTodo] = useState({ content: "" });

  const handleComplete = (event) => {
    event.preventDefault();
    const id = event.target.id;

    completeTodo(id).then(() => {
      refreshTodos();
    });
  };

  const handleUnfinish = (event) => {
    event.preventDefault();
    const id = event.target.id;

    unfinishTodo(id).then(() => {
      refreshTodos();
    });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.id;

    deleteTodo(id).then(() => {
      refreshTodos();
    });
  };

  const handleEdit = (id) => {
    editTodo(id, newTodo).then(() => {
      refreshTodos();
      hideField();
    });
  };

  const showField = (fieldId, value) => {
    if (!fieldId) {
      return;
    }
    setShowingField(fieldId);
    setTodo({ content: value, id: fieldId, status: false });
  };

  const hideField = () => {
    setShowingField("");
    setTodo({ content: false });
  };

  const changeTodo = (event) => {
    if (!event) {
      return;
    }

    const newValue = event.target.value;
    setTodo({ ...newTodo, content: newValue });
  };

  const handleKeyDown = (event, fieldId) => {
    if (!event || !fieldId) {
      return;
    }

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    const key = event.key;

    if (!key) {
      return;
    }

    if (key === "Escape") {
      hideField();
    } else if (key === "Enter") {
      handleEdit(fieldId);
    }
  };

  return (
    <div class="todo__list-container">
      <ul class="todo__list">
        {incomplete.length > 0 ? (
          incomplete.map((todo) => {
            return (
              <li class="todo--item" id={todo.id}>
                {parseInt(showingField) === todo.id ? (
                  <>
                    <input
                      class="input--edit"
                      id={todo.id}
                      value={newTodo.content}
                      onChange={(e) => changeTodo(e)}
                      onKeyDown={(e) => handleKeyDown(e, e.target.id)}
                    />
                    <button
                      class="btn--edit"
                      id={todo.id}
                      onClick={(e) => handleEdit(e.target.id)}
                    >
                      {editIcon}
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      class="todo--content"
                      id={todo.id}
                      onClick={(e) => handleComplete(e)}
                    >
                      {todo.content}
                    </span>
                    <button
                      class="btn--edit"
                      id={todo.id}
                      value={todo.content}
                      onClick={(e) => showField(e.target.id, e.target.value)}
                    >
                      {editIcon}
                    </button>
                    <button
                      class="btn--delete"
                      id={todo.id}
                      onClick={(e) => handleDelete(e)}
                    >
                      {deleteIcon}
                    </button>
                  </>
                )}
              </li>
            );
          })
        ) : (
          <li class="todo--none">No active tasks</li>
        )}
        {completed.length > 0 &&
          completed.map((todo) => {
            return (
              <li class="completed--item" id={todo.id} value={todo.content}>
                <span
                  class="completed--content"
                  id={todo.id}
                  onClick={(e) => handleUnfinish(e)}
                >
                  {todo.content}
                </span>
                <button
                  class="btn--delete"
                  id={todo.id}
                  onClick={(e) => handleDelete(e)}
                >
                  {deleteIcon}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
