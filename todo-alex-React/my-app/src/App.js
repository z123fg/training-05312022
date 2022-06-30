import logo from './logo.svg';
import './App.css';
import React from 'react';
import todoList from './components/todoList';
import TodoSubmit from './components/todoSubmit';
import TodoInput from'./components/todoInput';

class App extends React.Component{
  state = {
    todoList: [],
    todoElement: ""
  };


  addTodo = () =>{

  }

  render() {
    return (
      <div className="todo__header">
        <form class="todo__form">
          <TodoInput todoElement={this.todoElement}/>
          <TodoSubmit todoElement={this.todoElement}/>
        </form>
        <div class="todo__list-container">
          <ul class="todo__list">
            
          </ul>
        </div>
      </div>
  );
  }
}

export default App;
