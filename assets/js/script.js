//DOM Variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("quiz-container");
var introEl = document.getElementById("intro-page");
var questionEl = document.getElementById("current-question");
var firstAnswerEl = document.getElementById("option1");
var secondAnswerEl = document.getElementById("option2");
var thirdAnswerEl = document.getElementById("option3");
var fourthAnswerEl = document.getElementById("option4");
var answerKeyEl = document.getElementById("answerKey");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("userScore");
var scoreContainerEl = document.getElementById("score-container");
var submitBtn = document.getElementById("submitBtn");

// Javascript Variables
var currentIndex = 0;
var timeLeft = 30;
var timeInterval;

// Array of Quiz Questions
const questionsArray = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables?",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "console.log",
  },
];

// Functions
function startQuiz() {
  shuffle(questionsArray);
  console.log("Quiz has started");
  startTimer();
  showNextQuestion();
  introEl.setAttribute("style", "display: none");
  questionContainerEl.classList.remove("hide");
}

// Timer Function
function startTimer() {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds left!";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second left!";
      timeLeft--;
    } else {
      gameOver();
    }
  }, 1000);
}

// Game Over function
function gameOver() {
  questionContainerEl.setAttribute("style", "display: none");
  scoreContainerEl.classList.remove("hide");
  scorePage();
  timerEl.textContent = "";
  clearInterval(timeInterval);
}

// function to show score and prompt for initials
function scorePage() {
  var scorePrompt = document.createElement("h1");
  scorePrompt.textContent = "All Done! Your final score is: " + timeLeft;
  scoreEl.append(scorePrompt);
}

function showNextQuestion() {
  // Next Question
  var questionText = document.createElement("h1");
  questionText.textContent = questionsArray[currentIndex].question;
  questionEl.textContent = questionText.textContent;
  // Next Answers
  firstAnswerEl.innerText = questionsArray[currentIndex].answers[0];
  secondAnswerEl.innerText = questionsArray[currentIndex].answers[1];
  thirdAnswerEl.innerText = questionsArray[currentIndex].answers[2];
  fourthAnswerEl.innerText = questionsArray[currentIndex].answers[3];

  currentIndex++;
}

function answerSelection(event) {
  const selectedAnswer = event.target.innerHTML;
  console.log(event);
  console.log(selectedAnswer);
  console.log(questionsArray[currentIndex]);
  //   If selected answer is the correct answer, show response
  if (selectedAnswer === questionsArray[currentIndex - 1].correctAnswer) {
    console.log("Correct!");
    var correctResponse = document.createElement("h2");
    correctResponse.textContent = "That was the correct answer!";
    answerKeyEl.textContent = correctResponse.textContent;
    // If selected answer is incorrect answer, show response
  } else {
    console.log("Incorrect!");
    var incorrectResponse = document.createElement("h2");
    incorrectResponse.textContent = "That was incorrect!";
    answerKeyEl.textContent = incorrectResponse.textContent;
    timeLeft = timeLeft - 5;
    timerEl.textContent = timeLeft;
  }
  if (currentIndex < questionsArray.length) {
    showNextQuestion();
  } else {
    gameOver();
  }
}

// function to shuffle the Questions Array
function shuffle(array) {
  var indexShuffle = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== indexShuffle) {
    // Picks a random remaining element
    randomIndex = Math.floor(Math.random() * indexShuffle);
    indexShuffle -= 1;
    // Swaps it with the current element
    temporaryValue = array[indexShuffle];
    array[indexShuffle] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//function goes to Score Page
function gotoScores() {
  windows.location = "/scores.html";
}

// Event listeners

startButton.addEventListener("click", startQuiz);

firstAnswerEl.addEventListener("click", answerSelection);
secondAnswerEl.addEventListener("click", answerSelection);
thirdAnswerEl.addEventListener("click", answerSelection);
fourthAnswerEl.addEventListener("click", answerSelection);

// Submit button event listener
submitBtn.addEventListener("click", function () {
  var initials c

  var scores = JSON.parse(localStorage.getItem("scores"));
  //if scores is empty
  if (!scores) {
    scores = [];
  }
  scores.push({ initials: initials, score: timeLeft });
  console.log(scores);
  localStorage.setItem("scores", JSON.stringify(scores));
});

submitBtn.addEventListener("submit", gotoScores);
