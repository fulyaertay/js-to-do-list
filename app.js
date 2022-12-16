
//Add task on the form
const form=document.querySelector(".add-form");
const todoList=document.querySelector(".todos");

function createTemplate(task){
    let html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="fa fa-trash-alt delete"></i>
    </li>
    
    `
    todoList.innerHTML+=html;
}

//Add task when submit is triggered
form.addEventListener('submit',e=>{
    e.preventDefault();

    const todo=form.add.value.trim();
    if (todo.length){
        createTemplate(todo);
        form.reset();
    }
})

//Delete task when delete button is triggerd
todoList.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})