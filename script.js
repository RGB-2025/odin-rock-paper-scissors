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

console.log(getHumanChoice());