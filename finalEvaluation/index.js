const EDITICON = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>';
const DELETEICON = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';

const APIs = (() => {
    const URL = "http://localhost:3000/todos";

    const addTodo = (newTodos) => {
        console.log(newTodos)
        return fetch(URL, {
            method: "POST",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    }

    const deleteTodo = (id) => {
        return fetch(`${URL}/${id}`, {
            method: "DELETE"
        }).then((res) => {
            return res.json();
        })
    };

    const modifyTodo = (id, newTodos) => {
        return fetch(`${URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    }

    const completeTodo = (id, newTodos) => {
        return fetch(`${URL}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(newTodos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        })
    }

    const getTodos = () => {
        return fetch(`${URL}`).then((res) => {
            return res.json();
        })
    }

    return {
        getTodos,
        deleteTodo,
        addTodo,
        modifyTodo,
        completeTodo
    }
})()

const Model = (() => {
    class State {
        #todos;
        #onChangeCb;
        constructor() {
            this.#todos = [];
            this.#onChangeCb = () => { }
        }
        get todos() {
            return this.#todos
        }
        set todos(newTodos) {
            this.#todos = newTodos
            this.#onChangeCb();
        }

        subscirbe = (cb) => {
            this.#onChangeCb = cb;
        }
    }
    return {
        State
    }

})();

const View = (() => {
    const formEl = document.querySelector(".todo__form");
    const formFilter = document.querySelector('.todo__form--filter');
    const todoListElActive = document.querySelector(".todo_list--active");
    const todoListElNoActive = document.querySelector(".todo_list--noactive");
    const renderTodolist = (todos) => {
        // get the incomplete items
        let templateActive = "";
        const active = todos.filter((e) => !e.complete && !e.noshow);
        active.sort((a, b) => b.id - a.id).forEach((todo) => {
            templateActive += `
                <li>
                    <div class="todo__content" id='content${todo.id}'>
                        <span data-id=${todo.id} >
                        ${todo.content}
                        </span>
                    </div>
                    <div class="todo__form">
                    <button class="btn--modify" data-id="${todo.id}">
                    ${EDITICON}
                    </button>
                    <button class="btn--delete" data-id="${todo.id}">
                    ${DELETEICON}
                    </button>
                    </div>
                </li>
            `
        })

        if(active.length === 0){
            todoListElActive.innerHTML = "<l1><span class='span__noactive'>No active task</span></li>";
        }else{
            todoListElActive.innerHTML = templateActive;
        }

        // get complete items
        let templateInActive = "";
        const inactive = todos.filter((e) => e.complete && !e.noshow);
        inactive.sort((a, b) => b.id - a.id).forEach((todo) => {
            templateInActive += `
                <li>
                    <div class="todo__content" id='content${todo.id}'>
                        <span data-id=${todo.id} class="todo__content-complete"}>
                        ${todo.content}
                        </span>
                    </div>
                    <button class="btn--delete" data-id="${todo.id}">
                    ${DELETEICON}
                    </button>
                </li>
            `
        })
        todoListElNoActive.innerHTML = templateInActive;
    }
    return {
        formEl,
        formFilter,
        renderTodolist,
        todoListElActive,
        todoListElNoActive
    }
})();


const ViewModel = ((Model, View) => {
    const state = new Model.State();

    const addTodo = () => {
        View.formEl.addEventListener("submit", (event) => {
            event.preventDefault();
            const content = event.target[0].value;
            if (content.trim() === "") return;
            const newTodo = { content, complete: false }
            APIs.addTodo(newTodo).then(res => {
                state.todos = [res, ...state.todos];//anti-pattern
            })

        })
    }

    const filterTode = () => {
        const currState = state;
        View.formFilter.addEventListener('submit', (event) => {
            console.log(currState.todos)
            event.preventDefault();
            const content = event.target[0].value;

            state.todos = state.todos.map((todo) => {
                if(todo.content.includes(content.trim())){
                    todo.noshow = false;
                }else{
                    todo.noshow = true;
                }
                return todo
            })

        })
    }

    const deleteTodo = () => {
        const operation = (event) => {
            const dataId = event.target.getAttribute('data-id')
            if (event.target.className === "btn--delete") {
                APIs.deleteTodo(dataId).then(res => {
                    console.log("Res", res);
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +dataId
                    });
                });
            }
        };
        View.todoListElActive.addEventListener("click", operation);
        View.todoListElNoActive.addEventListener("click", operation);
    }

    const modifyTodo = () => {
        View.todoListElActive.addEventListener("click", (event) => {
            console.log(event.currentTarget, event.target)
            const dataId = event.target.getAttribute('data-id')
            const content = event.currentTarget.querySelector("#content" + dataId);
            
            if (event.target.className === "btn--modify") {
                // change the span to input by clicking modify button
                if (content.querySelector('span')) {
                    content.innerHTML = `<input type='text' value='${content.querySelector('span').textContent.trim()}'></input>`;
                } else {
                    const newContent = content.querySelector('input').value;
                    if (newContent.trim() === "") return;
                    content.innerHTML = `<span data-id=${dataId}>${newContent}</span>`;
                    APIs.modifyTodo(dataId, {content: newContent, complete: false})
                    .then(res => {
                        console.log("res", res)
                        state.todos = state.todos.filter((todo) => {
                            return +todo.id !== +dataId
                        });
                        state.todos = [res, ...state.todos];
                    })
                }
            }

            // complete a item
            if(event.target.tagName.toLowerCase() === 'span') {
                APIs.completeTodo(dataId, {complete: true})
                .then(res => {
                    console.log("res", res)
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +dataId
                    });
                    state.todos = [res, ...state.todos];
                })
            }
        })


        // incomplete a item
        View.todoListElNoActive.addEventListener('click', (event) => {
            const dataId = event.target.getAttribute('data-id')
            if(event.target.tagName.toLowerCase() === 'span') {
                APIs.completeTodo(dataId, {complete: false})
                .then(res => {
                    console.log("res", res)
                    state.todos = state.todos.filter((todo) => {
                        return +todo.id !== +dataId
                    });
                    state.todos = [res, ...state.todos];
                })
            }
        })
    }

    const getTodos = () => {
        APIs.getTodos().then(res => {
            state.todos = res;
        })
    }

    const bootstrap = () => {
        addTodo();
        deleteTodo();
        getTodos();
        modifyTodo();
        filterTode();
        state.subscirbe(() => {
            View.renderTodolist(state.todos)
        });
    }
    return {
        bootstrap
    }
})(Model, View);

ViewModel.bootstrap();

