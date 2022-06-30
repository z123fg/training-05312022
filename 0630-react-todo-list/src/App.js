import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount(){
    // make api call
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => {
        this.setState({todos: data})
      })

  }

  addNewTodo = (newTodo) => {
    this.setState((prevState, prevProps) => {
      return {
        todos: [...prevState.todos, newTodo]
      }
    })

  }

  deleteTodo = (id) => {
    this.setState((prevState, prevProps) => {
      return {
        todos: prevState.todos.filter(todo => +todo.id !== +id)
      }
    })
  }

  updateTodoStatus = (updatedTodo) => {
    this.setState((prevState, prevProps) => {
      const idx = prevState.todos.findIndex(todo => todo.id === updatedTodo.id)
      return {
        todos: [...prevState.todos.slice(0, idx), updatedTodo, ...prevState.todos.slice(idx + 1)]
      }
      
    })
  }

  handleEditClick = (event) => {
    const id = event.target.parentElement.id;
    const targetTodoItem = this.state.todos.find(todo => +todo.id === +id)
    if (targetTodoItem.isComplete) {
      alert("You are not allowed to edit a complete todo!");
      return;
    }
    if (targetTodoItem.isEdit) {
      const newContent = event.target.previousElementSibling.value
      const newTodo = {
        ...targetTodoItem,
        content: newContent,
        isEdit: !targetTodoItem.isEdit
      }
      // make patch request
      const configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(newTodo)
      }

      fetch(`http://localhost:5000/todos/${id}`, configObj)
        .then(res => res.json())
        .then(data => this.updateTodoStatus(data))

    } else {
      targetTodoItem.isEdit = true;
      this.setState((prevState, prevProps) => {
        const idx = prevState.todos.findIndex(todo => +todo.id === targetTodoItem.id)
        return {
          todos: [...prevState.todos.slice(0, idx), targetTodoItem, ...prevState.todos.slice(idx + 1)]
        }

      })
    }
  } 

  handleDeleteClick = (event) => {
    const id = event.target.parentElement.id;
    
    // make delete http request
    fetch(`http://localhost:5000/todos/${id}`, {method: "DELETE"})
      .then(res => res.json())
      .then(data => this.deleteTodo(id))
  }

  handleStatusClick = (event) => {
    const id  = event.target.parentElement.id;
    const todo = this.state.todos.find(todo => +todo.id === +id)
    if (todo.isComplete) {
      alert("You are not allowed to edit a complete todo!");
      return;
    }
    else {
      // make patch http request
      const configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({isComplete: true})
      }

      fetch(`http://localhost:5000/todos/${id}`, configObj)
        .then(res => res.json())
        .then(data => this.updateTodoStatus(data))
    }
  }

  render(){
    return(
      <div className="todo__container">
        <TodoForm addNewTodo={this.addNewTodo} />
        <TodoList 
            todos={this.state.todos}
            handleEditClick={this.handleEditClick} 
            handleDeleteClick={this.handleDeleteClick}
            handleStatusClick={this.handleStatusClick} 
        />
      </div>
    )
  }

}

export default App;
