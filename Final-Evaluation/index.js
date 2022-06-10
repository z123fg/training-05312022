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

  const editTask = (id, newTask) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        content: newTask,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("update: ", res);
      return res.json();
    });
  };

  const updateTasksStatus = (id, newTask) => {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isCompleted: flag,
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
      // console.log(res);
      return res.json();
    });
  };

  return {
    getAllTasks,
    deleteTasks,
    addTasks,
    editTask,
    updateTasksStatus,
  };
})();

const Model = (() => {
  //

  class State {
    #tasks;
    // #editedTasks;
    #updateDOMOnChange = () => {};
    constructor() {
      this.#tasks = [];
      // this.#editedTasks = []
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
    tasks
      .sort((a, b) => b.id - a.id)
      .forEach((task) => {
        temp += `
        <li><span id="title_${task.id}">${task.content}</span>
          <input class="todo--edit" id="edit_${task.id}" style="display: none"/>
          <button class="btn--edit" id="btn_${task.id}">Edit</button>
          <button class="btn--delete" id="${task.id}">Delete</button>
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
      if (title.trim() === "") return;
      const newTask = { title };
      APIs.addTasks(newTask).then((res) => {
        console.log(res);
        state.tasks = [res, ...state.tasks];
      });
    });
  };

  const deleteTasks = () => {
    View.tasksListEl.addEventListener("click", (e) => {
      console.log(e.currentTarget, e.target);
      const { id } = e.target;
      if (e.target.className === "btn--delete") {
        APIs.deleteTasks(id).then((res) => {
          console.log(res);
          state.tasks = state.tasks.filter((task) => {
            return +task.id !== +id;
          });
        });
      }
    });
  };

  const getAllTasks = () => {
    APIs.getAllTasks().then((res) => {
      // console.log(res);
      state.tasks = res;
    });
  };

  const editTasks = () => {
    View.tasksListEl.addEventListener("click", (e) => {
        const { id } = e.target
        console.log("event,", e);
        if (e.target.className === "btn--edit") {
            console.log("edit");
            const new_id = id.slice(id.indexOf('btn_') + 4);
            const newContent = document.querySelector(`#edit_${new_id}`);
            const newTitle = document.querySelector(`#title_${new_id}`);

            if(newContent.style.display == 'none') {
                newContent.style.display = '';
                newTitle.style.display = 'none';
            } 
            else {
                const newTask = newContent.value;
                if(newTask.trim() === "") {}
                else {
                    APIs.updateTasksStatus(new_id, newTask).then(res => {
                        state.tasks = state.tasks.filter((task) => {
                            if(task.id == new_id) {
                                task.content = newTask;
                            }
                            return true;
                        });
                    });
                }
                newContent.style.display = "none";
                newTitle.style.display = "";
            }
        }
        else if (e.target.id === `${id}`) {
            console.log("status");
            const new_id = id.slice(id.indexOf('newid_') + 6);
            const newTitle = document.querySelector(`#title_${new_id}`);
            console.log(newTitle)
            if(newTitle.style.textDecoration !== "line-through") {
                APIs.updateTasksStatus(new_id, true).then(res => {
                    state.tasks = state.tasks.filter((task) => {
                        if(task.id == new_id) {
                            task.isCompleted = true;
                        }
                        return +task.id !== +id;
                    });
                    newTitle.style.textDecoration = 'line-through';
                });
            }
            else {
                APIs.updateTasksStatus(new_id, false).then(res => {
                    state.tasks = state.tasks.filter((task) => {
                        if(task.id == new_id) {
                          task.isCompleted = false;
                        }
                        return +task.id !== +id;
                    });

                });
            }
        }
    })
}

  const rootRender = () => {
    getAllTasks();
    addTasks();
    deleteTasks();
    editTasks();
    state.subscribe(() => {
      View.renderAllTasks(state.tasks);
    });
  };

  return {
    rootRender,
  };
})(Model, View);

ViewModel.rootRender();

/**
 * THINGS TO ADD
 *
 * <=== VIEW ===>
 * Scrolling Header
 * Scroll To Top Button
 * Total Complete
 * Total Incomplete
 *
 * extras
 * ? Search filter ? => If have Time
 * If addTask btn is clicked show message = please input to-do task
 * throw alert that warns when deleting a task
 *
 */

/**
 * THINGS TO FIX
 *
 * clear inputs on reload
 */
