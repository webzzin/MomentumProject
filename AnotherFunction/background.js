const images = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg",
  "4.jpg","5.jpg", "6.jpg"
];

const rand = Math.floor(Math.random()*images.length);
const todaysImg = images[rand];

const bgImg=document.createElement("style");
bgImg.innerText = `body {
  background-image: url('img/${todaysImg}');
  background-size: 100vw 100vh;
}`

document.head.appendChild(bgImg);