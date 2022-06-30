import React from "react";
import Filter from "../lib/Filter";
import Order from "../lib/Order";
import APIs from "../lib/APIs";

import "./SearchFilterComponent.css"

export default class SearchFilterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FilterSortToggled: true,
            
            AddItemText: "",
            FilterContentSelect: "Equal to",
            FilterContentText: "",
            FilterCompletedSelect: "No filter",
            SortContentSelect: "No Sort",
            SortCompletedSelect: "No Sort",
            SortAgeSelect: "No Sort"
        }

        
    }

    render() {
        let filter_sort_container_style = {
            display: "none"
        }
        if (this.state.FilterSortToggled) {
            filter_sort_container_style = {
                display: "revert"
            }
        }
        return (
            <div className="TodoList_SearchFilter">
                <div className="SearchFilter_Add">
                    <input type="text" className="SearchFilter_Add_Text"
                        value={this.state.AddItemText}
                        onChange={((e)=>{this.setState({AddItemText: e.target.value})}).bind(this)}
                    ></input>
                    <button className="SearchFilter_Add_Button"
                        onClick={(()=>{
                            if (this.state.AddItemText !== "") {
                                APIs.Add({
                                    content: this.state.AddItemText,
                                    completed: false
                                })
                                .then((reponse)=> {
                                    this.props.AddTodoListItem(reponse, this.GenerateFilter(), this.GenerateOrder())
                                });
                                this.setState({
                                    AddItemText: ""
                                })
                            }
                        })}
                    >Submit</button>
                </div>
                <div className="SearchFilter_FilterSort">
                    <button className="FilterSort_Toggle"
                        onClick={(()=>{this.setState({FilterSortToggled: !this.state.FilterSortToggled})}).bind(this)}
                    >{(this.state.FilterSortToggled) ? ("Hide") : ("Show")} Filter and Sorting Menu</button>
                    <div className="FilterSort_Container" style={filter_sort_container_style}>
                        <div className="FilterSort_Filter">
                            <label className="FilterSort_Filter_Label">Filter</label>
                            <div className="FilterSort_Filter_FilterContentContainer">
                                <label className="FilterSort_Filter_FilterContentLabel">Content</label>
                                <select className="FilterSort_Filter_FilterContentSelect"
                                    value={this.state.FilterContentSelect}
                                    onChange={((e)=>{this.setState({FilterContentSelect: e.target.value},()=>{this.props.FilterAndOrderData(this.GenerateFilter(), this.GenerateOrder())})}).bind(this)}
                                >
                                    <option>Equal to</option>
                                    <option>Contains</option>
                                </select>
                                <input type="text" className="FilterSort_Filter_FilterContentText"
                                    value={this.state.FilterContentText}
                                    onChange={((e)=>{this.setState({FilterContentText: e.target.value},()=>{this.props.FilterAndOrderData(this.GenerateFilter(), this.GenerateOrder())})}).bind(this)}
                                ></input>
                            </div>
                            <div className="FilterSort_Filter_FilterCompletedContainer">
                                <label className="FilterSort_Filter_FilterCompletedLabel">Completed</label>
                                <label className="FilterSort_Filter_FilterCompletedLabel">Equal to</label>
                                <select className="FilterSort_Filter_FilterCompletedSelect"
                                    value={this.state.SortContentSelect}
                                    onChange={((e)=>{this.setState({SortContentSelect: e.target.value},()=>{this.props.FilterAndOrderData(this.GenerateFilter(), this.GenerateOrder())})}).bind(this)}
                                >
                                    <option>No filter</option>
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            </div>
                        </div>
                        <div className="FilterSort_Sort">
                            <label className="FilterSort_Sort_Label">Sort</label>
                            <div className="FilterSort_Sort_SortContentContainer">
                                <label className="FilterSort_Sort_SortContentLabel">Content: </label>
                                <select className="FilterSort_Sort_SortContentSelect"
                                    value={this.state.SortContentSelect}
                                    onChange={((e)=>{this.setState({SortContentSelect: e.target.value},()=>{this.props.FilterAndOrderData(this.GenerateFilter(), this.GenerateOrder())})}).bind(this)}
                                >
                                    <option>No Sort</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                            <div className="FilterSort_Sort_SortCompletedContainer">
                                <label className="FilterSort_Sort_SortCompletedLabel">Completed: </label>
                                <select className="FilterSort_Sort_SortCompletedSelect"
                                    value={this.state.SortCompletedSelect}
                                    onChange={((e)=>{this.setState({SortCompletedSelect: e.target.value},()=>{this.props.FilterAndOrderData(this.GenerateFilter(), this.GenerateOrder())})}).bind(this)}
                                >
                                    <option>No Sort</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                            <div className="FilterSort_Sort_SortAgeContainer">
                                <label className="FilterSort_Sort_SortAgeLabel">Age: </label>
                                <select className="FilterSort_Sort_SortAgeSelect"
                                    value={this.state.SortAgeSelect}
                                    onChange={((e)=>{this.setState({SortAgeSelect: e.target.value},()=>{this.props.FilterAndOrderData(this.GenerateFilter(), this.GenerateOrder())})}).bind(this)}
                                >
                                    <option>No Sort</option>
                                    <option>Ascending</option>
                                    <option>Descending</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    GenerateFilter() {
        let my_filter = {

        }
        if (this.state.FilterContentText !== "") {
            let filter = "";
            if (this.state.FilterContentSelect === "Equal to") {
                filter = Filter.FilterTypes.equal_to;
            }
            else {
                filter = Filter.FilterTypes.contains;
            }
            my_filter.content = {
                filter: filter,
                comparison: this.state.FilterContentText
            }
        }
        if (this.state.FilterCompletedSelect !== "No filter") {
            if (this.state.FilterCompletedSelect === "True") {
                my_filter.completed = {
                    filter: Filter.FilterTypes.equal_to,
                    comparison: true
                }
            }
            else {
                my_filter.completed = {
                    filter: Filter.FilterTypes.equal_to,
                    comparison: false
                }
            }
        }

        return my_filter;
    }
    GenerateOrder() {
        let my_order = {

        }
        if (this.state.SortContentSelect !== "No Sort") {
            if (this.state.SortContentSelect === "Ascending") {
                my_order.content = {
                    direction: Order.DirectionTypes.asc
                }
            }
            else {
                my_order.content = {
                    direction: Order.DirectionTypes.dec
                }
            }
        }
        if (this.state.SortCompletedSelect !== "No Sort") {
            if (this.state.SortCompletedSelect === "Ascending") {
                my_order.completed = {
                    direction: Order.DirectionTypes.asc
                }
            }
            else {
                my_order.completed = {
                    direction: Order.DirectionTypes.dec
                }
            }
        }
        if (this.state.SortAgeSelect !== "No Sort") {
            if (this.state.SortAgeSelect === "Ascending") {
                my_order.age = {
                    direction: Order.DirectionTypes.asc
                }
            }
            else {
                my_order.age = {
                    direction: Order.DirectionTypes.dec
                }
            }
        }
        return my_order;
    }
}