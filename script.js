let options = ["Rock", "Paper", "Scissors"]
let resultDiv = document.querySelector("#results");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.textContent;
    let winner = playRound(playerSelection, computerPlay());
    if (winner === "player") {
      player.textContent = parseInt(player.textContent) + 1;
      if (parseInt(player.textContent) === 5) {
        gameOver("Player");
      }
    } else if (winner === "computer") {
      computer.textContent = parseInt(computer.textContent) + 1;
      if (parseInt(computer.textContent) === 5) {
        gameOver("computer");
      }
    }
  })
})

function gameOver(winner) {
  let congrats = document.querySelector(".congrats");
  congrats.textContent = `${winner} wins!`;
}

function computerPlay() {
  return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultDiv.appendChild(
      document.createTextNode(
        `Draw! ${playerSelection} draws with ${computerSelection}`
      )
    );
    resultDiv.appendChild(document.createElement("br"));
    return "draw";
  } else if (
    (options.indexOf(playerSelection) + 2) % 3 ===
    options.indexOf(computerSelection)
  ) {
    // If the index of computers selection of 2 more from the player's (including wrap), then the player wins.
    resultDiv.appendChild(
      document.createTextNode(
        `You Win! ${playerSelection} beats ${computerSelection}`
      )
    );
    resultDiv.appendChild(document.createElement("br"));
    return "player";
  } else {
    resultDiv.appendChild(
      document.createTextNode(
        `You Lose! ${computerSelection} beats ${playerSelection}`
      )
    );
    resultDiv.appendChild(document.createElement("br"));
    return "computer";
  }
}

// function game() {
//   let playerScore = 0
//   let computerScore = 0
//
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("What is your selection?")
//     let result = playRound(playerSelection, computerPlay())
//
//     if (result === "player") {
//       playerScore++
//     } else if (result === "computer") {
//       computerScore++
//     }
//   }
//
//   if (playerScore > computerScore) {
//     console.log("You won the game!")
//   } else if (playerScore < computerScore) {
//     console.log("You lost the game!")
//   } else {
//     console.log("You draw with the computer!")
//   }
// }
