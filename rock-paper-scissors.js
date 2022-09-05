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
      return "Better luck next time."
    } else {
      return "You win!"
    }
  } else {
    if (computerSelection==="rock") {
      return "Better luck next time."
    } else {
      return "You win!"
    }
  }
}

function game(playerSelection) {
  let computerSelection = getComputerChoice();
  return [playRound(playerSelection, computerSelection), computerSelection];
}

function updateResults(res, text) {
  let resultsDiv = document.getElementById('results')
  if (!resultsDiv.hasChildNodes()) {
    let para = document.createElement('p');
    let node = document.createTextNode(
      `You chose: ${text}. The computer chose: ${res[1]}. ${res[0]}`
      );
    para.appendChild(node);
    resultsDiv.appendChild(para);
  } else {
    let para = resultsDiv.firstChild
    para.innerText = `You chose: ${text}. The computer chose: ${res[1]}. ${res[0]}`;
  }
}

function updateScore(res) {
  if (res[0] === 'You win!') {
    playerScore += 1;
  } else if (res[0] === 'Better luck next time.') {
    computerScore += 1;
  }
  let updatedComputerScore = document.getElementById('computer');
  let updatedPlayerScore = document.getElementById('player');

  updatedComputerScore.innerText = `${computerScore}`;
  updatedPlayerScore.innerText = `${playerScore}`;
}

function removeText() {

}
function startGame() {
  const buttons = document.querySelectorAll('button');

  buttons.forEach((btn) =>
    btn.addEventListener('click', () => {
      res = game(btn.innerText);
      updateResults(res, btn.innerText);
      updateScore(res);
    }
    )
  );
}

startGame()
