import React from "react";
import TodoElement from "./TodoElement/TodoElement";
import "./TodoElementList.css"

export default class TodoElementList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items_shown: 2
        }
    }
    render() {
        let shown_elements = [];
        for (let i = 0; i < this.state.items_shown && i < this.props.todo_list_items.length; i++) {
            shown_elements.push(this.props.todo_list_items[i]);
        }


        let todo_list_items_elements = shown_elements.map(function(item) {
            return <TodoElement
                id={item.id} 
                content={item.content} 
                completed={item.completed}
                DeleteTodoListItem={this.props.DeleteTodoListItem}
                UpdateTodoListItem={this.props.UpdateTodoListItem}
                key={item.id}
            />
        }.bind(this))
        
        let NoneToShow = (this.props.todo_list_items.length <= 0) ?
                            (<label className="NoneToShowLabel">No tasks to show</label>) :
                            (<></>)
        let AddMoreButton = (<button className="AddMoreButton"
            onClick={(()=>{
                this.setState({
                    items_shown: (this.state.items_shown < this.props.todo_list_items.length) ? (this.state.items_shown + 2) : (this.props.todo_list_items.length)
                })
            }).bind(this)}
        >Show More</button>)
        let ShowLessButton = (<button className="ShowLessButton"
            onClick={(()=>{
                this.setState({
                    items_shown: (this.state.items_shown < this.props.todo_list_items.length) ? (this.state.items_shown - 2) : ((this.props.todo_list_items.length % 2 === 0) ? (this.props.todo_list_items.length - 2) : (this.props.todo_list_items.length - 1))
                })
            }).bind(this)}
        >Show Less</button>)
        if (this.state.items_shown >= this.props.todo_list_items.length) {
            AddMoreButton = <></>
        }
        if (this.state.items_shown <= 0) {
            ShowLessButton = <></>
        }
        return(
            <div className="TodoElementList">
                {NoneToShow}
                {todo_list_items_elements}
                <div className="AddMoreLessButtons">
                    {AddMoreButton} 
                    {ShowLessButton}
                </div>
            </div>
        )
    }
}