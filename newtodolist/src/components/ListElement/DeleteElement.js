import React from "react";

class DeleteElement extends React.Component {
  render() {
    const { handleDelete } = this.props;
    return <button onClick={handleDelete}>Delete</button>;
  }
}

export default DeleteElement;
