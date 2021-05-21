const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn1');
const colors = document.querySelector('.color');
const navbar = document.querySelector('.nav');




btn.addEventListener('click', () => {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];

    }
    colors.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    navbar.setAttribute("style", "box-shadow: none;");

})

function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}