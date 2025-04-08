// initialization

let humanScore = 0;
let computerScore = 0;

// general functions

function capitalize(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

function getComputerChoice() {
    // Random value between 0-2 (inclusive)
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let input = prompt("What do you pick?");
    return input;
}

function getHumanWins(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'Rock':
            // Rock beats Scissors
            return computerChoice === 'Scissors' ? true : false;
        case 'Paper':
            // Paper beats Rock
            return computerChoice === 'Rock' ? true : false;
        case 'Scissors':
            // Scissors beats Paper
            return computerChoice === 'Paper' ? true : false;
        default:
            return null;
    }
}

function playRound(humanChoice, computerChoice) {
    // To make it easier, ill just capitalize it ('rock' becomes 'Rock')
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);

    // Edge case: if both are the same, return draw
    if (humanChoice === computerChoice) {
        console.log(`Its a draw! ${humanChoice} draws with ${computerChoice}`);
        return;
    }

    switch (getHumanWins(humanChoice, computerChoice)) {
        case true:
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            return;
        case false:
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            return;
        default:
            console.log('Invalid move! Please choose rock, paper, or scissors.');
    }
    
}const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);