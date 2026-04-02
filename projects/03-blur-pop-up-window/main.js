const mainContainer = document.querySelector(".container");
const popUpWindow = document.querySelector(".pop-up-window");
const formJoin = document.querySelector(".pop-up-window__form");
const closeBtn = document.querySelector(".pop-up-window__close-btn");
const openBtn = document.querySelector(".hero__open-btn");

openBtn.addEventListener("click", showPopUp);
closeBtn.addEventListener("click", hidePopUp);
popUpWindow.addEventListener("click", (e) => {
  if (e.target === popUpWindow) hidePopUp();
});
document.addEventListener("keydown", (e) => {
  if (popUpWindow.classList.contains("hidden")) return;
  if (e.key === "Escape") hidePopUp();
});
formJoin.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputEmail = e.target.elements.email;
  console.info(inputEmail.value);
  inputEmail.value = "";
  hidePopUp();
});

function showPopUp() {
  document.body.style.overflow = "hidden";
  popUpWindow.classList.remove("hidden");
  mainContainer.classList.add("hidden");
}
function hidePopUp() {
  popUpWindow.classList.add("hidden");
  mainContainer.classList.remove("hidden");
  popUpWindow.addEventListener("transitionend", () => (document.body.style.overflow = "auto"), {
    once: true,
  });
}
