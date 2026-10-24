// Water Quest: plain JavaScript, no libraries or build step.
const board = document.querySelector("#board");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const feedback = document.querySelector("#feedback");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progress");
const confetti = document.querySelector("#confetti");
const goal = 15;
let score = 0;
let timeLeft = 30;
let playing = false;
let deadline = 0;
let timer;
let targetTimer;
let targets = Array(9).fill("");
const cells = [];

for (let index = 0; index < 9; index++) {
  const button = document.createElement("button");
  button.className = "target";
  button.type = "button";
  button.disabled = true;
  button.setAttribute("aria-label", "Empty spot " + (index + 1));
  button.addEventListener("click", () => collect(index));
  board.appendChild(button);
  cells.push(button);
}

function updateScore() {
  scoreDisplay.textContent = score;
  progress.style.width = Math.min(score / goal * 100, 100) + "%";
  progressBar.setAttribute("aria-valuenow", Math.min(score, goal));
}

function clearTargets() {
  targets.fill("");
  cells.forEach((cell, index) => {
    cell.className = "target";
    cell.replaceChildren();
    cell.disabled = !playing;
    cell.setAttribute("aria-label", "Empty spot " + (index + 1));
  });
}

function showTargets() {
  clearTargets();
  const goodIndex = Math.floor(Math.random() * 9);
  // Choose a different cell so dirty water never covers the jerry can.
  const badIndex = (goodIndex + 1 + Math.floor(Math.random() * 8)) % 9;
  targets[goodIndex] = "can";
  targets[badIndex] = "dirty";
  [goodIndex, badIndex].forEach(index => {
    const type = targets[index];
    const icon = document.createElement("span");
    icon.className = type === "can" ? "can-icon" : "dirty-icon";
    icon.setAttribute("aria-hidden", "true");
    if (type === "dirty") icon.textContent = "💩";
    cells[index].classList.add(type);
    cells[index].appendChild(icon);
    cells[index].setAttribute("aria-label", type === "can" ? "Collect yellow jerry can: plus 1 point" : "Dirty water: minus 2 points");
  });
}

function collect(index) {
  if (!playing) return;
  if (Date.now() >= deadline) { finish(false); return; }
  const type = targets[index];
  if (!type) return;
  score = type === "can" ? score + 1 : Math.max(0, score - 2);
  feedback.textContent = type === "can" ? "Clean collection! +1 point." : "Dirty water! −2 points. Look for yellow cans.";
  if (type === "can" && score === 5) feedback.textContent = "5 points! You’re getting the hang of it.";
  if (type === "can" && score === 10) feedback.textContent = "10 points! Just 5 more to reach your goal.";
  updateScore();
  if (score >= goal) { finish(true); return; }
  // Remove a collected target immediately so it cannot be scored twice.
  targets[index] = "";
  cells[index].replaceChildren();
  cells[index].className = "target";
  cells[index].setAttribute("aria-label", "Empty spot " + (index + 1));
}

function stopTimers() {
  clearInterval(timer);
  clearInterval(targetTimer);
}

function resetGame() {
  stopTimers();
  playing = false;
  score = 0;
  timeLeft = 30;
  timeDisplay.textContent = timeLeft;
  updateScore();
  clearTargets();
  confetti.replaceChildren();
  startButton.disabled = false;
  startButton.textContent = "Start game →";
  feedback.textContent = "Ready to make a splash? Press Start.";
}

function startGame() {
  resetGame();
  playing = true;
  deadline = Date.now() + 30000;
  startButton.disabled = true;
  startButton.textContent = "Game in progress";
  feedback.textContent = "Go! Collect yellow cans and avoid dirty water.";
  showTargets();
  targetTimer = setInterval(showTargets, 900);
  timer = setInterval(() => {
    timeLeft = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    timeDisplay.textContent = timeLeft;
    if (timeLeft === 0) finish(false);
  }, 100);
}

function finish(won) {
  playing = false;
  stopTimers();
  if (!won) { timeLeft = 0; timeDisplay.textContent = 0; }
  clearTargets();
  startButton.disabled = false;
  startButton.textContent = "Play again →";
  feedback.textContent = won ? "You won! 15 points collected. Every drop counts!" : "Time’s up! You collected " + score + " points. Try again!";
  if (won) celebrate();
}

function celebrate() {
  confetti.replaceChildren();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 55; i++) {
    const piece = document.createElement("span");
    piece.className = "piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = ["#ffc907", "#77c8db", "#172c37"][i % 3];
    piece.style.animationDelay = Math.random() * 0.5 + "s";
    confetti.appendChild(piece);
  }
  setTimeout(() => confetti.replaceChildren(), 3200);
}

startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
resetGame();
