const colors = ["Green","Red","rgba(133,122,200)","#f15025","blue","gray","violet","yellow","orange","pink"];
const btn = document.getElementById("btn1")
const color = document.querySelector(".color");
const navbar = document.querySelector('.nav')

btn.addEventListener('click', () =>{
var num = Math.floor(Math.random()*9);
document.body.style.backgroundColor = colors[num];
btn.classList.add('jay');

color.innerHTML = colors[num];
navbar.setAttribute("style", "box-shadow: none;");


})