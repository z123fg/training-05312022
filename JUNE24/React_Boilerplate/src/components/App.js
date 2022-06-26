import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderComponent 
                    header="My react boilerplate and header component!"
                />
            </div>
        );
    }
}
export default App;