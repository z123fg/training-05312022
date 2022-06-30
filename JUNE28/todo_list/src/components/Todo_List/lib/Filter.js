export default class Filter {
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