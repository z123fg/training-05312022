import React from "react";

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

function TodoList({ todos, editTodo, deleteTodo, refreshTodos }) {
  const completed = todos.filter((todo) => todo.status === true);
  const incomplete = todos.filter((todo) => todo.status === false);

  return (
    <div class="todo__list-container">
      <ul class="todo__list">
        {incomplete.length > 0 ? (
          incomplete.map((todo) => {
            return (
              <li class="todo--item" id={todo.id}>
                <span class="todo--content" id={todo.id}>
                  {todo.content}
                </span>
                <button class="btn--edit" id={todo.id}>
                  {editIcon}
                </button>
                <button class="btn--delete" id={todo.id}>
                  {deleteIcon}
                </button>
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
                <span class="completed--content" id={todo.id}>
                  {todo.content}
                </span>
                <button class="btn--delete" id={todo.id}>
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
