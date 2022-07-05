import logo from './logo.svg';
import './App.css';
import React from "react";
import List from "./components/List";

class App extends React.Component{
  state = {
    listElement:''
  };

  render () {
    return(
    <div className="App">
      <header className="App-header">
        <div className="App_top">
          <p>Selected Value: </p>
        </div>
        <br/>
      <List listElement={this.listElement}/>
      </header>
    </div>
    );
  }
}

export default App;
