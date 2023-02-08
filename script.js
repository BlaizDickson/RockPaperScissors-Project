// Array of strings
var arr = ['rock', 'paper', 'scissors'];

// Function to generate a random string from the array
function getRandomString() {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Function to compare the random string to another string (case insensitive)
function playRound(computerChoice, playerSelection) {
  if (computerChoice.toLowerCase() === playerSelection.toLowerCase()) {
    alert("It's a tie.");
  } if (computerChoice.toLowerCase() === 'rock'&& playerSelection.toLowerCase() === 'scissor') {
    alert("computer beat you with Rock against Scissor");
  } else if (computerChoice.toLowerCase() === 'paper'&& playerSelection.toLowerCase() === 'rock') {
    alert('computer beat you with Paper against Rock');
  } else if (computerChoice.toLowerCase() === 'paper'&& playerSelection.toLowerCase() === 'scissor') {
    alert('you beat Computer with Scissor against Paper');
  } else if (computerChoice.toLowerCase() === 'scissor'&& playerSelection.toLowerCase() === 'rock') {
    alert('You beat Computer with Rock against Scissor');
  } else if (computerChoice.toLowerCase() === 'scissor'&& playerSelection.toLowerCase() === 'paper') {
    alert('Computer beat you with Scissor against Paper');
  } else if (computerChoice.toLowerCase() === 'rock'&& playerSelection.toLowerCase() === 'paper') {
    alert('You beat Computer with Paper against rock');
  } 
}
//let playerSelection = prompt('input your choice', '')
// Generate the random string and store it in a variable
//var randomString = getRandomString();

// Compare the random string to another string
//var result = playRound(randomString, playerSelection);

// Log the result to the console
// console.log(result);
//alert(result)

// Loop for five iterations
for (var i = 0; i < 5; i++) {
  // Generate the random string and store it in a variable
  var randomString = getRandomString();

  // Get the user input
  var playerSelection = prompt('Enter your choice (Rock, Paper, Scissors):');

  // Compare the random string to the user input
  var result = playRound(randomString, playerSelection);

  // Alert the result
  alert(result);
}