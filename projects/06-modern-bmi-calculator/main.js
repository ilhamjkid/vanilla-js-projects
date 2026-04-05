const bmiCalculatorForm = document.querySelector(".bmi-calculator__form");
const alertMessage = document.querySelector(".bmi-calculator__alert");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const resultElement = document.getElementById("result");
const categoryElement = document.getElementById("category");
let oldCategory = { name: "--", class: "" };
let alertMessageTimeout = null;

bmiCalculatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const heightValue = heightInput.value.trim();
  const weightValue = weightInput.value.trim();
  if (heightValue === "" || weightValue === "") {
    setAlertMessage("Your height and weight cannot be empty!");
    setResultAndCategory();
  } else if (heightValue <= 0 || weightValue <= 0) {
    setAlertMessage("Please input your height and weight correctly!");
    setResultAndCategory();
  } else {
    const bmiResult = calculateBMI(heightValue, weightValue);
    const newCategory = checkCategory(bmiResult);
    setResultAndCategory(bmiResult.toFixed(1), newCategory);
    setAlertMessage();
  }
});

function calculateBMI(heightValue, weightValue) {
  const height = Number(heightValue) / 100;
  const weight = Number(weightValue);
  return weight / height ** 2;
}

function checkCategory(bmi) {
  if (bmi < 16) return { name: "Severe Thinness", class: "severe-thinness" };
  else if (bmi < 17) return { name: "Moderate Thinness", class: "moderate-thinness" };
  else if (bmi < 18.5) return { name: "Mild Thinness", class: "mild-thinness" };
  else if (bmi < 25) return { name: "Normal Weight", class: "normal-weight" };
  else if (bmi < 30) return { name: "Overweight", class: "overweight" };
  else if (bmi < 35) return { name: "Obese Class 1", class: "obese-class-1" };
  else if (bmi < 40) return { name: "Obese Class 2", class: "obese-class-2" };
  else return { name: "Obese Class 3", class: "obese-class-3" };
}

function setResultAndCategory(bmiResult = "--", newCategory = { name: "--", class: "" }) {
  resultElement.textContent = bmiResult;
  categoryElement.textContent = newCategory.name;
  if (oldCategory.class) categoryElement.classList.remove(oldCategory.class);
  if (newCategory.class) categoryElement.classList.add(newCategory.class);
  oldCategory = { ...newCategory };
}

function setAlertMessage(message) {
  if (message && typeof message === "string") {
    clearTimeout(alertMessageTimeout);
    alertMessage.textContent = message;
    alertMessage.classList.remove("bmi-calculator__alert--hidden");
    alertMessageTimeout = setTimeout(() => {
      alertMessage.textContent = "";
      alertMessage.classList.add("bmi-calculator__alert--hidden");
    }, 2000);
  } else {
    clearTimeout(alertMessageTimeout);
    alertMessage.textContent = "";
    alertMessage.classList.add("bmi-calculator__alert--hidden");
  }
}
