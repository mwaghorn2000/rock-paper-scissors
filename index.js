let container = document.getElementById("score-board");
let h2 = document.createElement("h2");
container.appendChild(h2);

const playRound = (playerChoice) => {
  const choice = ["rock", "paper", "scissors"];
  let computerChoice = choice[Math.floor(Math.random() * 3)];
  console.log(playerChoice);
  if (computerChoice === playerChoice) {
    h2.textContent = `Its a Tie! You both chose ${playerChoice}`;
    return 0;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    h2.textContent = `You Win! Paper beats rock`;
    return 1;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    h2.textContent = `You Lose! Rock beats scissors`;
    return 2;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    h2.textContent = `You Lose! Paper beats Rock`;
    return 2;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    h2.textContent = `You Win! Scissors beats paper`;
    return 1;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    h2.textContent = `You Win! Rock beats Scissors`;
    return 1;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    h2.textContent = `You Lose! Scissors beats Paper`;
    return 2;
  }
};

const gameScore = (result) => {
  let playerScore = document.getElementById("player-score");
  let cpuScore = document.getElementById("cpu-score");
  let gameOver = false;
  if (playerScore.innerText > 4 || cpuScore > 4) {
    return;
  }
  if (result == 0) {
    // tie
    return;
  } else if (result == 1) {
    // win
    playerScore.textContent++;
    if (playerScore.textContent > 4) {
      h2.textContent = "You WIN!";
      return;
    }
  } else if (result == 2) {
    // loss
    cpuScore.textContent++;
    if (cpuScore.textContent > 4) {
      h2.textContent = "You LOSE!";
      return;
    }
  }
};

const play = (input) => {
  if (
    document.getElementById("player-score").innerText > 4 ||
    document.getElementById("cpu-score").innerText > 4
  ) {
    return;
  }
  let result = playRound(input);
  gameScore(result);
};

document.getElementById("rock").addEventListener("click", function () {
  play("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  play("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  play("scissors");
});
