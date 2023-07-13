const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todoThings = [];
const TODO_KEY = "todoThings";

function saveTodoThings(){
  localStorage.setItem(TODO_KEY, JSON.stringify(todoThings))
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleSubmit(event){
  event.preventDefault();

  const newTodo = todoInput.value;
  paintTodo(newTodo);

  todoThings.push(newTodo);
  saveTodoThings(newTodo);
  
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleSubmit);

const saveToDo = localStorage.getItem(TODO_KEY);
if(saveToDo){
  const parsedTodos = JSON.parse(saveToDo);
  todoThings = parsedTodos;
  parsedTodos.forEach(paintTodo);
}

