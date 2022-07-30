let playerWinsRound = false;
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
        return "Draw!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWinsRound = true;
        return "You win! Rock beats scissors!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        playerWinsRound = false;
        return "You lose! Paper beats rock!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWinsRound = true;
        return "You win! Scissors beat paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        playerWinsRound = false;
        return "You lose! Rock beats scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWinsRound = true;
        return "You win! Paper beats rock!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        playerWinsRound = false;
        return "You lose! Scissors beat paper!";
    }
  }

  function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Do you choose Rock, Paper, or Scissors?");
        console.log(playRound(playerChoice, getComputerChoice()));

        // Add 1 score if the player wins the round
        if (playerWinsRound) {
            score += 1;
        } 
    }

    // If the player wins 3 or more rounds, he is the winner of the game
    if (score >= 3) {
       console.log("You Win!");
    } else {
        console.log("You lose!");
    }

    // Reset the variables to prepare for new game
    playerWinsRound = false;
    score = 0;
  }

  game();