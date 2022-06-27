class HelloMessage extends React.Component {
  render() {
    return React.createElement("h1", null, "hello world");
  }
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render();
