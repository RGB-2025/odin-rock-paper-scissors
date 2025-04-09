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


// Returns 0 if draw, 1 for player win and -1 for robot win. If not valid, return null
function processRound(playerChoice, computerChoice) {
    // Edge case: if both are the same, return draw
    if (playerChoice === computerChoice) {
        return 0;
    }

    switch (playerChoice) {
        case 'Rock':
            // Rock beats Scissors
            return computerChoice === 'Scissors' ? 1 : -1;
        case 'Paper':
            // Paper beats Rock
            return computerChoice === 'Rock' ? 1 : -1;
        case 'Scissors':
            // Scissors beats Paper
            return computerChoice === 'Paper' ? 1 : -1;
        default:
            return null;
    }
}

const buttons = document.querySelectorAll('[data-choice]');
const result = document.getElementById('result');
const scoreResult = document.getElementById('score-result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const gameOverH1 = document.getElementById('game-over');
const resetButton = document.getElementById('reset');

let gameOver = false;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
    if (gameOver) return;

    const computerChoice = getComputerChoice();

    let round = processRound(playerChoice, computerChoice);
    switch (round) {
        case 0:
            result.textContent = `Its a draw! ${playerChoice} draws with ${computerChoice}`;
            break;
        case 1:
            result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            playerScoreElement.textContent = ++playerScore;
            break;
        case -1:
            result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
            computerScoreElement.textContent = ++computerScore;
            break;
        default:
            alert('Invalid move!');
            return;
    }

    checkGameOver();
}

function checkGameOver() {
    if (playerScore === 5 || computerScore === 5) {
        gameOverH1.classList.remove('hidden');
        resetButton.classList.remove('hidden');
        scoreResult.textContent = playerScore === 5 ? 'Player Wins!' : 'Computer Wins!';
        buttons.forEach(button => button.classList.add('disabled'));
        gameOver = true;
    }
}

// for each button, if clicked playRound()
buttons.forEach(button => button.addEventListener('click', () => playRound(button.dataset.choice)));

// reset if clicked
resetButton.addEventListener('click', () => location.reload());