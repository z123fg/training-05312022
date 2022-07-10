import logo from './logo.svg';
import './App.css';
import CounterBoard from './components/CounterApp2/CounterBoard';

function App() {
  const [ counter, setCounter] = useState(0);
  
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
    <TestContext.Provider value = {{testCounter}}>
    <Provider>
    <div className="App"> 
    This is app
      <div className = "button-group">
      this is counter app
      <CounterBoard counter={counter}/>
      <ButtonGroup handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
      <Child handleClear={handleClear}/>
      </div>
    </div>
    </Provider>
    </TestContext.Provider>
  );
}

export default App;
