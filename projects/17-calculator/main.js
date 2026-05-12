const previousCalcDisplayElement = document.querySelector(".calculator__display--previous");
const currentCalcDisplayElement = document.querySelector(".calculator__display--current");
const calcButtonElements = document.querySelectorAll(".calculator__button");

const calcState = {
  current: "",
  previous: "",
  operation: "",
  isStatesNotEmpty() {
    let isStatesNotEmpty = true;
    if (!this.current) isStatesNotEmpty = false;
    if (!this.previous) isStatesNotEmpty = false;
    if (!this.operation) isStatesNotEmpty = false;
    return isStatesNotEmpty;
  },
  updateAll(current, previous, operation) {
    this.current = current;
    this.previous = previous;
    this.operation = operation;
  },
  clearAll() {
    this.current = "";
    this.previous = "";
    this.operation = "";
  },
  deleteOneChar(stateName) {
    this[stateName] = this[stateName].slice(0, -1);
  },
};

calcButtonElements.forEach((calcButton) => {
  calcButton.addEventListener("click", () => {
    if (calcButton.dataset.number) {
      appendNumber(calcButton.dataset.number);
    }
    if (calcButton.dataset.operation) {
      chooseOperation(calcButton.dataset.operation);
    }
  });
});

function appendNumber(number) {
  if (number === "0" && calcState.current === "0") return;
  if (number === "." && calcState.current.includes(".")) return;
  if (number === "." && !calcState.current) number = "0.";
  if (calcState.current === "0") calcState.current = "";
  calcState.current += number;
  updateDisplay();
}

function chooseOperation(op) {
  try {
    if (op === "equals") {
      if (calcState.isStatesNotEmpty()) {
        const current = compute();
        calcState.updateAll(current, "", "");
        updateDisplay();
      }
      return;
    }
    if (op === "clear") {
      calcState.clearAll();
      updateDisplay();
      return;
    }
    if (op === "delete") {
      calcState.deleteOneChar("current");
      updateDisplay();
      return;
    }
    if (calcState.current === "-") return;
    if (!calcState.current && op !== "-") {
      if (calcState.operation) {
        calcState.operation = op;
        updateDisplay();
      }
      return;
    }
    if (!calcState.current && op === "-") {
      calcState.current = op;
      updateDisplay();
      return;
    }
    const previous = calcState.previous ? compute() : calcState.current;
    calcState.updateAll("", previous, op);
    updateDisplay();
  } catch (error) {
    calcState.clearAll();
    updateDisplay(error.message);
  }
}

function compute() {
  let result;
  const current = parseFloat(calcState.current);
  const previous = parseFloat(calcState.previous);
  const operation = calcState.operation;
  if (operation === "+") result = previous + current;
  if (operation === "-") result = previous - current;
  if (operation === "*") result = previous * current;
  if (operation === "/") result = previous / current;
  if (!isFinite(result)) throw new Error(result);
  return String(Number(Math.round(result + "e12") + "e-12"));
}

function updateDisplay(message = "") {
  if (calcState.current) {
    currentCalcDisplayElement.textContent = calcState.current;
    currentCalcDisplayElement.classList.remove("muted");
  } else {
    if (message === "Infinity") message = "Cannot divide by zero";
    currentCalcDisplayElement.textContent = message || "0";
    currentCalcDisplayElement.classList.add("muted");
  }
  if (calcState.previous) {
    previousCalcDisplayElement.textContent = `${calcState.previous} ${calcState.operation}`;
    previousCalcDisplayElement.classList.remove("muted");
  } else {
    previousCalcDisplayElement.textContent = "0";
    previousCalcDisplayElement.classList.add("muted");
  }
}
