import React from "react";

class EditElement extends React.Component {
  render() {
    const { handleEdit } = this.props;
    return <button onClick={handleEdit}>Edit</button>;
  }
}

export default EditElement;
