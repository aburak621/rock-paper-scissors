let options = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

for (let i = 0; i < 10; i++) {
    console.log(computerPlay());
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} draws with ${computerSelection}`
    } else if ((options.indexOf(playerSelection) + 2) % 3 === options.indexOf(computerSelection)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}