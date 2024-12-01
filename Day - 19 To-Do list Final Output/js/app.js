let taskInput = document.getElementById("taskInput");
let taskBtn = document.getElementById("addTaskBtn");
let todoList = document.getElementById("todoList");

// todo items
let todos = [];

// add event listeners
taskBtn.addEventListener("click", function () {
  addTask(taskInput.value);
});

// press enter key 
taskInput.addEventListener('keypress',function(keyObject){
    if(keyObject.key === 'Enter'){
        addTask(taskInput.value);
    }
})

// add task
function addTask(item) {
  if (item == "") {
    alert("Item cannot be blank!");
    return;
  }
  // add item to the array list
  todos.push(item);
  // refresh the list
  renderItem();

  //   save to local storage
   saveToLocalStorage();
  
  // remove the input value
  taskInput.value = "";
}

// remove task
function removeTask(item) {
  // find the array index
  let index = todos.indexOf(item);
  // remove the item from the array
  todos.splice(index, 1);

  // save to local storage
  saveToLocalStorage();

  // refresh the ul
  renderItem();
}

// save to local storage
function saveToLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todos));
}
// local storage get item
function getItems(){

}

// render html
function renderItem() {
  // reset the UL
  todoList.innerHTML = "";

  todos.forEach(function (task) {
    // create li element
    let li = document.createElement("li");
    // push item to the craeted li
    li.innerHTML = `${task}<span onclick="removeTask('${task}')">X</span>`;

    // append the li to the UL
    todoList.appendChild(li);
  });
}

// on pages load 
window.onload = function(){
    let itemsFromLocalStorage = localStorage.getItem('todos');
    if(itemsFromLocalStorage){
    todos = JSON.parse(itemsFromLocalStorage);
    };
    renderItem();
}