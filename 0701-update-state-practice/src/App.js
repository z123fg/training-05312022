import './App.css';
import React from 'react';

class App extends React.Component {
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
            path: ["001", "003", "002"],
            children: []
          }
        ]
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
            children: []
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
                path: ["001", "004", "005", "002"],
                children: []
              }
            ]
          }
        ]
      }
    ]
  };


  handleValue1Click = () => {
    this.setState((prev) => {
        return {
            ...prev,
            children: [
                {
                    ...prev.children[0],
                    children: [
                        {
                            ...prev.children[0].children[0],
                            path: [
                                ...prev.children[0].children[0].path.slice(0, 1),
                                '004',
                                ...prev.children[0].children[0].path.slice(2)
                            ]
                        }
                    ]
                },
                {...prev.children[1]}
            ]
        }
    })
}


handleValue2Click = () => {
  this.setState((prev) => {
    return {
      ...prev,
      children: [
        {...prev.children[0]},
        {
          ...prev.children[1],
          children: [
            {...prev.children[1].children[0]}, 
            {
              ...prev.children[1].children[1],
              children: [
                {
                  ...prev.children[1].children[1].children[0],
                  path: [
                    ...prev.children[1].children[1].children[0].path.slice(0, 2),
                    "006",
                    ...prev.children[1].children[1].children[0].path.slice(3),
                  ]
                }

              ]
            }
         ]
        }
      ]
    }   
})}


  render(){
    return(
      <div className="App">
          <div>
            <span>Value 1: {this.state.children[0].children[0].path[1]}</span>
            <button onClick={this.handleValue1Click}>Update to 004</button>
          </div>

          <div>
            <span>Value 2: {this.state.children[1].children[1].children[0].path[2]}</span>
            <button onClick={this.handleValue2Click}>Update to 006</button>
          </div>
      </div>
    )
  }
}

export default App;
