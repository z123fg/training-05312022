class ViewModel {
    /*
        This method is called on load and sets the ui update method in the Model class
    */
    static SetUpdate() {
        /*
            The Model Update method is created here.
        */
        Model.Update = () => {
            let filter_content_option = document.getElementById("FILTER_CONTENT_OPTION").value;
            let filter_content_value = document.getElementById("FILTER_CONTENT_VALUE").value;
            let filter_completed_value = document.getElementById("FILTER_COMPLETED_VALUE").value;

            let sort_content = document.getElementById("SORT_CONTENT").value;
            let sort_age = document.getElementById("SORT_AGE").value;
            let sort_completed = document.getElementById("SORT_COMPLETED").value;


            let my_filter = {

            }
            let my_order = {

            }
            
            if (filter_content_value.trim() !== "") {
                let filter_content_filter = "";
                if (filter_content_option === "Equal to") {
                    filter_content_filter = Filter.FilterTypes.equal_to;
                }
                else {
                    filter_content_filter = Filter.FilterTypes.contains;
                }

                my_filter.content = {
                    filter: filter_content_filter,
                    comparison: filter_content_value
                }
            }
            if (filter_completed_value !== "No Filter") {
                if (filter_completed_value === "True") {
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

            if (sort_content !== "No Sort") {
                if (sort_content === "Ascending") {
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
            if (sort_age !== "No Sort") {
                if (sort_age === "Ascending") {
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
            if (sort_completed !== "No Sort") {
                if (sort_completed === "Ascending") {
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

            
            Model.FilterOrderData(my_filter, my_order);
            View.UpdateToDoList(Model.state.content_data.data_filtered_ordered);
        }
    }

    /*
        This method adds an item to the database and updates the ui.
    */
    static AddItem(content) {
        if (content.trim() === "") {
            return;
        }
        let data_to_add = {
            content: content,
            completed: false
        }
        APIs.Add(data_to_add).then((res) => {
            Model.SetData([res, ...Model.GetData()]);
            console.log([res, ...Model.GetData()])
        });
    }

    /*
        This method deletes an item from the database with a specified id and updates the ui
    */
    static DeleteItem(id) {
        APIs.Delete(id).then((res) => {
            Model.DeleteData(id);
        });
    }

    /*
        This method returns all items in the database and updates the ui
    */
    static GetItems() {
        APIs.Get().then((res) => {
            Model.SetData(res);
        });
    }

    /*
        This method updates an item in the database with a specified id and updates the ui
    */
    static UpdateItem(id, data) {
        APIs.Update(id, data).then((res) => {
            Model.UpdateData(id, res);
        })
    }

    /*
        This method toggles a tasks completion status in the database and updates the ui
    */
    static ToggleCompletedTask(id) {
        for (let i = 0; i < Model.state.content_data.data.length; i++) {
            if (Model.state.content_data.data[i].id === id) {
                let new_completed = !Model.state.content_data.data[i].completed
                let updated_data = {completed: new_completed};
                APIs.Update(id, updated_data).then((res) => {
                    Model.UpdateData(id, res)
                })
            }
        }
    }

    /*
        This method refreshes the ui to update filter and sort options
    */
    static UpdateFilterSort() {
        Model.Update();
    }
}
ViewModel.SetUpdate();
ViewModel.GetItems();