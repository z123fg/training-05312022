import logo from './logo.svg';
import './App.css';
import React from 'react';
import todoList from './components/todoList';

class App extends React.Component{

  addTodo = () =>{

  }

  render() {
    return (
      <div className="todo__header">
        <form class="todo__form">
          <input class = "input" onfocus="this.value=''"/>
          <button class = "submit__button">Submit</button>
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
