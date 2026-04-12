const videoBgElement = document.querySelector(".hero__background");
const toggleVideoBtnElement = document.querySelector(".hero__btn");
const playElement = document.getElementById("play");
const pauseElement = document.getElementById("pause");

toggleVideoBtnElement.addEventListener("click", () => {
  if (videoBgElement.paused) videoBgElement.play();
  else videoBgElement.pause();
});

videoBgElement.addEventListener("play", () => {
  updateIcon(playElement, pauseElement);
});

videoBgElement.addEventListener("pause", () => {
  updateIcon(playElement, pauseElement, false);
});

function updateIcon(hideElement, showElement, isActionActive = true) {
  if (isActionActive) {
    hideElement.classList.add("hidden");
    showElement.classList.remove("hidden");
  } else {
    hideElement.classList.remove("hidden");
    showElement.classList.add("hidden");
  }
}
