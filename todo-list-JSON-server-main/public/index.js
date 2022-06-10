const url = "http://localhost:3000/todos"
const ul = document.getElementById("result")
const input = document.getElementById('task-box')
const deleteBtn = document.getElementById('delete-btn')
const taskBox = document.getElementById('task-box')
const addBtn = document.getElementById('add-btn')

addBtn.addEventListener('click' , addTask )


fetch(url)
.then(res => res.json())
.then( json =>{
    json.map((data)=>{
        createTask(data)
    })
})



function createTask(task){
    
    let li = document.createElement('li')
    li.innerHTML = `
    <li id=${`li-${task.id}`}>
    <input type="checkbox" id=${`checkbox-${task.id}`} onClick="strikethrough(${task.id})"/> 
    <p id=${`p-${task.id}`}>${task.todo}</p>
    <div. class="button-container">
    <button class="edit-btn" onClick="toggleEdit(${task.id})">edit</button>
    <button class="delet-btn" onClick="deleteTask(${task.id})">delete</button>
    </div>
</li>
    `
    if(task.completed){
        li.classList.add('strike')
    }
    ul.append(li)
}

async function deleteTask(id){
    fetch(`http://localhost:3000/todos/${id}`, 
    {method: "DELETE",headers:{'Content-type': 'application/json'}})
}

function addTask(){
    
    console.log(input.value)
    fetch(url , {
        method:"POST",
        headers:{
            "Content-type": 'application/json'
        },
        body: JSON.stringify({
            "todo": input.value,
            "completed": false
        })
    })

}

function toggleEdit(id){
    const newText = prompt('what would you like the change the task to?')
    console.log(newText)
    fetch(`http://localhost:3000/todos/${id}` , {
        method: "PATCH",
        headers:{
            "Content-type": "application/json"

        },
        body: JSON.stringify({
            
            todo: newText
            
        })
    })

}
function strikethrough(id){
    
    event.preventDefault()
    var checkbox = document.getElementById(`checkbox-${id}`)
    console.log(checkbox.checked)
    let li = document.getElementById(`li-${id}`)

    fetch(`http://localhost:3000/todos/${id}` , {
        method: "PATCH",
        headers:{
            "Content-type": "application/json"

        },
        body: JSON.stringify({
            
            completed: checkbox.checked
        })
        
    }).then(res =>{
        console.log(res)
    })


}

