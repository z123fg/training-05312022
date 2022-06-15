const APIs = (() => {
	const URL = 'http://localhost:3000/todos';

	const getTodos = () => {
		return fetch(URL).then((res) => {
			return res.json();
		});
	};

	const addTodo = (newTodos) => {
		return fetch(URL, {
			method: 'POST',
			body: JSON.stringify(newTodos),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			return res.json();
		});
	};

	const deleteTodo = (id) => {
		return fetch(`${URL}/${id}`, {
			method: 'DELETE',
		}).then((res) => {
			return res.json();
		});
	};

	const editTodo = (newTodos, check, id) => {
		return fetch(`${URL}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				content: newTodos,
				check: check,
				id: id,
			}),
		}).then((res) => {
			return res.json();
		});
	};

	const updateTodo = (newTodos, id, check) => {
		return fetch(`${URL}/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(newTodos),
		}).then((res) => {
			return res.json();
		});
	};

	return {
		getTodos,
		addTodo,
		deleteTodo,
		editTodo,
		updateTodo,
	};
})();

const Model = (() => {
	class State {
		#todos;
		#onChangeCb;
		constructor() {
			this.#todos = [];
			this.#onChangeCb = () => {};
		}
		get todos() {
			return this.#todos;
		}
		set todos(newTodos) {
			this.#todos = newTodos;
			this.#onChangeCb();
		}

		subcribe = (cb) => {
			this.#onChangeCb = cb;
		};
	}
	return {
		State,
	};
})();

const View = (() => {
	const formEl = document.querySelector('.todo__form');
	const List = document.querySelector('.todo__list-container');
	const todoListEl = document.querySelector('.todo__list');
	const completedListEl = document.getElementById('completed');
	const input = document.querySelector('.todo__form-input');

	const renderTodoList = (todos) => {
		let template = '';
		let completedTemplate = '';
		todos
			.sort((a, b) => b.id - a.id)
			.forEach((todo) => {
				if (todo.check) {
					completedTemplate += `<li id='${todo.id}'>
				<span class='editable' id='completed' contenteditable='false'>${todo.content}</span>
				<button class='btn--edit' id='${todo.id}' style="visibility:hidden">Edit</button>
				<button class='btn--delete' id='${todo.id}'>Delete</button>
				</li>`;
					completedListEl.innerHTML = completedTemplate;
				} else {
					template += `<li id='${todo.id}'>
				<span class='editable' id='active' contenteditable='false'>${todo.content}</span>
				<button class='btn--edit' id='${todo.id}'>Edit</button>
				<button class='btn--delete' id='${todo.id}'>Delete</button>
				</li>`;
				}
			});
		completedListEl.innerHTML = completedTemplate;
		todoListEl.innerHTML = template;
		input.value = '';
	};
	return {
		List,
		formEl,
		renderTodoList,
		todoListEl,
		completedListEl,
	};
})();

const ViewModel = ((Model, View) => {
	const state = new Model.State();

	const getTodos = () => {
		APIs.getTodos().then((res) => {
			state.todos = res;
		});
	};

	const addTodo = () => {
		View.formEl.addEventListener('submit', (event) => {
			event.preventDefault();
			const content = event.target[0].value;
			const check = false;
			if (content.trim() === '') return;
			const newTodo = { content, check };
			APIs.addTodo(newTodo).then((res) => {
				state.todos = [res, ...state.todos];
			});
		});
	};

	const deleteTodo = () => {
		View.List.addEventListener('click', (event) => {
			const { id } = event.target;
			if (event.target.className === 'btn--delete') {
				APIs.deleteTodo(id).then((res) => {
					state.todos = state.todos.filter((todo) => {
						return +todo.id !== +id;
					});
				});
			}
		});
	};

	const clearTodo = () => {
		View.formEl.addEventListener('click', (event) => {
			let li = View.completedListEl.firstElementChild;
			while (li) {
				let id = li.getAttribute('id');
				APIs.deleteTodo(id).then((res) => {
					state.todos = state.todos.filter((todo) => {
						return +todo.id !== +id;
					});
				});
				li = li.nextElementSibling;
			}
		});
	};

	const editTodo = () => {
		let save = false;
		View.todoListEl.addEventListener('click', (event) => {
			const { id } = event.target;
			if (event.target.className === 'btn--edit') {
				save = !save;
				const inputField = document.querySelector('.editable');
				inputField.setAttribute('contenteditable', true);
				if (save) {
					APIs.editTodo(inputField.innerText, false, id).then((res) => {
						if (state.todos.id === id) {
							state.todos.content = inputField.innerText;
							save = !save;
						}
					});
				}
			}
		});
	};

	const completedTodo = () => {
		let count = false;
		View.todoListEl.addEventListener('click', (event) => {
			if (count) {
				event.stopPropagation();
			}
			count = !count;
			View.List.addEventListener('click', (event) => {
				const { id } = event.target;
				if (event.target.className === 'editable') {
					if (id === 'active') {
						event.target.style.textDecoration = 'line-through';
						event.target.nextElementSibling.style.visibility = 'hidden';
						View.completedListEl.insertBefore(
							event.target.parentElement,
							View.completedListEl.firstElementChild
						);
						event.target.id = 'completed';

						APIs.editTodo(
							event.target.innerText,
							true,
							event.target.nextElementSibling.id
						).then((res) => {
							if (state.todos.id === id) {
								state.todos.check = true;
							}
						});
					} else {
						event.target.style.textDecoration = 'none';
						event.target.nextElementSibling.style.visibility = 'visible';
						View.todoListEl.insertBefore(
							event.target.parentElement,
							View.todoListEl.firstElementChild
						);
						event.target.id = 'active';

						// var index = state.todos
						// 	.map(function (e) {
						// 		return e.content;
						// 	})
						// 	.indexOf(event.target.innerText);

						APIs.editTodo(
							event.target.innerText,
							false,
							event.target.nextElementSibling.id
						).then((res) => {
							if (state.todos.id === id) {
								state.todos.check = true;
							}
						});
					}
				}
			});
		});
	};

	const bootstrap = () => {
		getTodos();
		addTodo();
		deleteTodo();
		clearTodo();
		editTodo();
		completedTodo();
		state.subcribe(() => {
			View.renderTodoList(state.todos);
		});
	};

	return {
		bootstrap,
	};
})(Model, View);

ViewModel.bootstrap();
