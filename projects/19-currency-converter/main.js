const converterCardElement = document.querySelector(".converter__card");
const currencyTopElement = document.getElementById("currency-top");
const amountTopElement = document.getElementById("amount-top");
const currencyBottomElement = document.getElementById("currency-bottom");
const amountBottomElement = document.getElementById("amount-bottom");
const exchangeRateElement = document.querySelector(".converter__exchange-rate");
const loadingElement = document.querySelector(".loading");

const CONFIG = {
  rates: null,
  apiUrl: "https://api.frankfurter.dev/v2",
  getAPIRatesUrl() {
    const base = `base=USD`;
    const quotes = `quotes=AUD,EUR,GBP,IDR,JPY,SGD`;
    return `${this.apiUrl}/rates?${base}&${quotes}`;
  },
};

window.addEventListener("load", async () => {
  try {
    await setUpRates();
    setUpCurrencyOptions();
    loadingElement.remove();
  } catch (error) {
    handleFailedSetUp();
    loadingElement.remove();
  }
});
currencyTopElement.addEventListener("change", () => {
  runConverter(currencyTopElement, currencyBottomElement, amountTopElement, amountBottomElement);
});
amountTopElement.addEventListener("input", () => {
  runConverter(currencyTopElement, currencyBottomElement, amountTopElement, amountBottomElement);
});
currencyBottomElement.addEventListener("change", () => {
  runConverter(currencyTopElement, currencyBottomElement, amountTopElement, amountBottomElement);
});
amountBottomElement.addEventListener("input", () => {
  runConverter(currencyBottomElement, currencyTopElement, amountBottomElement, amountTopElement);
});

function runConverter(
  currencyBaseElement,
  currencyTargetElement,
  amountBaseElement,
  amountTargetElement,
) {
  if (!amountBaseElement.value) return updateConversion(amountTargetElement, "", "");
  const amountBaseValue = parseFloat(amountBaseElement.value);
  const currencyBaseValue = currencyBaseElement.value;
  const currencyTargetValue = currencyTargetElement.value;
  const rateBase = CONFIG.rates[currencyBaseValue];
  const rateTarget = CONFIG.rates[currencyTargetValue];
  let exchangeRate = (1 / rateBase) * rateTarget;
  let amountTargetValue = amountBaseValue * exchangeRate;
  amountTargetValue = Number(amountTargetValue.toFixed(2));
  exchangeRate = Number(exchangeRate.toFixed(4));
  const exchangeRateMessage = `1 ${currencyBaseValue} = ${exchangeRate} ${currencyTargetValue}`;
  updateConversion(amountTargetElement, amountTargetValue, exchangeRateMessage);
}

function updateConversion(amountElement, amountValue, exchangeRateMessage) {
  amountElement.value = amountValue;
  exchangeRateElement.textContent = exchangeRateMessage;
  if (!exchangeRateMessage) exchangeRateElement.classList.add("hidden");
  else exchangeRateElement.classList.remove("hidden");
}

async function setUpRates() {
  const url = CONFIG.getAPIRatesUrl();
  const response = await fetch(url);
  const data = await response.json();
  CONFIG.rates = data.reduce(
    (acc, curr) => {
      acc[curr.quote] = curr.rate;
      return acc;
    },
    { USD: 1 },
  );
}

function setUpCurrencyOptions() {
  const optionFragmentTop = createOptionFragment("USD");
  const optionFragmentBottom = createOptionFragment("AUD");
  currencyTopElement.appendChild(optionFragmentTop);
  currencyBottomElement.appendChild(optionFragmentBottom);
}

function createOptionFragment(selectedCurrency) {
  const dFag = document.createDocumentFragment();
  for (const currency in CONFIG.rates) {
    const option = document.createElement("option");
    if (currency === selectedCurrency) option.selected = true;
    option.value = currency;
    option.textContent = currency;
    dFag.appendChild(option);
  }
  return dFag;
}

function handleFailedSetUp() {
  converterCardElement.innerHTML = "";
  const alertElement = document.createElement("p");
  alertElement.classList.add("converter__alert");
  alertElement.textContent = "Failed to load exchange rates. Please check your connection.";
  converterCardElement.appendChild(alertElement);
}
