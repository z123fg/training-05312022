import React, { PureComponent } from "react";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log("TodoList mounted");
  };

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log("TodoList getDerivedStateFromProps", nextProps, prevState);
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("TodoList getSnapshotBeforeUpdate", prevProps, prevState);
  };

  componentDidUpdate = () => {
    console.log("TodoList did update");
  };

  componentWillUnmount = () => {
    console.log("TodoList will unmount");
  };
  completed = () => {
    return this.todos.filter((todo) => todo.status === false);
  };
  incomplete = () => {
    return this.todos.filter((todo) => todo.status !== false);
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div class="todo__list-container">
        <ul class="todo__list">
          {this.incomplete.length > 0 ? (
            this.incomplete.map((todo) => {
              return (
                <li class="todo--item" id={todo.id}>
                  <span class="todo--content" id={todo.id}>
                    ${todo.content}
                  </span>
                  <button class="btn--edit" id={todo.id}>
                    ${editIcon}
                  </button>
                  <button class="btn--delete" id={todo.id}>
                    ${deleteIcon}
                  </button>
                </li>
              );
            })
          ) : (
            <li>No active tasks</li>
          )}
          {this.completed.length > 0 && (
            <li class="completed--item" id={todo.id} value={todo.content}>
              <span class="completed--content" id={todo.id}>
                {todo.content}
              </span>
              <button class="btn--delete" id={todo.id}>
                {deleteIcon}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  // bla: PropTypes.string,
};

TodoList.defaultProps = {
  // bla: 'test',
};

export default TodoList;
