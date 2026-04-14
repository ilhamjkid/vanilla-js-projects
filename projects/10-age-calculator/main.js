const ageCalculatorForm = document.querySelector(".age-calculator__form");
const dateOfBirthInput = document.querySelector(".age-calculator__input");
const ageResultElement = document.querySelector(".age-calculator__result");

window.addEventListener("DOMContentLoaded", () => {
  setMaxDate();
});

ageCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentDate = new Date();
  const birthDate = new Date(dateOfBirthInput.value);
  const age = calculateAge(currentDate, birthDate);
  const message = createMessage(age);
  setResultMessage(message);
});

function setMaxDate() {
  const today = new Date().toISOString().split("T")[0];
  dateOfBirthInput.setAttribute("max", today);
}

function calculateAge(currentDate = new Date(), birthDate = new Date()) {
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const numOfDaysLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    days += numOfDaysLastMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function createMessage({ years = 0, months = 0, days = 0 } = {}) {
  let messageParts = [];
  if (years > 0) messageParts.push(`${years} years`);
  if (months > 0) messageParts.push(`${months} months`);
  if (days > 0) messageParts.push(`${days} days`);

  let message = "";
  if (messageParts.length === 0) {
    message = "You were just born today!";
  } else if (messageParts.length === 1) {
    message = `You are ${messageParts.at(0)} old.`;
  } else if (messageParts.length > 1) {
    const lastPart = messageParts.pop();
    message = `Your age is ${messageParts.join(", ")} and ${lastPart}.`;
  }

  return message;
}

function setResultMessage(message) {
  ageResultElement.textContent = message;
  ageResultElement.classList.remove("hidden");
}
