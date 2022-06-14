const View = (() => {
  const formEl = document.querySelector(".todo__form");
  const todoListEl = document.querySelector(".todo__list");
  const renderTodolist = (todos) => {
    let template = "";
    todos
      .sort((a, b) => b.id - a.id)
      .forEach((todo) => {
        template += `
              <li><span id="span${todo.id}">${todo.content}</span>
              <form class="todo__form" id="todo__form${todo.id}">
                <input class ="todo__update" id="todo__update${todo.id}" />
                <button class="btn--edit" id="${todo.id}"><div class="icon">${EDITICON}</div></button>
                <button class="btn--delete" id="${todo.id}"><div class="icon">${DELETEICON}</div></button></li>
              </form>
          `;
      });
    todoListEl.innerHTML = template;
  };
  return {
    formEl,
    renderTodolist,
    todoListEl,
  };
})();
