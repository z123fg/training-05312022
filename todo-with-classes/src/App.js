import React, { Component } from 'react';
import Title from './components/Title';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import {
  collection,
  query,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import './App.css';

class App extends Component {
  state = {
    todos: [],
    todoItem: ''
  }

  componentDidMount() {
    console.log('runs here')
    const q = query(collection(db, "todos"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];

      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });

      todosArray.sort((a, b) => {
        if (b.completed) {
          return -1
        } else if (a.completed === true) {
          return 1
        } return 0;
      })

      this.setState({ todos: todosArray });
    });

    return () => unsub();
  }

  handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  render() {

    return (
      <div className="App">
        <div>
          <Title />
          <AddTodo />
        </div>
        {
          this.state.todos.length === 0 ? <div style={{ display: 'flex', justifyContent: 'center' }}>"no active task"</div> :
            <div className="todo_container">
              {this.state.todos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleComplete={this.toggleComplete}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              ))}
            </div>
        }

      </div>
    );
  }
}


export default App;
