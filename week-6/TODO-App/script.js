let inputValue = document.getElementById("todo-input");
let addButton = document.getElementById("add-btn");

let todocontainer = document.getElementById("todo-list");
addButton.addEventListener("click", () => {
  let value = inputValue.value;

  const newTodo = document.createElement("li");
  newTodo.innerText = value;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  newTodo.appendChild(deleteButton);

  deleteButton.addEventListener('click',()=>{
    newTodo.remove();
  })

  todocontainer.appendChild(newTodo);
  inputValue.value = "";
});
 