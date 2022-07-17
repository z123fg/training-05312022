import logo from './logo.svg';
import './App.css';
import CounterBoard from './components/CounterApp2/CounterBoard';

function App() {
  const [ counter, setCounter] = useState(0);
  const [ testCounter, setTestCounter] = useState(0);
  
  const handleIncrement = () => {
    setCounter(counter+1);
  }

  const handleDecrement = () => {
    setCounter(counter-1);
  }

  const handleIncrementTestCounter = () => {
    setTestCounter(testCounter+1);
  }
  return (
    
    <Provider store={store}>
      <TestContext.Provider value = {{testCounter, handleIncrementTestCounter}}>
    <div className="App"> 
    This is app
      <div className = "button-group">
      this is counter app
      <CounterBoard />
      <ButtonGroup />
      <Child />
      </div>
    </div>
    </TestContext.Provider>
    </Provider>
    
  );
}

export default App;
