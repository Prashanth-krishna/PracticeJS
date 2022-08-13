const settingsbtn = document.getElementById("settings-button");
const difficultyCont = document.getElementById("difficulty-container");
const text = document.getElementById("text");
const playagainbtn = document.getElementById("play-again");
const time = document.getElementById("time");
const score = document.getElementById("score");
const difficulty = document.getElementById("difficulty");
const wordContainer = document.getElementById("word-contaniner");
const gameendcontainer = document.getElementById("game-end-container");
const gameend = document.getElementById("game-end");

const words = [
  "settings",
  "difficulty",
  "score",
  "text",
  "new",
  "marathon",
  "formula",
  "Daniel",
  "conundrum",
  "game",
  "theory",
  "tyres",
  "clutch",
  "pedal",
  "scratch",
  "service",
  "pixel",
  "professional",
  "development",
  "website",
  "logic",
  "notorious",
  "big",
  "small",
];

let index = Math.floor((Math.random() * 1000) % words.length);
let scoreval = 0;
let timeremain = 10;
let word = words[index];

let difficultyselect = localStorage.getItem("difficulty");
difficulty.value = difficultyselect !== null ? difficultyselect : "medium";

function displayWord(word) {
  wordContainer.innerHTML = `<h1>${word}</h1>`;
}
difficulty.addEventListener("change", (e) => {
  difficultyselect = difficulty.value;
  localStorage.setItem("difficulty", difficultyselect);
});
settingsbtn.addEventListener("click", () => {
  difficultyCont.classList.toggle("show");
});

const timeinterval = setInterval(updateTime, 1000);

function updateTime() {
  timeremain -= 1;
  if (timeremain === 0) {
    gameend.innerHTML = `
        <h3>Time Ran Out</h3>
        <h3>Your Score : ${scoreval}</h3>
        <button id="play-again" onclick = "location.reload()">Play Again</button>
        `;

    gameendcontainer.style.display = "flex";
    clearInterval(timeinterval);
  }
  time.innerText = `Time Remaining : ${timeremain}s`;
}

text.addEventListener("input", (e) => {
  typed = e.target.value;

  if (typed.toLowerCase() == word.toLowerCase()) {
    index = Math.floor(Math.random() * words.length);
    scoreval++;
    score.innerText = `Score : ${scoreval}`;
    if (difficultyselect === "hard") {
      timeremain += 2;
    } else if (difficultyselect === "medium") {
      timeremain += 3;
    } else {
      timeremain += 5;
    }
    word = words[index];
    displayWord(word);
    text.value = "";
  }
});

text.focus();
displayWord(word);
