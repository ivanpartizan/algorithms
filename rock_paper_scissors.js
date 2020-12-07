const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log(`Error, ${userInput} is not valid.`);
  }
};

// getUserChoice('rock')

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

// getComputerChoice()

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `You chose ${userChoice}, computer chose ${computerChoice} - TIE GAME`;
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return `You chose ${userChoice}, computer chose ${computerChoice} - COMPUTER WON`;
    } else {
      return `You chose ${userChoice}, computer chose ${computerChoice} - YOU WON`;
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return `You chose ${userChoice}, computer chose ${computerChoice} - YOU WON`;
    } else {
      return `You chose ${userChoice}, computer chose ${computerChoice} - COMPUTER WON`;
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return `You chose ${userChoice}, computer chose ${computerChoice} - COMPUTER WON`;
    } else {
      return `You chose ${userChoice}, computer chose ${computerChoice} - YOU WON`;
    }
  }
  if (userChoice === "bomb") {
    return `You chose ${userChoice}, computer chose ${computerChoice} - YOU WIN ALWAYS`;
  }
};

const playGame = () => {
  let userChoice = getUserChoice("scissors");
  console.log(`You chose ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
