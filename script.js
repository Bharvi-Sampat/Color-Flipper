const background = document.querySelector("body");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

const darkColor = function () {
  background.classList.remove("hidden");
  console.log("dark to light");
};

const lightColor = function () {
  background.classList.add("hidden");
  console.log("light to dark");
};

dark.addEventListener("click", darkColor);

light.addEventListener("click", lightColor);
