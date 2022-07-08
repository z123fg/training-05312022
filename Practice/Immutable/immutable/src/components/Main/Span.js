import React from "react";

class Span extends React.Component {
  render() {
    const { childrenOne } = this.props;
    return (
      <div>
        <div>Children 1: {childrenOne.children[0].children[0].path[1]}</div>
        <div>
          Children 2: {childrenOne.children[1].children[1].children[0].path[2]}
        </div>
      </div>
    );
  }
}

export default Span;
