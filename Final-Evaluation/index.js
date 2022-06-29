const APIs = (() => {
  BASE_URL = "http://localhost:3000/todos";

  const addTasks = (newTask) => {
    return fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });
  };

  const deleteTasks = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    }).then((res) => {
      // console.log(res);
      return res.json();
    });
  };

  // const editTask = () => {
  //   return fetch(`${BASE_URL}/${id}`)
  // }

  const editTasks = (id, newTask) => {
    return fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: newTask,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("update: ", res);
      return res.json();
    });
  };

  const updateTasksStatus = (id, bool) => {
    return fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isCompleted: bool,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("update Status: ", res);
      return res.json();
    });
  };

  const getAllTasks = () => {
    return fetch(BASE_URL).then((res) => {
      return res.json();
    });
  };

  return {
    getAllTasks,
    deleteTasks,
    addTasks,
    editTasks,
    updateTasksStatus,
  };
})();

const Model = (() => {
  //

  class State {
    #tasks;
    #updateDOMOnChange = () => {};
    constructor() {
      this.#tasks = [];
      this.#updateDOMOnChange = () => {};
    }
    get tasks() {
      return this.#tasks;
    }
    set tasks(newTask) {
      this.#tasks = newTask;
      this.#updateDOMOnChange();
    }

    subscribe = (cb) => {
      this.#updateDOMOnChange = cb;
    };
  }

  return {
    State,
  };
})();

const View = (() => {
  //
  const tasksFormEl = document.querySelector(".tasks__form");
  const tasksListEl = document.querySelector(".tasks__list");

  const renderAllTasks = (tasks) => {
    let temp = "";
    if (tasks.length === 0) {
      temp = `<li><span>No Active Tasks</span></li>`
    }
    tasks
      .sort((a, b) => a.isCompleted - b.isCompleted || b.id-a.id)
      .forEach((task) => {
        let lineThrough = task.isCompleted ? 'line-through' : 'none';
        temp += `
        <li><span id="title_${task.id}" style="text-decoration: ${lineThrough}">${task.title}</span>
          <div>
            <input id="edit_${task.id}" style="display: none"/>
            <button class="btn--edit" id="btn_${task.id}">Edit</button>
            <button class="btn--delete" id="${task.id}" style="background-color: #c94c4c">Delete</button>
          </div>
        </li>
        `;
        //add edit button
      });
    tasksListEl.innerHTML = temp;
    // console.log(temp);
  };

  return {
    tasksFormEl,
    tasksListEl,
    renderAllTasks,
  };
})();

const ViewModel = ((Model, View) => {
  //
  const state = new Model.State();

  const addTasks = () => {
    View.tasksFormEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = e.target[0].value;
      const isCompleted = false
      if (title.trim() === "") return;
      const newTask = { title, isCompleted };
      APIs.addTasks(newTask).then((res) => {
        state.tasks = [res, ...state.tasks];
      });
    });
  };

  const updateTasks = () => {
    View.tasksListEl.addEventListener("click", (e) => {
      const { id } = e.target;
      if (e.target.className === "btn--delete") {
        APIs.deleteTasks(id).then((res) => {
          state.tasks = state.tasks.filter((task) => {
            return +task.id !== +id;
          });
        });
      } else if (e.target.className === "btn--edit") {
        // console.log(edit);
        const new_id = id.slice(id.indexOf("btn_") + 4);
        const newEl = document.querySelector(`#edit_${new_id}`);
        const newTitle = document.querySelector(`#title_${new_id}`);

        if (newEl.style.display === "none") {
          newEl.style.display = "";
          newTitle.style.display = "none";
        } 
        else {
          const newTask = newEl.value;
          console.log(newTask);
          if (newTask.trim() === "") {
          } else {
            APIs.editTasks(new_id, newTask).then((res) => {
              state.tasks = state.tasks.filter((task) => {
                if (task.id == new_id) {
                  task.title = newTask;
                }
                return true;
              });
            });
          }
          newEl.style.display = "none";
          newTitle.style.display = "";
        }
      }
      else if (e.target.id === `${id}`) {
        console.log("status");
        const new_id = id.slice(id.indexOf("title_") + 6);
        const newTitle = document.querySelector(`#title_${new_id}`);
        if (newTitle.style.textDecoration != "line-through") {
          APIs.updateTasksStatus(new_id, true).then((res) => {
            state.tasks = state.tasks.filter((task) => {
              if (task.id == new_id) {
                task.isCompleted = true;
              }
              return +task.id !== +id;
            });
            newTitle.style.textDecoration = "line-through";
          });
        } else {
          APIs.updateTasksStatus(new_id, false).then((res) => {
            state.tasks = state.tasks.filter((task) => {
              if (task.id == new_id) {
                task.isCompleted = false;
              }
              return +task.id !== +id;
            });
          });
        }
      }
    });
  };

  const getAllTasks = () => {
    APIs.getAllTasks().then((res) => {
      // console.log(res);
      state.tasks = res;
    });
  };

  const rootRender = () => {
    getAllTasks();
    addTasks();
    updateTasks();
    state.subscribe(() => {
      View.renderAllTasks(state.tasks);
    });
  };

  return {
    rootRender,
  };
})(Model, View);

ViewModel.rootRender();
