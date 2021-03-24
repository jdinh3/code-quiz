//DOM Variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("quiz-container");
var introEl = document.getElementById("intro-page");
var questionEl = document.getElementById("current-question");
var firstAnswerEl = document.getElementById("option1");
var secondAnswerEl = document.getElementById("option2");
var thirdAnswerEl = document.getElementById("option3");
var fourthAnswerEl = document.getElementById("option4");
var currentIndex = 0;
var answerKeyEl = document.getElementById("answerKey");
var timerEl = document.getElementById("timer");

// Javascript Variables

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
  console.log("Quiz has started");
  introEl.setAttribute("style", "display: none");
  questionContainerEl.classList.remove("hide");
  startTimer();
  showNextQuestion();
}

// Timer Function
function startTimer() {
  var timeLeft = 30;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds left!";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second left!";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 700);
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
    showNextQuestion();
    // If selected answer is incorrect answer, show response
  } else {
    console.log("Incorrect!");
    var incorrectResponse = document.createElement("h2");
    incorrectResponse.textContent = "That was incorrect!";
    answerKeyEl.textContent = incorrectResponse.textContent;
    showNextQuestion();
  }
}
// // Event listeners

startButton.addEventListener("click", startQuiz);

firstAnswerEl.addEventListener("click", answerSelection);
secondAnswerEl.addEventListener("click", answerSelection);
thirdAnswerEl.addEventListener("click", answerSelection);
fourthAnswerEl.addEventListener("click", answerSelection);
