// const  {Body } = require("node-fetch");

const textBox = document.querySelector(".home__wrapper__text");
const home__wrapper = document.querySelector(".home__wrapper");
const body = document.querySelector("body");
const skip = document.querySelector(".skipBox");
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const time = String(`${hours} : ${minutes}`);

window.onload = function () {
  windowOnLoad();
};

function windowOnLoad() {
  textBox.innerText = "What Time Is It Now?";
  textBox.classList.add("animation");
  textBox.addEventListener("animationend", windowOnLoad2);
}

function windowOnLoad2() {
  textBox.classList.remove("animation");
  textBox.offsetWidth;
  textBox.innerText = `${time} ?`;
  textBox.classList.add("animation");
  textBox.addEventListener("animationend", windowOnLoad3);
}
function windowOnLoad3() {
  textBox.classList.remove("animation");
  textBox.offsetWidth;
  textBox.innerText = "IT'S DAME TIME";
  textBox.classList.add("animation");
  textBox.addEventListener("animationend", windowOnLoad4);
}
function windowOnLoad4() {
  textBox.remove();
  const bgi = document.createElement("img");
  bgi.crossOrigin = "anonymous";
  bgi.src = "https://wallpapercave.com/wp/wp1868498.png";
  home__wrapper.appendChild(bgi);
  bgi.classList.add("bgiAnimation");
  bgi.addEventListener("animationend", handleGuideText);
  bgi.addEventListener("animationend", handleKeyPress);
}

const handleGuideText = () => {
  const guide = document.createElement("div");
  guide.innerText = "Please press any key or Click skip ";
  home__wrapper.appendChild(guide);
  guide.classList.add("guideText");
};

const handleKeyPress = () => {
  body.addEventListener("keypress", handleLoginLoad);
};

const handleLoginLoad = () => {
  skip.click();
};
