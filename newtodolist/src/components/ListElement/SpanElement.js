import React from "react";

class SpanElement extends React.Component {
  render() {
    // const { handleSpan } = this.props;
    const { content } = this.props;
    //console.log("content ", { content }.content);

    return (
      <span> {content}</span>
      //   <>
      //     {content.map((item) => (
      //       <span>
      //         {item.id} {item.content}
      //       </span>
      //     ))}
      //   </>
    );
  }
}

export default SpanElement;
