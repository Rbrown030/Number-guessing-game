let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function will create a random number between 0 and 9 (1-8) for the target number.
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

// This function will determine which player had the closer guess to the target number.
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  const humanDistance = getAbsoluteDistance(humanGuess, targetNumber);
  const computerDistance = getAbsoluteDistance(computerGuess, targetNumber);
  return (humanDistance === computerDistance) ? true : (humanDistance < computerDistance) ? true : false; 
}

// This function is going to increase the winners score by one point after each round
const updateScore = (winner) => {
  return 'human' ? humanScore ++ : computerScore ++;
}

// This function will increase the round number by one after each round.
const advanceRound = () => {
  return currentRoundNumber ++;
}
console.log(advanceRound());

// This function returns the distance of two input numbers.
const getAbsoluteDistance = (num1, num2) => {
  if ((num1 && num2 > 0) && (num1 && num2 < 9)){
    return Math.abs(num2 - num1);
  }
  else{
    alert('That number is out of range. Please select a number between 0 and 9.')
  }
}
