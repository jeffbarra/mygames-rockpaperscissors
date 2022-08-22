// Store ALL Variables in the DOM

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Assign random number to each computer choice

function getComputerChoice() {
  const choices = ["✊", "✋", "✌️"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// When user wins - adds 1 to user score

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${userChoice} Beats ${computerChoice} ➡ You Win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${computerChoice} Beats ${userChoice} ➡ You Lose!`;
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `You Both Chose ${computerChoice}`;
}

// Define game function
// When user clicks buttons (below), then the getComputerChoice function will run

// When user clicks, compare to computer's choice and determine if you win, lose or draw
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "✌️✋":
    case "✋✊":
    case "✊✌️":
      win(userChoice, computerChoice);
      break;
    case "✊✋":
    case "✋✌️":
    case "✂️✊":
      lose(userChoice, computerChoice);
      break;
    case "✊✊":
    case "✋✋":
    case "✌️✌️":
      draw(userChoice, computerChoice);
      break;
  }
}

// Add Event Listeners to each button
// When user clicks buttons, game function (game(userChoice)) from above will run

function main() {
  rock_div.addEventListener("click", function () {
    game("✊");
  });

  paper_div.addEventListener("click", function () {
    game("✋");
  });

  scissors_div.addEventListener("click", function () {
    game("✌️");
  });
}

main();
