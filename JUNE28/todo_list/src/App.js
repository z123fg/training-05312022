import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todo_List/TodoList';

function App() {
  return (
    <div className="App">
      <div className='TodoListContainer'>
        <TodoList width={"500px"} height={"900px"}/>
      </div>
    </div>
  );
}

export default App;
