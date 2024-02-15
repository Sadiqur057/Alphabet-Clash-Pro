function hideElementsById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementsById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphabet(){
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabets.split('');
  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}

function setElementById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}