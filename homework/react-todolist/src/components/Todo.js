import React from "react";

class Todo extends React.Component {
  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;
    return (
      <>
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.complete ? <s>{todo.context}</s> : <span>{todo.context}</span>}
        <button className="delete--btn" onClick={() => deleteTodo(todo)}>
          delete
        </button>
      </>
    );
  }
}
export default Todo;
