function handleKeyboardKeyPress(event) {
  const playerPressed = event.key;

  // if player pressed escape then game will be over
  if (playerPressed === "Escape") {
    gameOver();
  }
  const currentAlphabet = getElementTextById("current-alphabet");
  const expectedAlphabet = currentAlphabet.toLowerCase();
  let currentScore = getElementTextValueById("current-score");
  
  // if player pressed correct one then score will increase;
  if (playerPressed === expectedAlphabet) {
    currentScore += 1;
    setTextElementById("current-score", currentScore);

    // continue to next round
    removeBackgroundColorById(playerPressed);
    continueGame();

    // if player choose wrong answer then life will be deducted
  } else {
    console.log(currentScore);
    console.log("wrong");
    let currentLife = getElementTextValueById("current-life");
    currentLife -= 1;
    setTextElementById("current-life", currentLife);

    // game over when player has no life
    if (currentLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handleKeyboardKeyPress);

function gameOver() {
  hideElementsById("play-ground-screen");
  showElementsById("score-board-screen");

  // show the final score
  const finalScore = getElementTextById("current-score");
  setTextElementById("final-score", finalScore);

  // clear the highlight of the last selected text on keyboard
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}

function continueGame() {
  // get random alphabet
  const alphabet = getRandomAlphabet();
  setTextElementById("current-alphabet", alphabet);
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementsById("home-screen");
  hideElementsById("score-board-screen");
  showElementsById("play-ground-screen");

  // reset score
  setTextElementById("current-life", 5);
  setTextElementById("current-score", 0);

  continueGame();
}
