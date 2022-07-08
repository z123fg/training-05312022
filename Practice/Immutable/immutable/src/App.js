import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./components/Main/Button";
import Span from "./components/Main/Span";

class App extends React.Component {
  //state.children[0].children[0].path[1]
  //state.children[1].children[1].children[0].path[2]
  state = {
    id: "001",
    type: "A",
    value: "aaaaa",
    "data:": {},
    path: ["001"],
    children: [
      {
        id: "003",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "003"],
        children: [
          {
            id: "002",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "003", "002"], //here
            children: [],
          },
        ],
      },
      {
        id: "004",
        type: "A",
        value: "aaaaa",
        "data:": {},
        path: ["001", "004"],
        children: [
          {
            id: "005",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "004", "005"],
            children: [],
          },
          {
            id: "005",
            type: "A",
            value: "aaaaa",
            "data:": {},
            path: ["001", "004", "005"],
            children: [
              {
                id: "002",
                type: "A",
                value: "aaaaa",
                "data:": {},
                path: ["001", "004", "005", "002"], //here
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  handleButtonOne = () => {
    console.log("Handle 1");
    this.setState((prev) => {
      const indexOne = 1;
      const indexTwo = 2;
      //children.children[0].children[0].path[1]
      return {
        ...prev,
        children: [
          {
            ...prev.children[0],
            children: [
              {
                ...prev.children[0].children[0],
                path: [
                  ...prev.children[0].children[0].path.slice(0, indexOne),
                  "004",
                  ...prev.children[0].children[0].path.slice(indexOne + 1),
                ],
              },
            ],
          },
          {
            ...prev.children[1],
            children: [
              {
                ...prev.children[1].children[0],
              },
              {
                ...prev.children[1].children[1],
                children: [
                  {
                    ...prev.children[1].children[1].children[0],
                    path: [
                      ...prev.children[1].children[1].children[0].path.slice(
                        0,
                        indexTwo
                      ),
                      "006", //Here
                      ...prev.children[1].children[1].children[0].path.slice(
                        indexTwo + 1
                      ),
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Immutable</h1>

        <Span childrenOne={this.state} />
        <Button handleButtonOne={this.handleButtonOne} />
      </div>
    );
  }
}

export default App;
