const tapScreen = document.getElementById("tapScreen");
const content = document.getElementById("content");
const music = document.getElementById("music");

tapScreen.addEventListener("click", () => {
  tapScreen.style.display = "none";
  content.classList.add("show");

  // Play music after user interaction
  music.play().catch(() => {});
});
