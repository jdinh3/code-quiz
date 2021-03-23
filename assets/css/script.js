// Variables
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("quiz-container");
var nextButton = document.getElementById("next-btn");
var introEl = document.getElementById("intro-page");
var questionEl = document.getElementById("current-question");
var firstAnswerEl = document.getElementById("option1");
var secondAnswerEl = document.getElementById("option2");
var thirdAnswerEl = document.getElementById("option3");
var fourthAnswerEl = document.getElementById("option4");

// Javascript Variables
const questionsArray = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store?",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables?",
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 4,
  },
];

// var randomQuestion =
//   questionsArray[Math.floor(Math.random() * questionsArray.length)];

// var currentIndex = 0;

// Functions
function startQuiz() {
  console.log("Quiz has started");
  introEl.setAttribute("style", "display: none");
  questionContainerEl.classList.remove("hide");
}

function showQuestion() {
  var questionText = document.createElement("h1");
  questionText.textContent = questionsArray[0].question;
  questionEl.append(questionText);
}

function showAnswers() {
  firstAnswerEl.innerText = questionsArray[0].answers[0];
  secondAnswerEl.innerText = questionsArray[0].answers[1];
  thirdAnswerEl.innerText = questionsArray[0].answers[2];
  fourthAnswerEl.innerText = questionsArray[0].answers[3];
}

// // Event listener for start button

startButton.addEventListener("click", startQuiz);

// // Function Calls
showQuestion();
showAnswers();
