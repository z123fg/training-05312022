import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './TodoList.styles';

class TodoList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('TodoList mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('TodoList getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('TodoList getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('TodoList did update');
  }

  componentWillUnmount = () => {
    console.log('TodoList will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TodoListWrapper">
        Test content
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
