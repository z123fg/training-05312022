import React from "react";
import Todo from "./Todo";
class Todos extends React.Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (
      <>
        <div className="todolist__container">
          <ul className="todolist__list-container">
            {todos.map((todo, index) => (
              <li key={index} className="todolist_list-element">
                <Todo
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Todos;
