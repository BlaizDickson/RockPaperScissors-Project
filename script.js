const choices = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const resultDiv = document.querySelector("#result");

function computerPlay() {
  // Generate a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);

  // Return the corresponding choice
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  // Convert both selections to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // Determine the winner
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function handleClick(event) {
  let playerSelection = event.target.id.split("-")[0];
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  resultDiv.textContent = result;
}

rockBtn.addEventListener("click", handleClick);
paperBtn.addEventListener("click", handleClick);
scissorsBtn.addEventListener("click", handleClick);