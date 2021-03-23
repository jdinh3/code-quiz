// Variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("quiz-container");
var nextButton = document.getElementById("next-btn");
var introEl = document.getElementById("intro-page");

// Quiz Questions

// Event listener for start button

startButton.addEventListener("click", startQuiz);

// Functions
function startQuiz() {
  console.log("Quiz has started");
  startButton.style.display = "none";
  introEl.style.display = "none";
  nextButton.classList.remove("hide");
  questionContainerEl.classList.remove("hide");
}

function nextQuestion() {}

function selectAnswer() {}

// Function Calls
