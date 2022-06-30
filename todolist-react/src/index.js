import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    );
  }
}

root.render(<App />);
