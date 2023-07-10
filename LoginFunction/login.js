const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#userName");
const greeting = document.querySelector("#greeting");
const sayHello = document.querySelector("#sayHello");
const deleteButton = document.querySelector("#delete");


const HIDDENCLASS = "hidden";
const USER_KEY = "username";
const savedUsername = localStorage.getItem(USER_KEY);

function loginGreetings(){
  const username = localStorage.getItem(USER_KEY);
  loginForm.classList.add(HIDDENCLASS);
  greeting.classList.remove(HIDDENCLASS);
  sayHello.innerText = `Hello ${username}!`;
}


function handleSubmitLogin(event){
  event.preventDefault();
  localStorage.setItem(USER_KEY,loginInput.value);
  loginGreetings();
}

function handleDelete(){
  console.log("click");
  localStorage.removeItem(USER_KEY);
  location.reload();
}

deleteButton.addEventListener("click", handleDelete);


if(savedUsername === null){
  loginForm.classList.remove(HIDDENCLASS);
  loginForm.addEventListener("submit", handleSubmitLogin);
} else { loginGreetings(savedUsername);}
