function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // Determine the winner
    let result;
    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
      (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
    // Display result
    document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  }