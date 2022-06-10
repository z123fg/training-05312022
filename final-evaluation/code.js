const APIs = (() => {
  const URL = "http://localhost:3000/tasklist";

  const addTaskList = (newTaskList) => {
    return fetch(URL, {
      /// adds item to list
      method: "POST",
      body: JSON.stringify(newTaskList),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const editTaskList = (id, newTaskList) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newTaskList),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const deleteTaskList = (id) => {
    return fetch(`${URL}/${id}`, {
      /// fetches url/ id specific to list item/ deletes
      method: "DELETE",
    }).then((res) => {
      return res.json();
    });
  };

  const getTaskList = () => {
    return fetch(`${URL}`).then((res) => {
      /// updates current state
      return res.json();
    });
  };

  return {
    getTaskList: getTaskList, //// gets update data
    deleteTaskList: deleteTaskList, //// deletes data
    addTaskList: addTaskList, //// adds data to list
    editTaskList: editTaskList,
  };
})();

// 1st build Model
const Model = (() => {
  // Manages the data of an application
  class State {
    // Class State = handles state changes/ Like the engine
    #taskList; // Private instance field for todo list
    #onChangeCallBack; // Private instance field to change tasklist
    constructor() {
      // handles object properties
      this.#taskList = []; //array that the contains tasklist
      console.log(this.#taskList);
      this.#onChangeCallBack = () => {}; // empty arrow function to start
    }
    get taskList() {
      // Get Method - returns values from user ( tasklist)
      console.log(this.#taskList);
      return this.#taskList;
    }
    set taskList(newTaskList) {
      // Set Method - adds tasklist/ updates callback
      this.#taskList = newTaskList;
      this.#onChangeCallBack();
      console.log(this.#onChangeCallBack());
    }

    subscribe = (callBack) => {
      this.#onChangeCallBack = callBack; // Connected to ViewModel/ state.subscribe below
      console.log(this.#onChangeCallBack);
    };
  }
  return {
    // Returns current state changes
    State,
  };
})();

// A visual representation of the model
const View = (() => {
  // Where the data will be displayed
  const formEl = document.querySelector(".tasklist__form"); /// form element
  const taskListUl = document.querySelector(".task__list"); /// UL element append lis

  const renderTaskList = (taskList) => {
    // renders groceries
    let template = ""; //li template
    taskList // represents item
      .sort((a, b) => b.id - a.id) // compare function a n b/ ids below in delete function
      .forEach((item) => {
        // add class name and item.content and item id to li item
        template += `
                <li><span>${item.content}</span>
                <button class="edit--button" id="${item.id}">Edit</button> 
                <button class="btn--delete" id="${item.id}">Delete</button>
                </li>
            `; //// add edit function to update the text patch or put
      });
    taskListUl.innerHTML = template; // innerhtml template
  };

  return {
    // return values from form, rendertasklistlist, and tasklistListEl(UL element)
    formEl, // Appending button and input later

    renderTaskList: renderTaskList, // for Li element
    taskListUl: taskListUl, // UL Element
  };
})();

// Intergrating View and Model/ Midpoint between the two
const ViewModel = ((Model, View) => {
  const state = new Model.State(); // creates a new state for Model Class

  const addTaskList = () => {
    // Adding tasklist button
    View.formEl.addEventListener("submit", (event) => {
      /// View class. formEl element to create eventlistener
      event.preventDefault();
      const content = event.target[0].value;
      console.log(content); // saving the event data to variable
      if (content.trim() === "") return; // trim clears out white space/ wont allow click
      const newTaskList = { content }; // destructing
      APIs.addTaskList(newTaskList).then((res) => {
        // connects content to add APi
        // console.log("Res", res);
        state.taskList = [res, ...state.taskList]; //anti-pattern/ state.tasklist becomes newtasklist data
      });
    });
  };

  const editTaskList = () => {
    // for deleting tasklist list items
    View.taskListUl.addEventListener("click", (event) => {
      const { id } = event.target.id; // Saves the event target to ID for referencing which element to delete
      if (event.target.className === "edit--button") {
        // checks if classname = btn--delete/ created in view Class

        const span = document.querySelector("span");
        span.innerHTML = " ";
        var newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "text", "submit");
        newInput.value = span.textContent;
        span.append(newInput);
        /// trying to find a way to onclick add an input box to replace the content of the span
        /// then through json-sever have it patch the new content for its body.
        /// Maybe I should add the edit button with the deleteTask
      }

      ///// add additional event here for greying out and slashing line thru box add class with styling
    });
  };

  const deleteTaskList = () => {
    // for deleting tasklist list items
    View.taskListUl.addEventListener("click", (event) => {
      // connected to View class .UL element tasklist__list
      console.log(event.currentTarget, event.target);
      const { id } = event.target; // Saves the event target to ID for referencing which element to delete
      if (event.target.className === "btn--delete") {
        // checks if classname = btn--delete/ created in view Class
        APIs.deleteTaskList(id).then((res) => {
          // connects to delete api/ refrence point is ID
          console.log("Res", res);
          state.taskList = state.taskList.filter((item) => {
            //filters out items if item.id and id from above matches
            return +item.id !== +id; // converts to comparible string/ or use !=/ == double comparison
          });
        });
      }
      ///// add additional event here for greying out and slashing line thru box add class with styling
    });
  };

  const getTaskList = () => {
    // recieves updated changes to state
    APIs.getTaskList().then((res) => {
      // connects to get APi
      state.taskList = res; // updates current tasklist item to response data
    });
  };

  const bootstrap = () => {
    // calls all APi functions
    addTaskList();
    editTaskList();
    deleteTaskList();
    getTaskList();
    state.subscribe(() => {
      //updats callback
      View.renderTaskList(state.taskList);
    });
  };
  return {
    bootstrap, // returns data from all funcions above
  };
})(Model, View);

ViewModel.bootstrap(); //calls viewmodel
