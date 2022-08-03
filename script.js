let playerScore = 0;
let computerScore = 0;


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameResult = document.querySelector('.gameResult');
const playerScoreArea = document.querySelector('.playerScoreArea');
const computerScoreArea = document.querySelector('.computerScoreArea');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked(e) {
    playRound(e.target.id, getComputerChoice());
}


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
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        gameResult.textContent = 'Draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        gameResult.textContent = 'You win! Rock beats scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        gameResult.textContent = 'You lose! Paper beats rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        playerScoreArea.textContent = playerScore;
        gameResult.textContent = 'You win! Scissors beat paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        gameResult.textContent = 'You lose! Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        playerScoreArea.textContent = playerScore;
        gameResult.textContent = 'You win! Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        playerScoreArea.textContent = playerScore;
        computerScoreArea.textContent = computerScore;
        gameResult.textContent = 'You lose! Scissors beat paper!';
    }

    // Output the game result
    if (playerScore === 5) {
        gameResult.textContent = 'You Win!';

        // Reset the variables to prepare for new game
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameResult.textContent = 'You Lose!';
        
        // Reset the variables to prepare for new game
        playerScore = 0;
        computerScore = 0;
        } 
  }