import React from "react";
import "./TodoItem.css"

const TodoItem = ({
  todo,
  handleChangeItem,
  handleComplete,
  handleEdit,
  handleDelete,
}) => {
  return (
    <li key={todo.id} className={`todo__list-item ${todo.isCompleted?"todo__list-item--completed":""}`}>
      {todo.isEdit ? (
        <input
          value={todo.content}
          onChange={(e) => handleChangeItem(todo.id, e)}
        />
      ) : (
        <span onClick={() => handleComplete(todo.id)}>{todo.content}</span>
      )}
      {!todo.isCompleted&&<button onClick={() => handleEdit(todo.id)}>edit</button>}
      <button onClick={() => handleDelete(todo.id)}>delete</button>
    </li>
  );
};

export default TodoItem;
