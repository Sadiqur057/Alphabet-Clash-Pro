function continueGame() {
  // get random alphabet
  const alphabet = getRandomAlphabet();
  setElementById("current-alphabet", alphabet);
  console.log(alphabet);
}

function play() {
  hideElementsById("home-screen");
  showElementsById("play-ground-screen");
  continueGame();
}
