const testimonials = [
  {
    name: "Supratno",
    role: "Kang Macul",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, suscipit!",
    imgUrl: "./assets/gemini-persegi-panjang.png",
  },
  {
    name: "Sutrisno",
    role: "Kang Masak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim debitis asperiores!",
    imgUrl: "./assets/gemini-persegi-panjang.png",
  },
  {
    name: "Bambang",
    role: "Kang Galon",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe assumenda aspernatur similique adipisci quidem. Nam.",
    imgUrl: "./assets/gemini-persegi.png",
  },
];

const loading = document.querySelector(".loading");
const empty = document.querySelector(".testimonial__empty");
const cardContainer = document.querySelector(".testimonial__card-container");
const testimonialCard = cardContainer.querySelector(".testimonial__card");
const testimonialName = testimonialCard.querySelector(".testimonial__name");
const testimonialRole = testimonialCard.querySelector(".testimonial__role");
const testimonialText = testimonialCard.querySelector(".testimonial__text");
const testimonialImage = testimonialCard.querySelector(".testimonial__image");
const btnContainer = document.querySelector(".testimonial__btn-container");
const prevButton = btnContainer.querySelector(".testimonial__slide-btn--prev");
const nextButton = btnContainer.querySelector(".testimonial__slide-btn--next");
let intervalIdSlide = null;
let isAnimating = false;
let activeSlide = 0;

window.addEventListener("load", () => {
  if (testimonials.length) {
    empty.classList.add("hidden");
    handleSlideChange();
  } else {
    cardContainer.classList.add("hidden");
    btnContainer.classList.add("hidden");
    setLoading(false);
  }
});
testimonialCard.addEventListener("animationend", () => (isAnimating = false));
testimonialImage.addEventListener("error", () => setLoading(false));
testimonialImage.addEventListener("load", () => setLoading(false));
prevButton.addEventListener("click", () => handleSlideChange(-1));
nextButton.addEventListener("click", () => handleSlideChange(1));

function handleSlideChange(step = 0) {
  if (isAnimating) return;
  isAnimating = true;
  clearInterval(intervalIdSlide);
  updateActiveSlide(step);
  updateCard();
  runSlides();
}
function runSlides() {
  intervalIdSlide = setInterval(() => {
    isAnimating = true;
    updateActiveSlide(1);
    updateCard();
  }, 3000);
}
function updateActiveSlide(step) {
  const limit = testimonials.length;
  activeSlide = (activeSlide + step + limit) % limit;
}
function updateCard() {
  setLoading(true);
  const name = testimonials[activeSlide].name;
  const role = testimonials[activeSlide].role;
  const text = testimonials[activeSlide].text;
  const imgUrl = testimonials[activeSlide].imgUrl;
  testimonialName.textContent = name;
  testimonialRole.textContent = role;
  testimonialText.textContent = `"${text}"`;
  testimonialImage.alt = `${name}'s photo`;
  testimonialImage.src = imgUrl;
  if (testimonialImage.complete) setLoading(false);
}
function setLoading(isLoad) {
  if (isLoad === !loading.classList.contains("hidden")) return;

  if (isLoad) {
    loading.classList.remove("hidden");
    testimonialCard.classList.remove("fade-in");
  } else {
    loading.classList.add("hidden");
    void testimonialCard.offsetWidth;
    testimonialCard.classList.add("fade-in");
  }
}
