const getComputerChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * 3)];
};

const playRound = (computerChoice) => {
  let playerChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();
  if (computerChoice === playerChoice) {
    console.log(`Its a Tie! You both chose ${playerChoice}`);
    return 0;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    console.log(`You Win! Paper beats rock`);
    return 1;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    console.log(`You Lose! Rock beats scissors`);
    return 2;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    console.log(`You Lose! Paper beats Rock`);
    return 2;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    console.log(`You Win! Scissors beats paper`);
    return 1;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    console.log(`You Win! Rock beats Scissors`);
    return 1;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    console.log(`You Lose! Scissors beats Paper`);
    return 2;
  } else {
    console.log("Please enter either Rock, Paper or Scissors. You lose");
    return 0;
  }
};
