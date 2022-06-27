import React from "react";

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name} <div>123</div>
      </div>
    );
  }
}

export default HelloMessage;
