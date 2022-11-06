/* const image = ["0.png", "1.png", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const body = document.querySelector("body");
const bgImage = document.createElement("img");
bgImage.classList.add("bgimg");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); */

const bgColors = [
  "#55967e",
  "#a8dba8",
  "#f26d5b",
  "#fcbe32",
  "#263959",
  "#a5dff9",
  "#fab1ce",
  "#6d819c",
  "#e85a71",
  "#4ea1d3",
  "#454552",
];
const chosenBg = bgColors[Math.floor(Math.random() * bgColors.length)];
document.body.style.backgroundColor = chosenBg;
