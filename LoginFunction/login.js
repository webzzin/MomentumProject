const inputForm = document.querySelector("#login-form");
const inputValue = document.querySelector("#username");
const greeting = document.querySelector("#greeting");
const sayHello = document.querySelector("#sayHello");
const deleteButton = document.querySelector(".delete");

const USER_KEY = "userID";
const HIDDEN_CLASS = "hidden";
const savedUserName = localStorage.getItem(USER_KEY);

function greetingUser(){
  const username = localStorage.getItem(USER_KEY);
  inputForm.classList.add(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);
  sayHello.innerText = `WELCOME! ${username}`;
}

function submitLoginForm(event){
  event.preventDefault();
  localStorage.setItem(USER_KEY, inputValue.value);
  greetingUser();
}

function clickDelete(){
  localStorage.removeItem(USER_KEY);
  location.reload();
}


/* main */ 
deleteButton.addEventListener("click", clickDelete);
if(savedUserName===null)
{
  inputForm.classList.remove(HIDDEN_CLASS);
  inputForm.addEventListener("submit", submitLoginForm);
}
else
{ greetingUser(); }
