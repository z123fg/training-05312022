import React, { PureComponent } from "react";

class TodoInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log("TodoInput mounted");
  };

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("TodoInput getDerivedStateFromProps", nextProps, prevState);
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("TodoInput getSnapshotBeforeUpdate", prevProps, prevState);
  };

  componentDidUpdate = () => {
    console.log("TodoInput did update");
  };

  componentWillUnmount = () => {
    console.log("TodoInput will unmount");
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <form class="todo__form">
        <input class="form--input" />
        <button class="btn--submit" onClick={(e => this.handleSubmit(e))}>
          Submit
        </button>
      </form>
    );
  }
}

TodoInput.propTypes = {
  // bla: PropTypes.string,
};

TodoInput.defaultProps = {
  // bla: 'test',
};

export default TodoInput;
