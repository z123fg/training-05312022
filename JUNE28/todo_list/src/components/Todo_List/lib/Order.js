export default class Order {
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