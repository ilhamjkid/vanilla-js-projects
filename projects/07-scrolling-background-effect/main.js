const heroBackground = document.querySelector(".hero__background");
const initialScale = 1;
const finalScale = 1.3;
const diffScale = finalScale - initialScale;

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(updateEffect);
});

window.addEventListener("DOMContentLoaded", updateEffect);

function updateEffect() {
  const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
  const scale = initialScale + progress * diffScale;
  heroBackground.style.transform = `scale(${scale})`;
}
