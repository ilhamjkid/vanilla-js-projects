const imageWrapperElement = document.querySelector(".gallery__image-wrapper");
const loadButtonElement = document.querySelector(".gallery__load-button");
const BATCH_LIMIT = 6;
let pageLoaded = 1;
let imageLoaded = 0;

window.addEventListener("load", () => {
  handleLoadImages();
});
loadButtonElement.addEventListener("click", () => {
  loadButtonElement.textContent = "Loading..";
  loadButtonElement.style["pointer-events"] = "none";

  pageLoaded++;
  handleLoadImages();
});

function handleLoadImages() {
  const dFrag = document.createDocumentFragment();
  const start = (pageLoaded - 1) * BATCH_LIMIT + 1;

  for (let i = 0; i < BATCH_LIMIT; i++) {
    const currentId = `${Date.now()}${start + i}`;
    const src = `https://picsum.photos/400/400?random=${currentId}`;
    const alt = `Random Image No. ${currentId}`;
    const imageItem = createImageItemElement(src, alt);
    dFrag.appendChild(imageItem);
  }

  imageWrapperElement.appendChild(dFrag);
}

function createImageItemElement(src, alt) {
  const imageItemElement = document.createElement("div");
  imageItemElement.classList.add("gallery__image-item");

  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", src);
  imageElement.setAttribute("alt", alt);
  imageElement.setAttribute("loading", "lazy");
  imageElement.onload = () => {
    imageElement.classList.add("loaded");
    imageLoaded++;
    imageLoaded = validateLoadingState(imageLoaded, BATCH_LIMIT, loadButtonElement);
  };
  imageElement.onerror = () => {
    console.error(`Failed to load image ${src}`);
    imageLoaded++;
    imageLoaded = validateLoadingState(imageLoaded, BATCH_LIMIT, loadButtonElement);
  };

  imageItemElement.appendChild(imageElement);
  return imageItemElement;
}

function validateLoadingState(currentCount, limit, targetButton) {
  if (currentCount === limit) {
    targetButton.textContent = "Load More";
    targetButton.style["pointer-events"] = "all";
    return 0;
  }

  return currentCount;
}
