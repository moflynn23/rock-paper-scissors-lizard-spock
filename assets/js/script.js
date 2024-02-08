// cache the DOM
let userScore = 0;
let computerScore = 0;
let difficultyLevel = document.getElementById('level').value;
let bestOf = document.getElementById('best_of').value;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".scoreboard");
const moves_div = document.getElementById("moves");

// Reset scores and scoreboard.
function resetScore() {
    
    // reset scores
    userScore = 0;
    computerScore = 0;

    // reset scoreboard
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    // Make your move.
    moves_div.innerHTML = "Make your move."
}

// Check if best of score met and if so show alert and call resetScore function.
function getBestOf() {

     // best of value selected
     bestOf = document.getElementById('best_of').value;

     if (userScore >= bestOf && userScore != computerScore) {

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                alert('Game over. You win!');
                resetScore();
            });
        });
        
    } else if (computerScore >= bestOf && userScore != computerScore) {

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                alert('Game over. You lose.');
                resetScore();
            });
        });
    } else {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                alert("Game over. It's a draw.");
                resetScore();
            });
        });
    }
}

// Check result, increment scores, update scoreboard, results message and add glow to scoreboard.
function getResult(userChoice, computerChoice, result) {

    // difficulty level value selected
    difficultyLevel = document.getElementById('level').value;
    
    if (result === "win") {
        userScore++;    // increment user score
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        moves_div.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
        scoreBoard_div.classList.add('green-glow');
        setTimeout(function() { scoreBoard_div.classList.remove('green-glow') }, 600);
        getBestOf();
    } else if (result === "lose") {
        // loop through difficulty level number
        for(let i=0; i<difficultyLevel; i++) {
            computerScore++;    // increment computer score
        }
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        moves_div.innerHTML = `${userChoice} loses to ${computerChoice}. You lose.`;
        scoreBoard_div.classList.add('red-glow');
        setTimeout(function() { scoreBoard_div.classList.remove('red-glow') }, 600);
        getBestOf();
    } else {
        moves_div.innerHTML = `${userChoice} draws with ${computerChoice}. It's a draw.`;
        scoreBoard_div.classList.add('gray-glow');
        setTimeout(function() { scoreBoard_div.classList.remove('gray-glow') }, 600);
    }
}

// Compare user choice vs computer choice to see who wins.
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
    //document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  }