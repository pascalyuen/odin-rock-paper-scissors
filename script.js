let roundScore = false;
let score = 0;

function getComputerChoice() {
    // Radomly returns Rock, Paper, or Scissors
    const objects = ["Rock", "Paper", "Scissors"]
    let random = Math.floor(Math.random() * objects.length);
    return objects[random];
}


function playRound(playerSelection, computerSelection) {
    // Converts playerSelection and computerSelection to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    // Logic for all possible outcomes of the game
    if (playerSelection === computerSelection) {
        roundScore = 0; 
        return "Draw!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        roundScore = 1;
        return "You win! Rock beats scissors!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        roundScore = -1;
        return "You lose! Paper beats rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        roundScore = 1;
        return "You win! Scissors beat paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        roundScore = -1;
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        roundScore = 1;
        return "You win! Paper beats rock!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        roundScore = -1;
        return "You lose! Scissors beat paper!";
    }
  }


  function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Do you choose Rock, Paper, or Scissors?");
        console.log(playRound(playerChoice, getComputerChoice()));

        // Keep score
        score += roundScore;
    }

    // Output the game result
    if (score > 0) {
       console.log("You Win!");
    } else if (score < 0) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!")
    }

    // Reset the variables to prepare for new game
    roundScore = 0;
    score = 0;
  }
  

  game();