const html = document.querySelector("html");
const toggleBtnLight = document.querySelector(".dark-mode-toggle__btn--mode.light");
const toggleBtnAuto = document.querySelector(".dark-mode-toggle__btn--mode.auto");
const toggleBtnDark = document.querySelector(".dark-mode-toggle__btn--mode.dark");
const preferDarkColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
let theme = localStorage.getItem("theme");

window.addEventListener("load", loadTheme);

preferDarkColorScheme.addEventListener("change", loadTheme);

toggleBtnLight.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  theme = "light";
  loadTheme();
});
toggleBtnAuto.addEventListener("click", () => {
  localStorage.setItem("theme", "auto");
  theme = "auto";
  loadTheme();
});
toggleBtnDark.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  theme = "dark";
  loadTheme();
});

function loadTheme() {
  if (theme === "light") {
    setHtmlClass("light", "dark");
    setToggleBtnToActive("light");
  } else if (theme === "dark") {
    setHtmlClass("dark", "light");
    setToggleBtnToActive("dark");
  } else {
    theme = "auto";
    if (preferDarkColorScheme.matches) {
      setHtmlClass("dark", "light");
    } else {
      setHtmlClass("light", "dark");
    }
    setToggleBtnToActive("auto");
  }
}

function setHtmlClass(classAdded = "light", classRemoved = "dark") {
  if (
    (classAdded === "light" && classRemoved === "dark") ||
    (classAdded === "dark" && classRemoved === "light")
  ) {
    html.classList.add(classAdded);
    html.classList.remove(classRemoved);
  } else {
    throw new Error("Error: The added and removed class must be 'light' and 'dark' or vice versa!");
  }
}

function setToggleBtnToActive(btnMode = "light") {
  if (btnMode !== "light" && btnMode !== "auto" && btnMode !== "dark") {
    throw new Error("Error: Button mode must be 'light', 'auto' or 'dark'!");
  }
  toggleBtnLight.classList.remove("active");
  toggleBtnAuto.classList.remove("active");
  toggleBtnDark.classList.remove("active");
  if (btnMode === "light") {
    toggleBtnLight.classList.add("active");
  } else if (btnMode === "auto") {
    toggleBtnAuto.classList.add("active");
  } else if (btnMode === "dark") {
    toggleBtnDark.classList.add("active");
  }
}
