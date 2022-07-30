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
        return "You win! Rock beats scissors!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock!"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beat paper!"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors!"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock!"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beat paper!"
    }
  }