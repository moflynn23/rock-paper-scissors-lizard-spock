// cache the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".scoreboard");
//const result_p = document.querySelector(".result > p");

function getResult(userChoice, computerChoice, result) {
    if (result === "draw") {
        //result_p.innerHTML = `${convertToWord(playerChoice)} equals ${convertToWord(computerChoice)}. You draw.`;
    } else if (result === "win") {
        userScore++;    // increment user score
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        //result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    } else {
        computerScore++;    // increment computer score
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        //result_p.innerHTML = `${convertToWord(playerChoice)} loses to ${convertToWord(computerChoice)}. You lose.`;
    }
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
        getResult(playerChoice, computerChoice, "draw");
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        getResult(playerChoice, computerChoice, "win");
        result = "You win!";
    } else {
        getResult(playerChoice, computerChoice, "lose");
        result = "Computer wins!";
    }
    // Display result
    document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  }