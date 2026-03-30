const alertCard = document.querySelector(".alert-card");
const alertCardMessage = document.querySelector(".alert-card__message");
const passwordCardInput = document.querySelector(".password-card__input");
const passwordCardBtnCopy = document.querySelector(".password-card__btn--copy");
const passwordCardBtnGenerate = document.querySelector(".password-card__btn--generate");
let alertMessageTimeout = null;

passwordCardBtnGenerate.addEventListener("click", () => {
  try {
    const passwordGenerated = generatePassword(8, {
      useLowerCase: true,
      useUpperCase: true,
      useNumeric: true,
      useSymbols: true,
    });
    passwordCardInput.value = passwordGenerated;
    callAlert("success", "Password generated successfully!");
  } catch (error) {
    callAlert("failed", error.message);
  }
});

passwordCardBtnCopy.addEventListener("click", () => {
  if (!passwordCardInput.value.length) {
    callAlert("failed", "Please generate a password first!");
    return;
  }
  navigator.clipboard
    .writeText(passwordCardInput.value)
    .then(() => callAlert("success", "Password copied successfully!"));
});

function generatePassword(
  passwordLength,
  { useLowerCase = false, useUpperCase = false, useNumeric = false, useSymbols = false } = {},
) {
  if (typeof passwordLength !== "number" || passwordLength < 8) {
    throw new Error("Error: Password length must be at least 8 characters!");
  }
  const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMERIC = "0123456789";
  const SYMBOLS = "~!@#$%^&+-*/=?";
  let password = "";
  let allowedChars = "";
  if (useLowerCase) {
    password += LOWERCASE.at(Math.floor(Math.random() * LOWERCASE.length));
    allowedChars += LOWERCASE;
  }
  if (useUpperCase) {
    password += UPPERCASE.at(Math.floor(Math.random() * UPPERCASE.length));
    allowedChars += UPPERCASE;
  }
  if (useNumeric) {
    password += NUMERIC.at(Math.floor(Math.random() * NUMERIC.length));
    allowedChars += NUMERIC;
  }
  if (useSymbols) {
    password += SYMBOLS.at(Math.floor(Math.random() * SYMBOLS.length));
    allowedChars += SYMBOLS;
  }
  if (!allowedChars.length) {
    throw new Error("Error: No characters selected!");
  }
  for (let i = password.length; i < passwordLength; i++) {
    password += allowedChars.at(Math.floor(Math.random() * allowedChars.length));
  }
  return fisherYatesShufflePassword(password);
}

function fisherYatesShufflePassword(password = "") {
  if (typeof password !== "string" || password.length < 8) {
    throw new Error("Error: Password length must be at least 8 characters!");
  }
  const arrayOfPassword = password.split("");
  for (let i = arrayOfPassword.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayOfPassword[i], arrayOfPassword[randomIndex]] = [
      arrayOfPassword[randomIndex],
      arrayOfPassword[i],
    ];
  }
  return arrayOfPassword.join("");
}

function callAlert(alertStatus, alertMessage) {
  if (alertStatus !== "success" && alertStatus !== "failed") {
    alertStatus = "failed";
    alertMessage = "Error: Alert status must be either 'success' or 'failed'!";
    passwordCardInput.value = "";
  }
  if (typeof alertMessage !== "string" || !alertMessage.length) {
    alertStatus = "failed";
    alertMessage = "Error: Alert message must be a non-empty string!";
    passwordCardInput.value = "";
  }
  clearTimeout(alertMessageTimeout);
  alertCard.classList.remove("active", "success", "failed");
  alertCard.classList.add("active", alertStatus);
  alertCardMessage.textContent = alertMessage;
  alertMessageTimeout = setTimeout(() => {
    alertCard.classList.remove("active");
    alertCard.addEventListener(
      "transitionend",
      () => {
        alertCardMessage.textContent = "";
        alertCard.classList.remove(alertStatus);
      },
      {
        once: true,
      },
    );
  }, 2000);
}
