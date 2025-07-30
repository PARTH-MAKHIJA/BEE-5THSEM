//1:CREATE A NEW ELEMENT YSING createElement FUNCTION
//2:Insert require element uing .innerHTML or .innerText
//3:inset new element in parent container using appendchild method or append
let todos=[
    {
    id:123123,
    title:"study at 9 pm"
},
{
    id:1231230009,
    title:"study at 4pm"
}
]
// let todo={
//     id:123123,
//     title:"study at 9 pm"
// }
let todocontainer=document.querySelector(".todocontainer")
function addTodo(todo){
    let li=document.createElement("li");
    li.innerHTML=`<div><input type="checkbox" name=""id="">
                <h1>${todo.title}</h1>
                <div>
                    <button>❌</button>
                    <button>✅</button>
                </div>
            </div>`
            todocontainer.appendChild(li)
}
// addTodo(todo);
function showAllTodos(todos){
    todos.forEach(todo => {
        addTodo(todo)
    });
}
showAllTodos(todos)