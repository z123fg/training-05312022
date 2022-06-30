import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import "./App.css";
class App extends React.Component {
  state = {
    newTodoVal: "",
    todos: [],
  };
  getTodo = () => {
    this.setState(() => {
      fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            todos: result,
          })
        );
    });
  };
  componentDidMount() {
    this.getTodo();
  }
  addTodo = (newTodoVal) => {
    newTodoVal = newTodoVal.trim();
    if (newTodoVal) {
      let newTodo = { context: newTodoVal, complete: false };
      let res = fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        return res.json();
      });
      this.setState({ todos: [res, ...this.state.todos] });
    } else {
      alert("please enter some texts");
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
    fetch(`http://localhost:3000/todos/${todo.id}`, {
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
    let todos = this.state.todos.filter((t) => {
      return +todo.id !== +t.id;
    });
    console.log(todos);
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
