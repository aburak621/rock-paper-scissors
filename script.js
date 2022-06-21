let options = ["Rock", "Paper", "Scissors"]

function computerPlay() {
  return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

  if (playerSelection === computerSelection) {
    console.log(`Draw! ${playerSelection} draws with ${computerSelection}`);
    return 'draw';
  } else if ((options.indexOf(playerSelection) + 2) % 3 === options.indexOf(computerSelection)) {
    // If the index of computers selection of 2 more from the player's (including wrap), then the player wins.
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 'player';
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 'computer';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What is your selection?");
    let result = playRound(playerSelection, computerPlay());

    if (result === 'player') {
      playerScore++;
    } else if (result === 'computer') {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("You draw with the computer!");
  }
}

game();
