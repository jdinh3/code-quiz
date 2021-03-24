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
var currentIndex = 0;

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
    correctAnswer: "numbers and strings",
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
  showNextQuestion();
}

function showNextQuestion() {
  // Question
  currentIndex++;
  var questionText = document.createElement("h1");
  questionText.textContent = questionsArray[currentIndex].question;
  questionEl.textContent = questionText.textContent;
  // Answer Buttons
  firstAnswerEl.innerText = questionsArray[currentIndex].answers[0];
  secondAnswerEl.innerText = questionsArray[currentIndex].answers[1];
  thirdAnswerEl.innerText = questionsArray[currentIndex].answers[2];
  fourthAnswerEl.innerText = questionsArray[currentIndex].answers[3];

  if (currentIndex >= 5) {
    nextButton.setAttribute("style", "display: none");
  }
}

function confirmSelection(e) {
  if (questionsArray[currentIndex].correctAnswer === e.target.innerHTML) {
    console.log("correctomundo!");
  } else {
    console.log("incorrecto!");
  }
}

// // Event listeners

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", showNextQuestion);

// // Function Calls

// function handleChoiceSelection(event) {
//   if (questionsArray[currentIndex].correctAnswer === event.target.innerHTML) {
//     console.log("CORRECT!");
//     currentIndex++;
//   } else {
//     console.log("WRONG!");
//     currentIndex++;
//   }
// }
