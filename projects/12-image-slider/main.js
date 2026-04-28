const slideContainer = document.querySelector(".image-slider__container");
const slideWrapper = document.querySelector(".image-slider__wrapper");
const slideItems = document.querySelectorAll(".image-slider__item");
const prevButton = document.querySelector(".image-slider__button--prev");
const nextButton = document.querySelector(".image-slider__button--next");
let oldSlideContainerWidth = slideContainer.clientWidth;
let activeSlide = 0;
let intervalIdSlide = null;
let transitionRun = false;

window.addEventListener("load", runSlides);
window.addEventListener("resize", () => {
  if (oldSlideContainerWidth === slideContainer.clientWidth) return;
  oldSlideContainerWidth = slideContainer.clientWidth;
  handleSlideChange(0, false);
});
slideWrapper.addEventListener("transitionend", (e) => {
  e.target.style.transition = "none";
  transitionRun = false;
});
prevButton.addEventListener("click", () => {
  handleSlideChange(-1, true);
});
nextButton.addEventListener("click", () => {
  handleSlideChange(1, true);
});

function handleSlideChange(step, useTransition) {
  if (transitionRun) return;
  if (useTransition) transitionRun = true;
  clearInterval(intervalIdSlide);
  updateActiveSlide(step);
  updateSlidePosition(useTransition);
  runSlides();
}

function runSlides() {
  intervalIdSlide = setInterval(() => {
    transitionRun = true;
    updateActiveSlide(1);
    updateSlidePosition(true);
  }, 2000);
}

function updateActiveSlide(step) {
  const limit = slideItems.length;
  activeSlide = (activeSlide + step + limit) % limit;
}
function updateSlidePosition(useTransition) {
  if (useTransition) slideWrapper.style.transition = "transform 0.2s ease-in";
  slideWrapper.style.transform = `translateX(${-activeSlide * slideContainer.clientWidth}px)`;
}
