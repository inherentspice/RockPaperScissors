let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  const randomizer = Math.floor(Math.random() * 3);

  if (randomizer === 0) {
    return "rock"
  } else if (randomizer === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  if (playerSelection === computerSelection) {
    return "Tie game!"
  }

  if (playerSelection==="scissors") {
    if (computerSelection === "rock") {
      return "Better luck next time."
    } else {
      return "You win!"
    }
  } else if (playerSelection==="rock") {
    if (computerSelection==="paper") {
      return "Better luck next time"
    } else {
      return "You win!"
    }
  } else {
    if (computerSelection==="rock") {
      return "Better luck next time"
    } else {
      return "You win!"
    }
  }
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  return [playRound(playerSelection, computerSelection), computerSelection];
}

// function updateResults() {

// }
function startGame() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      res = game(btn.innerText);

      let resultsDiv = document.getElementsByClassName('results')[0];
      let para = document.createElement('p');
      let node = document.createTextNode(
        `You chose: ${btn.innerText}. The computer chose: ${res[1]}. ${res[0]}`
        );
      para.appendChild(node);
      resultsDiv.appendChild(para);
    }
    )
  );
}

startGame()
