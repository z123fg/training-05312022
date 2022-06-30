import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
class App extends React.Component {
  state = {
    newTodoVal: "",
    todos: [{ id: 1, context: "make coffee", complete: false }],
  };

  addTodo = (newTodoVal) => {
    newTodoVal = newTodoVal.trim();
    if (newTodoVal) {
      const { todos } = this.state;
      let newId = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
      todos.push({
        id: newId,
        context: newTodoVal,
        complete: false,
      });
      this.setState({ newTodoVal: "", todos });
    } else {
      alert("please enter some text");
    }
  };
  toggleTodo = (todo) => {
    const { todos } = this.state;
    todos.map((t) => {
      if (t.id === todo.id) {
        t.complete = !t.complete;
      }
      return todo;
    });
    this.setState({ todos });
  };
  deleteTodo = (todo) => {
    const todos = this.state.todos.filter((t) => {
      return todo.id !== t.id;
    });
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todolist">
        <header>
          <h1>Todo App</h1>
        </header>
        <AddTodo addTodo={this.addTodo} addTodoVal={this.state.newTodoVal} />
        <Todos
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
