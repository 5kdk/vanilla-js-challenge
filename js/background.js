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
