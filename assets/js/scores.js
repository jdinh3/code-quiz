//Dom Variables
var goBackBtn = document.getElementById("goBack");

// Javascript Variables
var items = JSON.parse(localStorage.getItem("scores"));

// Goes back to intro page
function goHome() {
  window.location = "index.html";
}

// appends new score to the scoreboard
if (items != null) {
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
}

// event listener
goBackBtn.addEventListener("click", goHome);
