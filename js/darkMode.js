const bodyElement = document.querySelector("body");
const themeModeBtn = document.getElementById("dark-mode-toggle");
const sunIcon = document.querySelector(`.sun-icon`);
const moonIcon = document.querySelector(`.moon-icon`);

window.addEventListener("load", () => {
  const themeMode = localStorage.getItem("themeMode");
  if (themeMode === "dark" && !bodyElement.classList.contains("dark")) {
    bodyElement.classList.add("dark");
    moonIcon.classList.remove("show");
    sunIcon.classList.add("show");
}
});

themeModeBtn.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark")) {
    localStorage.removeItem("themeMode");
    bodyElement.classList.remove("dark");
    moonIcon.classList.add("show");
    if (sunIcon.classList.contains("show")) sunIcon.classList.remove("show");
  } else {
    localStorage.setItem("themeMode", "dark");
    bodyElement.classList.add("dark");
    sunIcon.classList.add("show");
    if (moonIcon.classList.contains("show")) moonIcon.classList.remove("show");
  }
});

