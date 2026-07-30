let numGuess, tries, maxScore, startTime, highScore = 0;

function startGame() {
  numGuess = Math.floor(Math.random() * 20) + 1;
  tries = 0;
  maxScore = 100;
  startTime = new Date().getTime();
  document.getElementById("tries").textContent = tries;
  document.getElementById("time").textContent = 0;
  document.getElementById("score").textContent = 0;
  document.getElementById("message").textContent = "";
}

function makeGuess() {
  let guess = parseInt(document.getElementById("guessInput").value);
  tries++;
  document.getElementById("tries").textContent = tries;

  if (guess > numGuess) {
    document.getElementById("message").textContent = "Too high!";
  } else if (guess < numGuess) {
    document.getElementById("message").textContent = "Too low!";
  } else {
    let endTime = new Date().getTime();
    let totalTime = Math.floor((endTime - startTime) / 1000);
    let score = maxScore - (tries - 1) * 10 - totalTime;
    if (score < 0) score = 0;

    document.getElementById("message").textContent = `🎉 Correct! ${numGuess} is the number!`;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = totalTime;

    if (score > highScore) {
      highScore = score;
      document.getElementById("highScore").textContent = highScore;
      document.getElementById("message").textContent += " 🏆 New High Score!";
    }
    return; // Stop after correct guess
  }

  // Give hint on 3rd wrong try
  if (tries === 3 && guess !== numGuess) {
    if (numGuess % 2 === 0) {
      document.getElementById("message").textContent += " (Hint: It's even!)";
    } else {
      document.getElementById("message").textContent += " (Hint: It's odd!)";
    }
  }

  if (tries >= 5 && guess !== numGuess) {
    document.getElementById("message").textContent = `😢 Game Over! The number was ${numGuess}.`;
  }
}

function resetGame() {
  startGame();
}

// Start automatically on page load
startGame();
