const descNameElement = document.querySelector(".hero__desc--name");
const descNames = JSON.parse(descNameElement.dataset.desc);
const speed = { TYPE: 400, DELETE: 200, DELAY: 1000 };
let currentSpeed = 0;
let isDeleting = false;
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  const descName = descNames.at(wordIndex);
  descNameElement.textContent = descName.slice(0, charIndex);

  if (isDeleting) {
    currentSpeed = speed.DELETE;
    charIndex--;
    if (charIndex < 0) {
      currentSpeed = speed.TYPE;
      isDeleting = false;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % descNames.length;
    }
  } else {
    currentSpeed = speed.TYPE;
    charIndex++;
    if (charIndex > descName.length) {
      currentSpeed = speed.DELAY;
      isDeleting = true;
      charIndex--;
    }
  }

  setTimeout(typeEffect, currentSpeed);
}

typeEffect();
