const formInput = document.querySelector(".weight-converter__form");
const poundsInput = document.getElementById("pounds");
const failedMessage = document.querySelector(".weight-converter__failed-message");
const results = document.querySelector(".weight-converter__results");
const gramsOutput = document.getElementById("grams-output");
const kgOutput = document.getElementById("kg-output");
const ozOutput = document.getElementById("oz-output");

formInput.addEventListener("submit", (e) => e.preventDefault());

poundsInput.addEventListener("input", (e) => {
  const val = e.target.value;
  const poundsValue = Number(val);
  if (val === "") {
    failedMessage.classList.add("hidden");
    results.classList.add("hidden");
    setResults();
    return;
  }
  if (poundsValue < 0 || isNaN(poundsValue)) {
    failedMessage.classList.remove("hidden");
    results.classList.add("hidden");
    setResults();
  } else {
    failedMessage.classList.add("hidden");
    results.classList.remove("hidden");
    const grams = (poundsValue * 453.592).toFixed(2);
    const kilograms = (poundsValue * 0.453592).toFixed(2);
    const ounces = (poundsValue * 16).toFixed(2);
    setResults(grams, kilograms, ounces);
  }
});

function setResults(grams = "", kilograms = "", ounces = "") {
  gramsOutput.textContent = grams;
  kgOutput.textContent = kilograms;
  ozOutput.textContent = ounces;
}
