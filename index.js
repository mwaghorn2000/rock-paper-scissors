const playRound = (playerChoice) => {
  const choice = ["rock", "paper", "scissors"];
  let computerChoice = choice[Math.floor(Math.random() * 3)];
  console.log(playerChoice);
  let container = document.querySelector("div");
  let h2 = document.createElement("h2");
  if (computerChoice === playerChoice) {
    h2.textContent = `Its a Tie! You both chose ${playerChoice}`;
    container.appendChild(h2);
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    h2.textContent = `You Win! Paper beats rock`;
    constainer.appendChild(h2);
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    h2.textContent = `You Lose! Rock beats scissors`;
    container.appendChild(h2);
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    h2.textContent = `You Lose! Paper beats Rock`;
    container.appendChild(h2);
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    h2.textContent = `You Win! Scissors beats paper`;
    container.appendChild(h2);
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    h2.textContent = `You Win! Rock beats Scissors`;
    container.appendChild(h2);
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    h2.textContent = `You Lose! Scissors beats Paper`;
    container.appendChild(h2);
  }
};

document.getElementById("rock").addEventListener("click", function () {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors");
});
