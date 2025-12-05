function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.body;
const newColor = document.querySelector(".color");

btn.addEventListener("click", (event) => {
  const number = getRandomHexColor();
  body.style.backgroundColor = number;
  newColor.textContent = number;
})



