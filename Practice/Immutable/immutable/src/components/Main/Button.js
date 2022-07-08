import React from "react";

class Button extends React.Component {
  render() {
    const { handleButtonOne } = this.props;
    return (
      <div>
        <button onClick={handleButtonOne}>Change Data</button>
      </div>
    );
  }
}
export default Button;
