const todo__list = document.querySelector(".todo__list");
const addformEl = document.querySelector(".todo__form");
const inputForm = document.querySelector(".inputForm");
const editBtn = document.querySelector(".btn--edit");

//Getting Data
const renderTodolist = (todos) => {
  let output = "";
  todos
    .sort((a, b) => b.id - a.id)
    .forEach((todo) => {
      output += `
    <li data-id=${todo.id}><span class="todo-title">${todo.title}</span>
    <button class="btn--edit" id="${todo.id}">Edit</button>
    <button class="btn--delete" id="${todo.id}">Delete</button></li>  
    `;
    });
  todo__list.innerHTML = output;
};

const URL = "http://localhost:3000/todos";

// Get - Read the todolist
// Method: Get
fetch(URL)
  .then((res) => res.json())
  .then((data) => renderTodolist(data));

// Delete btn  &  Edit btn
todo__list.addEventListener("click", (e) => {
  e.preventDefault();
  let delBtn = e.target.className === "btn--delete";
  let editBtn = e.target.className === "btn--edit";

  let id = e.target.parentElement.dataset.id;

  // Delete - Remove the existing todo
  // Method: DELETE
  if (delBtn) {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  //Edit btn - Takes the parent content & moves it to the input field
  if (editBtn) {
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector(".todo-title").textContent;

    inputForm.value = titleContent;
  }
});
// Update - update the existing todo
// Method: PATCH

if (editBtn) {
  editBtn.addEventListener("click", (e) => {
    console.log(editBtn);
    e.preventDefault();
    fetch(`${URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: inputForm.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  });
}

// Create - Insert New Todo
// Mehod: POST
addformEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputForm.value);
  fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        completed: true,
        title: inputForm.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderTodolist(data);
    });
});

/* Resources 
 https://medium.com/@jmartinez729/full-crud-with-javascript-1c3fb77f81f
 https://medium.com/swlh/restful-api-design-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-e37a8416e2a0
*/