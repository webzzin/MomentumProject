const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todoArr = [];
const TODO_KEY = "todoList";

function saveTodo(){
  localStorage.setItem(TODO_KEY, JSON.stringify(todoArr));
}

function deleteTodo(event){
  const li = event.target.parentElement;
  const deleteId = Number(li.id);
  todoArr = todoArr.filter((v)=>v.id!==deleteId);
  saveTodo();
  li.remove();
}

function paintTodo(newTodoObj){
  const li = document.createElement("li");
  li.id=newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  
  const button = document.createElement("button");
  button.innerText = '❌';
  button.addEventListener("click", deleteTodo);
  
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleSubmit(event){
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todoArr.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo(); 
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodoList = localStorage.getItem(TODO_KEY);
if(savedTodoList !== null){
  const parsedTodo = JSON.parse(savedTodoList);
  todoArr = parsedTodo;
  todoArr.forEach(paintTodo);
}