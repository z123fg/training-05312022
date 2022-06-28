import React from 'react';
import APIs from './api';
import './App.css';
import List from './components/List';
import ListControl from './components/ListControl';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchKeyword: ''
    };

    this.refreshData = this.refreshData.bind(this);
    this.setSearchKeyword = this.setSearchKeyword.bind(this);
  }

  componentDidMount() {
    this.refreshData();
  }

  refreshData() {
    APIs.getTodos()
      .then((res) => {
        this.setState({
          ...this.state,
          data: res
        });
      });
  }

  setSearchKeyword(value) {
    this.setState({
      ...this.state,
      searchKeyword: value
    });
  }

  render() {
    return (
      <div className="todo__container">
        <ListControl
          refreshData={this.refreshData}
          searchKeyword={this.state.searchKeyword}
          setSearchKeyword={this.setSearchKeyword}
        />
        <List
          data={this.state.data}
          searchKeyword={this.state.searchKeyword}
          refreshData={this.refreshData}
        />
      </div>
    );
  }
}

export default App;
