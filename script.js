let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 9;

function checkGuess() {
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');
  while (attempts >= 0) {
    let guess = Number(inputElement.value);
    if (guess === randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "Wow you are right!";
      feedbackElement.style.color = "green"; // Success color
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML =
        `Too low! Try again! <br> number of attempt left ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    } else if (guess > randomNumber) {
      feedbackElement.innerHTML =
        `Too high! Try again! <br> number of attempt left ${attempts}`;
      feedbackElement.style.color = "red";
      break;
    } else {
      feedbackElement.innerHTML = "Please enter a valid number.";
      feedbackElement.style.color = "red";
      break;
    }
  }
  if (attempts === 0 && guess !== randomNumber) {
    feedbackElement.innerHTML =
      "You could'not guess the number <br> *** Game Over ****";
    feedbackElement.style.color = "red";
  }
  attempts -= 1;
}