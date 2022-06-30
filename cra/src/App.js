import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import { useState } from 'react';
import TwoWayBindingDemo from './components/TwoWayBindingDemo';



function App() {
  const [showTest, setShowTest] = useState(true);


  const handleClick = () => {
    setShowTest(false)
  }
  return (
    <div className="App">
    {/*   <button onClick={handleClick}>remove Test</button>
      {showTest&&<Test toggle={true}/>} */}
      <TwoWayBindingDemo/>

    </div>
  );
}

export default App;
