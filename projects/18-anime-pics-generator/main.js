const getPictureButtonElements = document.querySelectorAll(".generator__generate-btn");
const generatorContentElement = document.querySelector(".generator__content");
const generatorImageElement = document.querySelector(".generator__image");
const generatorArtistNameElement = document.querySelector(".generator__artist-name");
const generatorArtistLinkElement = document.querySelector(".generator__artist-link a");
const loadingImageElement = document.querySelector(".generator__image-loading");
const loadingInfoElement = document.querySelector(".generator__info-loading");

const API = {
  url: "https://nekos.best/api/v2",
  getUrl(endpoint) {
    return `${this.url}/${endpoint}`;
  },
};

getPictureButtonElements.forEach((getPictureBtn) => {
  getPictureBtn.addEventListener("click", () => {
    getAnimePicture(getPictureBtn.dataset.endpoint);
  });
});
generatorImageElement.addEventListener("load", () => {
  updateLoadingElements(false);
  updateGetPictureButtonElements(false);
});
generatorImageElement.addEventListener("error", () => {
  resetUIOnError("Oops! The image file is broken or cannot be reached.");
});

async function getAnimePicture(endpoint) {
  try {
    updateGetPictureButtonElements();
    updateLoadingElements();
    const response = await fetch(API.getUrl(endpoint));
    const data = await response.json();
    const content = data.results[0];
    content.endpoint = endpoint;
    updateContentElement(content);
  } catch (error) {
    resetUIOnError("Failed to fetch data from server. Please try again.");
  }
}

function updateGetPictureButtonElements(disabled = true) {
  getPictureButtonElements.forEach((getPictureBtn) => {
    getPictureBtn.disabled = disabled;
  });
}
function updateLoadingElements(isLoading = true) {
  if (isLoading) {
    loadingImageElement.classList.remove("hidden");
    loadingInfoElement.classList.remove("hidden");
  } else {
    loadingImageElement.classList.add("hidden");
    loadingInfoElement.classList.add("hidden");
  }
}
function updateContentElement(content) {
  if (generatorContentElement.classList.contains("hidden")) {
    generatorContentElement.classList.remove("hidden");
  }
  generatorImageElement.src = content.url;
  generatorImageElement.alt = `${content.endpoint} picture`;
  generatorArtistNameElement.textContent = content.artist_name;
  generatorArtistLinkElement.href = content.artist_href;
}

function resetUIOnError(message) {
  alert(message);
  updateLoadingElements(false);
  updateGetPictureButtonElements(false);
  generatorContentElement.classList.add("hidden");
}
