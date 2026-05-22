const projectData = [
  { name: "Random Password Generator", src: "01-random-password-generator" },
  { name: "Sleek Dark Mode Toggle", src: "02-sleek-dark-mode-toggle" },
  { name: "Blur Pop-Up Window", src: "03-blur-pop-up-window" },
  { name: "Simple Weight Converter App", src: "04-simple-weight-converter-app" },
  { name: "Button Ripple Effect", src: "05-button-ripple-effect" },
  { name: "Modern BMI Calculator", src: "06-modern-bmi-calculator" },
  { name: "Scrolling Background Effect", src: "07-scrolling-background-effect" },
  { name: "Dynamic Auto Typing Effect", src: "08-dynamic-auto-typing-effect" },
  { name: "Video Background Website", src: "09-video-background-website" },
  { name: "Age Calculator", src: "10-age-calculator" },
  { name: "Stunning Testimonial Slider", src: "11-stunning-testimonial-slider" },
  { name: "Image Slider", src: "12-image-slider" },
  { name: "Dynamic Random Image Gallery", src: "13-dynamic-random-image-gallery" },
  { name: "Live New Year Countdown Timer", src: "14-live-new-year-countdown-timer" },
  { name: "Realistic Analog Clock", src: "15-realistic-analog-clock" },
  { name: "Rock Paper Scissors Game", src: "16-rock-paper-scissors-game" },
  { name: "Calculator", src: "17-calculator" },
  { name: "Anime Pics Generator", src: "18-anime-pics-generator" },
  { name: "Currency Converter", src: "19-currency-converter" },
  { name: "To-Do List", src: "20-todo-list" },
];

const loadingState = {
  imageLoaded: 0,
};

window.addEventListener("load", () => {
  addProjectListItemElements();
});

function addProjectListItemElements() {
  const projectList = document.querySelector(".project-collection__project-list");
  const documentFragment = document.createDocumentFragment();
  projectData.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-collection__project-item");
    projectItem.append(
      createProjectImageElement(project.name, project.src),
      createProjectNameElement(project.name),
      createProjectSourceGroupElement(project.src),
    );
    documentFragment.appendChild(projectItem);
  });
  projectList.appendChild(documentFragment);
}

function createProjectImageElement(projectName, projectSrc) {
  const projectImageElement = document.createElement("img");
  projectImageElement.classList.add("project-collection__project-image");
  projectImageElement.src = `./assets/${projectSrc}.png`;
  projectImageElement.alt = projectName;
  projectImageElement.addEventListener("load", () => {
    loadingState.imageLoaded++;
    if (loadingState.imageLoaded === projectData.length) {
      document.querySelector(".loading")?.remove();
    }
  });
  return projectImageElement;
}
function createProjectNameElement(projectName) {
  const projectNameElement = document.createElement("h3");
  projectNameElement.classList.add("project-collection__project-name");
  projectNameElement.textContent = projectName;
  return projectNameElement;
}
function createProjectSourceGroupElement(projectSrc) {
  const projectSourceCodeElement = createProjectSourceElement(
    `https://github.com/ilhamjkid/vanilla-js-projects/tree/main/projects/${projectSrc}/`,
    "Code",
  );
  const projectSourceDemoElement = createProjectSourceElement(`./projects/${projectSrc}/`, "Demo");
  const projectSourceGroupElement = document.createElement("div");
  projectSourceGroupElement.classList.add("project-collection__project-source-group");
  projectSourceGroupElement.append(projectSourceCodeElement, projectSourceDemoElement);
  return projectSourceGroupElement;
}
function createProjectSourceElement(href, textContent) {
  const projectSourceElement = document.createElement("a");
  projectSourceElement.classList.add("project-collection__project-source");
  projectSourceElement.href = href;
  projectSourceElement.target = "_blank";
  projectSourceElement.rel = "noopener noreferrer";
  projectSourceElement.textContent = textContent;
  return projectSourceElement;
}
