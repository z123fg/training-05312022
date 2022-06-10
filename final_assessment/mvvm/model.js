class Model {
    /*
        This variable will represent all data the website needs to store
    */
    static state = {
        content_data: {
            data: [],
            data_filtered_ordered: []
        }
    }
    /*
        This method is set be ViewModel and updates the ui
    */
    static Update = () => {};

    /*
        Returns all of the current data
    */
    static GetData() {
        return Model.state.content_data.data;
    }
    /*
        Returns the filtered and ordered data
    */
    static GetFilteredOrderedData() {
        return Model.state.content_data.data_filtered_ordered
    }

    /*
        Sets the data state and updates the ui
    */
    static SetData(data) {
        Model.state.content_data.data = data;
        Model.Update();
    }

    /*
        Deletes data with a specified id and updates the ui
    */
    static DeleteData(id) {
        Model.state.content_data.data = Model.state.content_data.data.filter(value => {
            return !(value.id === id);
        })
        Model.Update();
    }

    /*
        Updates data with a specified id and updates the ui
    */
    static UpdateData(id, data) {
        for (let i in Model.state.content_data.data) {
            if (Model.state.content_data.data[i].id === id) {
                Object.assign(Model.state.content_data.data[i], data);
            }
        }
        Model.Update();
    }

    /*
        Modifies the filtered data state and filters data based on values specified in the 'Filter' instance
    */
    static FilterData(filter) {
        Model.state.content_data.data_filtered_ordered = Model.state.content_data.data.filter(value => {
            if (!Filter.Compare(value.content, filter.content.comparison, filter.content.filter)) {
                return false;
            }
            if (!Filter.Compare(value.completed, filter.completed.comparison, filter.completed.filter)) {
                return false;
            }
            return true;
        })
    }

    /*
        Modifies the ordered data state and orders the data based on values specified in the 'Order' instance
    */
    static OrderData(order) {
        const min_prio = 0;
        const max_prio = 5;

        for (let i = min_prio; i <= max_prio; i++) {
            if (order.content.priority === i) {
                Model.state.content_data.data_filtered_ordered = Order.OrderSet(Model.state.content_data.data_filtered_ordered, order.content.direction, "content");
            }
            if (order.age.priority === i) {
                Model.state.content_data.data_filtered_ordered = Order.OrderSet(Model.state.content_data.data_filtered_ordered, order.age.direction, "id");
            }
            if (order.completed.priority === i) {
                Model.state.content_data.data_filtered_ordered = Order.OrderSet(Model.state.content_data.data_filtered_ordered, order.completed.direction, "completed");
            }
        }
    }

    /*
        This method ensures the filter and order method are called in the correct order.
    */
    static FilterOrderData(filter, order) {
        Model.FilterData(new Filter(filter));
        Model.OrderData(new Order(order));
    }
}

/*
    This class represents a filter to search for specific items.
*/
class Filter {
    /*
        Example argument: {
            content: {
                filter: Filter.FilterTypes.contains,
                comparison: "task"
            }
        }
    */
    constructor(filter) {
        if (filter.content !== undefined) {
            this.content = {
                filter: filter.content.filter,
                comparison: filter.content.comparison
            }
        }
        if (filter.completed !== undefined) {
            this.completed = {
                filter: filter.completed.filter,
                comparison: filter.completed.comparison
            }
        }
    }

    /*
        This represents all possible filter types. This is so there is no slight errors in filter type strings
    */
    static FilterTypes = {
        contains: "contains",
        equal_to: "equal_to",
        less_than: "less_than",
        less_than_equal_to: "less_than_equal_to",
        greater_than: "greater_than",
        greater_than_equal_to: "greater_than_equal_to",
        no_filter: "no_filter"
    }

    /*
        This method will return a boolean representing whether two different values are true when compared with a filter type
    */
    static Compare(value, comparison, filter_type) {
        switch(filter_type) {
            case Filter.FilterTypes.contains:
                return value.includes(comparison);
            case Filter.FilterTypes.equal_to:
                return value === comparison;
            case Filter.FilterTypes.less_than:
                return value < comparison;
            case Filter.FilterTypes.less_than_equal_to:
                return value <= comparison;
            case Filter.FilterTypes.greater_than:
                return value > comparison;
            case Filter.FilterTypes.greater_than_equal_to:
                return value >= comparison;
            case Filter.FilterTypes.no_filter:
                return true;
            default:
                return true;
        }
    }

    /*
        These values represent default filter values
    */
    content = {
        filter: Filter.FilterTypes.no_filter,
        comparison: ""
    }
    completed = {
        filter: Filter.FilterTypes.no_filter,
        comparison: true
    }
}

/*
    This class represents an order to sort items using a priority system
*/
class Order {
    /*
        Example argument: {
            completed: {
                direction: Order.DirectionTypes.asc
            }
            content: {
                direction: Order.DirectionTypes.dec
            }
        }
    */
    constructor(order) {
        if (order.completed !== undefined) {
            this.completed = {
                direction: order.completed.direction,
                priority: 5
            }
        }
        if (order.content !== undefined) {
            this.content = {
                direction:order.content.direction,
                priority: 4
            }
        }
        if (order.age !== undefined) {
            this.age = {
                direction: order.age.direction,
                priority: 3
            }
        }
    }

    /*
        This variable represents all possible direction types in this application
    */
    static DirectionTypes = {
        asc: "asc",
        dec: "dec"
    }

    /*
        Orders an array of objects using one of its keys and a direction
    */
    static OrderSet(set, direction, key) {
        let set_clone = [...set];
        if (direction === Order.DirectionTypes.asc) {
            return set_clone.sort(function(a, b)
            {
                if(a[key] < b[key]) { return -1; }
                if(a[key] > b[key]) { return 1; }
                return 0;
            });           
        }
        else {
            return set_clone.sort(function(a, b)
            {
                if(a[key] > b[key]) { return -1; }
                if(a[key] < b[key]) { return 1; }
                return 0;
            });   
        }
    }

    /*
        These values represent default sorting options
    */
    content = {
        direction: Order.DirectionTypes.asc,
        priority: 0
    }
    age = {
        direction: Order.DirectionTypes.dec,
        priority: 1
    }
    completed = {
        direction: Order.DirectionTypes.asc,
        priority: 2
    }
}