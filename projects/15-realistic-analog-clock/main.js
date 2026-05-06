const clockHandHourElement = document.getElementById("hour-hand");
const clockHandMinuteElement = document.getElementById("minute-hand");
const clockHandSecondElement = document.getElementById("second-hand");
const clockNumberWrapperElement = document.querySelector(".analog-clock__number-wrapper");
let clockNumberWrapperWidth = clockNumberWrapperElement.clientWidth;

window.addEventListener("load", () => {
  addClockNumberElements();
  requestAnimationFrame(tick);
});
window.addEventListener("resize", () => {
  if (clockNumberWrapperWidth !== clockNumberWrapperElement.clientWidth) {
    clockNumberWrapperWidth = clockNumberWrapperElement.clientWidth;
    addClockNumberElements();
  }
});

function tick() {
  updateClock();
  requestAnimationFrame(tick);
}

function updateClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const milisecond = currentTime.getMilliseconds();
  const hourDegree = hour * 30 + minute * 0.5 + "deg";
  const minuteDegree = minute * 6 + second * 0.1 + "deg";
  const secondDegree = second * 6 + milisecond * 0.006 + "deg";
  clockHandHourElement.style.setProperty("--rotation", hourDegree);
  clockHandMinuteElement.style.setProperty("--rotation", minuteDegree);
  clockHandSecondElement.style.setProperty("--rotation", secondDegree);
}

function addClockNumberElements() {
  clockNumberWrapperElement.innerHTML = "";
  const dFag = document.createDocumentFragment();
  for (let i = 1; i <= 12; i++) {
    const { top, left } = getTopAndLeftPosition(clockNumberWrapperWidth, 0.9, 30 * i);
    const p = document.createElement("p");
    p.classList.add("analog-clock__number");
    p.textContent = i;
    p.style.top = top;
    p.style.left = left;
    dFag.appendChild(p);
  }
  clockNumberWrapperElement.appendChild(dFag);
}

function getTopAndLeftPosition(containerWidth, radiusWidthInPercent, degree) {
  const center = containerWidth / 2;
  const radius = center * radiusWidthInPercent;
  const radian = ((degree - 90) * Math.PI) / 180;
  const top = center + radius * Math.sin(radian);
  const left = center + radius * Math.cos(radian);
  return { top: top + "px", left: left + "px" };
}
