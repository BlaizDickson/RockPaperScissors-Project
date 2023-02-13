// Array of strings
const arr = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//for loop to play the game five times and alert the winner
for (let i = 0; i < 5; i++) {
// all the conditions and results embedded in the for loop
  const playerSelection = prompt(`Round ${i + 1}: Do you choose rock, paper or scissors?`);

  const computerChoice = arr[Math.floor(Math.random() * arr.length)];

  //console.log("Computer choice: ", computerChoice);

  if (playerSelection.toLowerCase() === computerChoice.toLowerCase()) {
    alert("It's a tie!");
  } else if (
    (playerSelection.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper')
  ) { 
    alert("You win this round!");
    playerScore++;
  } else if (
    (computerChoice.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors') ||
    (computerChoice.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock') ||
    (computerChoice.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper')
  ) {
    alert("Computer wins this round!");
    computerScore++;
  } else {
    alert("invalid input")
  }
}

if (playerScore > computerScore) {
  alert(`You won the game!\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
} else if (playerScore < computerScore) {
  alert(`Computer won the game!\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
} else {
  alert(`It's a tie!\nYour score: ${playerScore}\nComputer score: ${computerScore}`);
}