const choiceButtonElements = document.querySelectorAll(".rps-game__choice-btn");
const userScoreElement = document.getElementById("user-score");
const compScoreElement = document.getElementById("comp-score");
const resetButtonElement = document.querySelector(".rps-game__btn-reset");
const feedbackElement = document.querySelector(".rps-game__feedback");
const userChoiceTextElement = document.getElementById("user-choice-text");
const compChoiceTextElement = document.getElementById("comp-choice-text");
const resultMessageElement = document.getElementById("result-message");
const alertElement = document.querySelector(".rps-game__alert");
const alertMessageElement = document.querySelector(".rps-game__alert-message");

const CONFIG = {
  alertTimeout: 5000,
  feedbackTimeout: 5000,
  shuffleDuration: 200,
  maxShuffleCount: 10,
  maxScore: 10,
  choices: ["rock", "paper", "scissors"],
  rules: { rock: "scissors", paper: "rock", scissors: "paper" },
};
const appState = {
  isPlaying: false,
  shuffleCount: 0,
  timeoutId: { feedback: null, alert: null },
};
const playerState = {
  choice: {
    user: "",
    comp: "",
    reset() {
      this.user = "";
      this.comp = "";
    },
  },
  score: {
    user: 0,
    comp: 0,
    reset() {
      this.user = 0;
      this.comp = 0;
    },
  },
};

choiceButtonElements.forEach((choiceBtn) => {
  choiceBtn.addEventListener("click", () => {
    if (appState.isPlaying) {
      const alertMessage = "Be patient, the computer is still choosing.";
      return notification.handle("alert", alertMessage, CONFIG.alertTimeout);
    }

    const userChoice = choiceBtn.dataset.choice;
    playerState.choice.user = userChoice;
    playGame();
  });
});
resetButtonElement.addEventListener("click", () => {
  if (appState.isPlaying) {
    const alertMessage = "Be patient, the computer is still choosing.";
    return notification.handle("alert", alertMessage, CONFIG.alertTimeout);
  }

  resetScore();
});
async function playGame() {
  if (!appState.isPlaying) appState.isPlaying = true;

  await runShuffle();

  const result = determineWinner();
  updateScore(result.winner);
  notification.handle("feedback", result.message, CONFIG.feedbackTimeout);
  playerState.choice.reset();

  checkEndGame();

  if (appState.isPlaying) appState.isPlaying = false;
}

function runShuffle() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const compChoice = getComputerChoice();
      updateSelectedButtons(compChoice);
      playerState.choice.comp = compChoice;
      appState.shuffleCount++;
      resolve();
    }, CONFIG.shuffleDuration);
  }).then(() => {
    if (appState.shuffleCount === CONFIG.maxShuffleCount) {
      updateSelectedButtons("none");
      appState.shuffleCount = 0;
      return;
    }
    return runShuffle();
  });
}

function checkEndGame() {
  const userScore = playerState.score.user;
  const compScore = playerState.score.comp;
  const maxScore = CONFIG.maxScore;
  if (userScore === maxScore || compScore === maxScore) {
    const result = userScore === maxScore ? "won" : "lost";
    const matches = userScore + compScore;
    const alertMessage = `You ${result} ${userScore}-${compScore} in ${matches} matches.`;
    notification.handle("alert", alertMessage, CONFIG.alertTimeout);
    resetScore();
  }
}

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * CONFIG.choices.length);
  return CONFIG.choices[choiceIndex];
}

function updateSelectedButtons(choice) {
  const oldSelectedButton = document.querySelector(".chose");
  if (oldSelectedButton) oldSelectedButton.classList.remove("chose");

  if (choice !== "none") {
    const newSelectedButtonClass = `.rps-game__choice-btn--${choice}`;
    document.querySelector(newSelectedButtonClass).classList.add("chose");
  }
}

function determineWinner() {
  const userChoice = playerState.choice.user;
  const compChoice = playerState.choice.comp;
  if (userChoice === compChoice) {
    return { winner: "none", message: "It's tie!" };
  } else if (CONFIG.rules[userChoice] === compChoice) {
    return { winner: "user", message: "You win!" };
  } else return { winner: "comp", message: "You lose!" };
}

function updateScore(winner) {
  if (winner === "user") {
    playerState.score.user++;
    userScoreElement.textContent = playerState.score.user;
  } else if (winner === "comp") {
    playerState.score.comp++;
    compScoreElement.textContent = playerState.score.comp;
  }
}
function resetScore() {
  playerState.score.reset();
  userScoreElement.textContent = 0;
  compScoreElement.textContent = 0;
}

const notification = {
  feedback: {
    show(resultMessage) {
      userChoiceTextElement.textContent = playerState.choice.user;
      compChoiceTextElement.textContent = playerState.choice.comp;
      resultMessageElement.textContent = resultMessage;
      feedbackElement.classList.remove("hidden");
    },
    hide() {
      feedbackElement.classList.add("hidden");
      userChoiceTextElement.textContent = "";
      compChoiceTextElement.textContent = "";
      resultMessageElement.textContent = "";
    },
  },
  alert: {
    show(alertMessage) {
      alertMessageElement.textContent = alertMessage;
      alertElement.classList.remove("hidden");
    },
    hide() {
      alertElement.classList.add("hidden");
      alertMessageElement.textContent = "";
    },
  },
  handle(notificationType, message, timeout) {
    clearTimeout(appState.timeoutId[notificationType]);
    this[notificationType].show(message);
    appState.timeoutId[notificationType] = setTimeout(() => {
      this[notificationType].hide();
    }, timeout);
  },
};
