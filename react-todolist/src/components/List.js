import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    const { data, searchKeyword, refreshData } = this.props;

    const filteredData = data.filter((elem) => {
      return elem.content.toLowerCase().includes(searchKeyword.toLowerCase());
    });

    filteredData.sort((a, b) => b.id-a.id);

    const pendingTasks = filteredData.filter((elem) => elem.status === 'pending');
    const completedTasks = filteredData.filter((elem) => elem.status === 'completed');
    const noActiveTasks = pendingTasks.length === 0 && completedTasks.length === 0;

    return (
      <div className="todo__list-container">
        <ul className="todo__list">
          {noActiveTasks && <li className="todo__list-item todo__list-item--no-active">No active tasks</li>}
          {pendingTasks.map(elem => (
            <ListItem
              key={`todo-${elem.id}`}
              todo={elem}
              refreshData={refreshData}
            />
          ))}
          <ListItem key="todo-null" todo={null} />
          {completedTasks.map(elem => (
            <ListItem
              key={`todo-${elem.id}`}
              todo={elem}
              refreshData={refreshData}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;