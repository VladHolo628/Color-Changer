const COLORS = ["tomato", "green", "blueviolet", "pink", "blue", "grey"];

const colorsBox = document.querySelector(".colors");
const button = document.querySelector(".btn");

COLORS.forEach((color) => {
  const elem = document.createElement("div");
  elem.classList.add("color");
  elem.style.backgroundColor = color;
  colorsBox.append(elem);
});

colorsBox.addEventListener("click", (e) => {
  button.style.backgroundColor = e.target.style.backgroundColor;
});

button.addEventListener("click", (e) => {
  document.body.style.backgroundColor = e.target.style.backgroundColor;
});
