//Dom Variables
var goBackBtn = document.getElementById("goBack");
var clearScoreBtn = document.getElementById("clearScore");

// Javascript Variables
var items = JSON.parse(localStorage.getItem("scores"));

// Goes back to intro page
function goHome() {
  window.location = "index.html";
}

// appends new score to the scoreboard
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  var item = items[i];

  console.log(item.initials);
  var initial = item.initials;
  var score = item.score;
  var li = document.createElement("li");
  li.textContent = initial + " " + score;

  var ol = document.querySelector("ol");
  ol.appendChild(li);
}

function clearStorage() {
  localStorage.setItem("");
}

// event listener
// Go Back Button event listener
goBackBtn.addEventListener("click", goHome);

// clear button event listener
clearScoreBtn.addEventListener("click", function () {
  localStorage.clear();
});
