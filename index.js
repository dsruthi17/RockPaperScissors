document.getElementById("rock").addEventListener("click", function () {
  playGame("Rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playGame("Paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  playGame("Scissors");
});
function playGame(userChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById("userChoice").textContent = userChoice;
  document.getElementById("computerChoice").textContent = computerChoice;

  let result;
  let r;
  if (userChoice == computerChoice) {
    r = "tie";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Scissors" && computerChoice === "Paper") ||
    (userChoice === "Paper" && computerChoice === "Rock")
  ) {
    r = "win";
  } else {
    r = "lost";
  }
  if (r === "win") {
    result = "You WIN!!🎉🎉";
    document.body.style.backgroundColor = "#98fb98";
    document.getElementById("gameResult").textContent = result;
  } else if (r === "lost") {
    result = "You LOSE....Try againn✊✊";
    document.body.style.backgroundColor = "#ff9991";
    document.getElementById("gameResult").textContent = result;
  } else {
    result = "You TIE...";
    document.body.style.backgroundColor = "#ade0f4";
    document.getElementById("gameResult").textContent = result;
  }
  document.getElementById("result").style.display = "block";
}
