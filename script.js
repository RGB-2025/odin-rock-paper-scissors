// general functions

function capitalize(text) {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

// game functions

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
            return 1;
        case false:
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return -1;

        // Edge case: its not a valid move
        default:
            console.log('Invalid move! Please choose rock, paper, or scissors.');
            return null;
    }

    // new line
    console.log();
}

function playGame() {
    // initialization

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Randomize selections
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let round = playRound(humanSelection, computerSelection);

        // null means its invalid input
        while (round === null) {
            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();
            round = playRound(humanSelection, computerSelection);
        }

        // adds if wins or loses
        if (round == 1) {humanScore++} else if (round == -1) {computerScore++}

        console.log(`Score: ${humanScore} - ${computerScore}\n\n`)
    }

    console.log('\n\n\nGame Over!\n');

    // check if its a draw
    if (humanScore === computerScore) {
        console.log(`It\'s a draw! Both have a score of ${humanScore}.`);
        return;
    }

    if (humanScore > computerScore) {
        console.log(`You win! Your score ${humanScore} beats ${computerScore}.`);
    } else {
        console.log(`The computer wins! The computer's score ${computerScore} beats ${humanScore}.`);
    }
}

playGame();