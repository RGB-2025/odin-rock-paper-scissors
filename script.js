function getComputerChoice() {
    // Random value between 0-2 (inclusive)
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
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

// Returns 0 if draw, 1 for human win and -1 for robot win. If not valid, return null
function playRound(humanChoice, computerChoice) {
    // Edge case: if both are the same, return draw
    if (humanChoice === computerChoice) {
        return 0;
    }
    switch (getHumanWins(humanChoice, computerChoice)) {
        case true:
            return 1;
        case false:
            return -1;
        // Edge case: its not a valid move
        default:
            return null;
    }
}


let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let result = document.getElementById('result');

const buttons = [rockButton, paperButton, scissorsButton];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let humanChoice = button.getAttribute('data-choice');
        let computerChoice = getComputerChoice();

        let round = playRound(humanChoice, computerChoice);
        switch (round) {
            case 0:
                result.textContent = `Its a draw! ${humanChoice} draws with ${computerChoice}`;
                break;
            case 1:
                result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
                break;
            case -1:
                result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
                break;
            default:
                alert('Invalid move!');
                return;
        }
    })
})