const countdownAlertElement = document.querySelector(".countdown__alert");
const countdownNewyearElement = document.querySelector(".countdown__year");
const countdownDaysUnitElement = document.querySelector("#days .countdown__unit--time");
const countdownHoursUnitElement = document.querySelector("#hours .countdown__unit--time");
const countdownMinutesUnitElement = document.querySelector("#minutes .countdown__unit--time");
const countdownSecondsUnitElement = document.querySelector("#seconds .countdown__unit--time");
const NEW_YEAR_DATE = new Date(new Date().getFullYear() + 1, 0);
let intervalIDCountdownTimer = null;

window.addEventListener("load", () => {
  countdownNewyearElement.textContent = NEW_YEAR_DATE.getFullYear();

  updateCountdownTimer();
  intervalIDCountdownTimer = setInterval(updateCountdownTimer, 1000);
});

const timeMap = {
  days: (ms) => Math.floor(ms / (1000 * 60 * 60 * 24)),
  hours: (ms) => Math.floor((ms / (1000 * 60 * 60)) % 24),
  minutes: (ms) => Math.floor((ms / (1000 * 60)) % 60),
  seconds: (ms) => Math.floor((ms / 1000) % 60),
};

function updateUnitTime(remainingTime, unitKey, element) {
  const calculation = timeMap[unitKey];
  if (!calculation) throw new Error("Invalid unit!");

  const valueNumber = calculation(remainingTime);
  const valueString = String(valueNumber).padStart(2, "0");
  if (element.textContent !== valueString) {
    element.textContent = valueString;
  }
}

function updateCountdownTimer() {
  const currentDate = new Date();
  if (currentDate >= NEW_YEAR_DATE) {
    clearInterval(intervalIDCountdownTimer);
    countdownAlertElement.classList.remove("hidden");
    return;
  }

  const remainingTime = NEW_YEAR_DATE - currentDate;
  updateUnitTime(remainingTime, "days", countdownDaysUnitElement);
  updateUnitTime(remainingTime, "hours", countdownHoursUnitElement);
  updateUnitTime(remainingTime, "minutes", countdownMinutesUnitElement);
  updateUnitTime(remainingTime, "seconds", countdownSecondsUnitElement);
}
