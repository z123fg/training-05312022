class View {
    /*
        This method will take an array of objects as an argument and update the to do list ui to represent the data.
    */

    static amount_loaded = 1;
    static UpdateToDoList(data) {
        if (View.amount_loaded * 2 > data.length) {
            View.amount_loaded = Math.ceil(data.length / 2);
            localStorage.setItem('loaded_data', View.amount_loaded);
        }
        View.NumberOfItems = 0;
        document.getElementById("LIST_CONTAINER").innerHTML = "";

        let add_loadmore_button = false;
        let load_less_button = false;
        if (data.length > 2 && View.amount_loaded * 2 < data.length) {
            add_loadmore_button = true;
        }
        if (View.amount_loaded > 1) {
            load_less_button = true;
        }
        for (let i = 0; i < data.length && i < 2 * View.amount_loaded; i++) {
            View.NumberOfItems++;
            document.getElementById("LIST_CONTAINER").appendChild(this.GenerateListItem(data[i].id, data[i].content, data[i].completed));
        }
        if (add_loadmore_button) {
            const loadmore_button = document.createElement("button");
            loadmore_button.onclick = function() {
                View.amount_loaded++;
                localStorage.setItem('loaded_data', View.amount_loaded);
                View.UpdateToDoList(data);
            }
            loadmore_button.innerHTML = "Load more";
            document.getElementById("LIST_CONTAINER").appendChild(loadmore_button);
        }
        if (load_less_button) {
            const loadless_button = document.createElement("button");
            loadless_button.onclick = function() {
                View.amount_loaded--;
                localStorage.setItem('loaded_data', View.amount_loaded);
                View.UpdateToDoList(data);
            }
            loadless_button.innerHTML = "Load less";
            document.getElementById("LIST_CONTAINER").appendChild(loadless_button);
        }
    }

    /*
        This method is used by UpdateToDoList to generate a list item and its children.
    */
    static GenerateListItem(id, content, completed) {
        const new_element = document.createElement("div");
        new_element.dataset.dataid = id;
        new_element.className = "listitem";
        
        const new_label = document.createElement("label");
        new_label.innerHTML = content;
        if (completed) {
            new_label.className = "label completed";
        }
        else {
            new_label.className = "label";
        }
        
        new_label.onclick = function() {
            ViewModel.ToggleCompletedTask(id);
        }

        const new_input = document.createElement("input");
        new_input.type = "text";
        new_input.value = content;
        new_input.className = "input";

        const new_edit_button = document.createElement("button");
        new_edit_button.innerHTML = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>'
        new_edit_button.className = "edit";
        new_edit_button.onclick = function() {
            if (!new_element.classList.contains("edit")) {
                new_element.classList.add("edit");
            }
        }

        const new_cancel_edit_button = document.createElement("button");
        new_cancel_edit_button.innerHTML = "<svg height='25' width='25'><line x1='0' y1='0' x2='25' y2='25' style='stroke:white;stroke-width:2' /><line x1='0' y1='25' x2='25' y2='0' style='stroke:white;stroke-width:2' /></svg>";
        new_cancel_edit_button.className = "cancel";
        new_cancel_edit_button.onclick = function() {
            new_input.value = new_label.innerHTML;
            if (new_element.classList.contains("edit")) {
                new_element.classList.remove("edit");
            }
        }

        const new_save_button = document.createElement("button");
        new_save_button.innerHTML = "<svg height='25' width='25'><line x1='0' y1='18' x2='10' y2='25' style='stroke:white;stroke-width:2' /><line x1='10' y1='25' x2='25' y2='0' style='stroke:white;stroke-width:2' /></svg>";
        new_save_button.className = "save";
        new_save_button.onclick = function() {
            ViewModel.UpdateItem(id, {content: new_input.value});
            if (new_element.classList.contains("edit")) {
                new_element.classList.remove("edit");
            }
        }
        

        const new_button = document.createElement("button");
        new_button.innerHTML = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';
        new_button.className = "delete";
        new_button.onclick = function() {
            ViewModel.DeleteItem(id);
        }

        new_element.appendChild(new_input);
        new_element.appendChild(new_label);
        new_element.appendChild(new_edit_button);
        new_element.appendChild(new_cancel_edit_button);
        new_element.appendChild(new_save_button);
        new_element.appendChild(new_button);

        return new_element;
    }

    /*
        This method is called on load and initiates all ui events for the page.
    */
    static InitiateEvents() {
        document.getElementById("ADD_INPUT").oninput = function() {
            if (document.getElementById("ADD_INPUT").value.trim() === "") {
                localStorage.removeItem("add_value");
            }
            else {
                localStorage.setItem("add_value", document.getElementById("ADD_INPUT").value);
            }
        }
        document.getElementById("ADD_BUTTON").onclick = function() {
            let content = document.getElementById("ADD_INPUT").value;
            ViewModel.AddItem(content);
            document.getElementById("ADD_INPUT").value = "";
        }
        document.getElementById("FILTER_CONTENT_VALUE").oninput = function() {
            localStorage.setItem("filter_content_value", document.getElementById("FILTER_CONTENT_VALUE").value);
            ViewModel.UpdateFilterSort();
        }
        document.getElementById("FILTER_CONTENT_OPTION").oninput = function() {
            localStorage.setItem("filter_content_option", document.getElementById("FILTER_CONTENT_OPTION").value);
            ViewModel.UpdateFilterSort();
        }
        document.getElementById("FILTER_COMPLETED_VALUE").oninput = function() {
            localStorage.setItem("filter_completed_value", document.getElementById("FILTER_COMPLETED_VALUE").value);
            ViewModel.UpdateFilterSort();
        }
        document.getElementById("SORT_CONTENT").oninput = function() {
            localStorage.setItem("sorting_content", document.getElementById("SORT_CONTENT").value);
            ViewModel.UpdateFilterSort();
        }
        document.getElementById("SORT_AGE").oninput = function() {
            localStorage.setItem("sorting_age", document.getElementById("SORT_AGE").value);
            ViewModel.UpdateFilterSort();
        }
        document.getElementById("SORT_COMPLETED").oninput = function() {
            localStorage.setItem("sorting_completed", document.getElementById("SORT_COMPLETED").value);
            ViewModel.UpdateFilterSort();
        }
        document.getElementById("FILTER_SORT_BUTTON").onclick = function() {
            let ele = document.getElementById("FILTER_SORT_CONTAINER");
            if (ele.style.display === "none") {
                ele.style.display = "flex";
                document.getElementById("FILTER_SORT_BUTTON").innerHTML = "Hide filters and sorting options"
            }
            else {
                ele.style.display = "none";
                document.getElementById("FILTER_SORT_BUTTON").innerHTML = "Display filters and sorting options";
            }
        }
    }

    static LoadFilterOrderAddValues() {
        let selectItemByValue = function(el, vl) {
            for (let i = 0; i < el.options.length; i++) {
                if (el.options[i].innerHTML === vl) {
                    el.selectedIndex = i;
                }
            }
        }

        let loaded_data = localStorage.getItem('loaded_data');
        let add_value = localStorage.getItem('add_value');
        let filter_content_option = localStorage.getItem('filter_content_option');
        let filter_content_value = localStorage.getItem('filter_content_value');
        let filter_completed_value = localStorage.getItem('filter_completed_value');
        let sorting_content = localStorage.getItem('sorting_content');
        let sorting_age = localStorage.getItem('sorting_age');
        let sorting_completed = localStorage.getItem('sorting_completed');

        if (loaded_data) {
            View.amount_loaded = parseInt(loaded_data);
        }
        if (add_value) {
            document.getElementById("ADD_INPUT").value = add_value;
        }
        if (filter_content_option) {
            selectItemByValue(document.getElementById("FILTER_CONTENT_OPTION"), filter_content_option);
        }
        if (filter_content_value) {
            document.getElementById("FILTER_CONTENT_VALUE").value = filter_content_value;
        }
        if (filter_completed_value) {
            selectItemByValue(document.getElementById("FILTER_COMPLETED_VALUE"), filter_completed_value);
        }
        if (sorting_content) {
            selectItemByValue(document.getElementById("SORT_CONTENT"), sorting_content);
        }
        if (sorting_age) {
            selectItemByValue(document.getElementById("SORT_AGE"), sorting_age);
        }
        if (sorting_completed) {
            selectItemByValue(document.getElementById("SORT_COMPLETED"), sorting_completed);
        }
    }
}
View.InitiateEvents();
View.LoadFilterOrderAddValues();