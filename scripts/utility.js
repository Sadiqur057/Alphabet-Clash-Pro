function hideElementsById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementsById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabets.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}


function setTextElementById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  return elementText;
}

function getElementTextValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementTextValue = parseInt(elementText);
  return elementTextValue;
}
