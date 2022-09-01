function getComputerChoice() {
  const randomizer = Math.floor(Math.random() * 3);

  if (randomizer === 0) {
    return "rock"
  } else if (randomizer === 1) {
    return "raper"
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

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose paper, scissors, or rock")
    let computerSelection = getComputerChoice()

    console.log(playRound(playerSelection, computerSelection))
  }
}
