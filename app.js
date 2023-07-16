/* Clock */
const clock = document.querySelector("#clock");

function setClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,'0');
  const minutes = String(date.getMinutes()).padStart(2,'0');
  clock.innerText = `${hours}:${minutes}`;
}

setClock();
setInterval(setClock, 1000);

/*login-form*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingButton = document.querySelector("#greeting+button")

const USER_KEY = "username";
const HIDDEN_CLASS = "hidden";
const savedUser = localStorage.getItem(USER_KEY);

function deleteUser(){
  localStorage.removeItem(USER_KEY);
  greetingButton.classList.add(HIDDEN_CLASS);
  location.reload();
}

function sayHello(){
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.classList.remove(HIDDEN_CLASS);
  greetingButton.classList.remove(HIDDEN_CLASS);
  
  greetingButton.addEventListener("click", deleteUser);
  const username = localStorage.getItem(USER_KEY);
  greeting.innerText = `HAVE A GOOD DAY, ${username}!`;
}

function submitLogin(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USER_KEY, username);
  sayHello();
}

if(savedUser){
  sayHello();
} else {
  loginForm.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", submitLogin);



/* main focus function */

const focusForm = document.querySelector("#focus");
const focusInput = document.querySelector("#focus input");
const focusDisplay = document.querySelector("#focusDisplay");
const focusingToday = document.querySelector("#focusingToday");
const focusingTodayDelete = document.querySelector("#focusingTodayDelete");

const FOCUS_KEY = "focus-on";
const focusOn = localStorage.getItem(FOCUS_KEY);

function paintFocus(){
  const focusOn = localStorage.getItem(FOCUS_KEY);
  focusingToday.innerText=`${focusOn}`;
  focusForm.classList.add(HIDDEN_CLASS);
  focusDisplay.classList.remove(HIDDEN_CLASS);
}

function submitFocus(event){
  event.preventDefault();
  const today = focusInput.value;
  localStorage.setItem(FOCUS_KEY, today);
  focusInput.value="";
  paintFocus();
}

function praise(){
  console.log("GOODJOB");
}

function deleteFocus(){
  localStorage.removeItem(FOCUS_KEY);
  location.reload();
}

if(focusOn){
  paintFocus();
} else{
  focusForm.classList.remove(HIDDEN_CLASS);
}

focusForm.addEventListener("submit", submitFocus);
focusingTodayDelete.addEventListener("click", deleteFocus);

/* backgroundImage */
const bgImg = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg",
  "4.jpg", "5.jpg", "6.jpg", "7.jpg"
];
const randomNum = Math.floor(bgImg.length * Math.random());
const todayImg = bgImg[randomNum];
const backgroundImg = document.createElement("style");
backgroundImg.innerText = `body {
  background-image: url('./backgroundImg/${todayImg}');
  background-size: 100vw 100vh;
}`;
document.head.appendChild(backgroundImg);