import logo from "./logo.svg";
import "./App.css";
import CounterBoard from "./components/CounterApp2/CounterBoard";
import ButtonGroup from "./components/CounterApp2/ButtonGroup/ButtonGroup";
import { useState } from "react";
import Child from "./components/CounterApp2/Child";
import { dispatch, getState, store, subscribe } from "./redux/redux";
import { Provider } from "react-redux";
import { createContext } from "react";

/* 
  redux: global state management tool
  redux core
  react redux: nothing but the combination of context api and redux core
    Provider: context api
    useSelector:similar to subscribe
    useDispatch: dispatch
  react redux toolkit(RTK): 

  context: from React

*/

export const TestContext = createContext(0);

function App() {
  const [testCounter, setTestCounter] = useState(0);

  const handleIncrementTestCounter = () => {
    setTestCounter(testCounter + 1);
  };
  return (
    <Provider store={store}>
      <TestContext.Provider value={{ testCounter, handleIncrementTestCounter }}>
        <div className="App">
          this is app
          <div className="counter-app">
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
