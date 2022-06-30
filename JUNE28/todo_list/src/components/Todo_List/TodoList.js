import React from "react";
import TodoElementList from "./TodoElementList/TodoElementList";
import SearchFilterComponent from "./SearchFilterComponent/SearchFilterComponent";
import Filter from "./lib/Filter";
import Order from "./lib/Order";
import APIs from "./lib/APIs";
import "./TodoList.css";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_list_items: [],
            todo_list_items_filtered_ordered: [],
            filter:{},
            order:{}
        }

        this.SetTodoListItems = this.SetTodoListItems.bind(this);
        this.DeleteTodoListItem = this.DeleteTodoListItem.bind(this);
        this.AddTodoListItem = this.AddTodoListItem.bind(this);
        this.UpdateTodoListItem = this.UpdateTodoListItem.bind(this);
        this.FilterAndOrderData = this.FilterAndOrderData.bind(this);
    }
    componentDidMount() {
        this.GetItems();
    }

    render() {
        let style={
            width:this.props.width,
            height:this.props.height
        }
        return (
            <div className="TodoList" style={style}>
                <SearchFilterComponent
                    SetTodoListItems={this.SetTodoListItems}
                    UpdateTodoListItem={this.UpdateTodoListItem}
                    DeleteTodoListItem={this.DeleteTodoListItem}
                    FilterAndOrderData={this.FilterAndOrderData}
                    AddTodoListItem={this.AddTodoListItem}
                />
                <TodoElementList 
                    todo_list_items={this.state.todo_list_items_filtered_ordered} 
                    DeleteTodoListItem={this.DeleteTodoListItem}
                    UpdateTodoListItem={this.UpdateTodoListItem}
                />
            </div>
        )
    }

    SetTodoListItems(items) {
        this.setState({
            todo_list_items: items
        },()=>{this.FilterAndOrderData(this.state.filter, this.state.order)})
    }
    UpdateTodoListItem(item) {
        let state_copy = this.state.todo_list_items;
        for (let i = 0; i < state_copy.length; i++) {
            if (state_copy[i].id === item.id) {
                state_copy[i].content = item.content;
                state_copy[i].completed = item.completed;
            }
        }
        this.SetTodoListItems(state_copy);
    }
    AddTodoListItem(item) {
        let state_copy = this.state.todo_list_items;
        state_copy.push(item);
        this.SetTodoListItems(state_copy);
    }
    DeleteTodoListItem(id) {
        let state_copy = this.state.todo_list_items;
        for (let i = 0; i < state_copy.length; i++) {
            if (state_copy[i].id === id) {
                state_copy.splice(i, 1);
            }
        }
        this.SetTodoListItems(state_copy);
    }
    FilterAndOrderData(filter_raw, order_raw) {
        let state_copy = this.state.todo_list_items;
        let return_value = undefined;
        let filter = new Filter(filter_raw);
        let order = new Order(order_raw);
        //filter data
        return_value = state_copy.filter(value => {
            if (!Filter.Compare(value.content, filter.content.comparison, filter.content.filter)) {
                return false;
            }
            if (!Filter.Compare(value.completed, filter.completed.comparison, filter.completed.filter)) {
                return false;
            }
            return true;
        })

        //order data
        const min_prio = 0;
        const max_prio = 5;
        for (let i = min_prio; i <= max_prio; i++) {
            if (order.content.priority === i) {
                return_value = Order.OrderSet(return_value, order.content.direction, "content");
            }
            if (order.age.priority === i) {
                return_value = Order.OrderSet(return_value, order.age.direction, "id");
            }
            if (order.completed.priority === i) {
                return_value = Order.OrderSet(return_value, order.completed.direction, "completed");
            }
        }

        this.setState({
            todo_list_items_filtered_ordered: return_value,
            filter: filter_raw,
            order: order_raw
        })
    }

    GetItems() {
        APIs.Get()
        .then((response) => {
            this.SetTodoListItems(response, new Filter({}), new Order({}));
        })
    }

    SetFilter(filter) {
        this.setState({
            filter: filter
        })
    }
    SetOrder(order) {
        this.setState({
            order: order
        })
    }
}