let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const inputElement = document.getElementById('guess');
  const feedbackElement = document.getElementById('feedback');
  let guess = Number(inputElement.value);
  if (guess === randomNumber) {
    feedbackElement.innerHTML = "Wow you are right!";
    feedbackElement.style.color = "green"; // Success color
  } else if (guess < randomNumber) {
    feedbackElement.innerHTML = "Too low! Try again";
    feedbackElement.style.color = "red";
  } else if (guess > randomNumber) {
    feedbackElement.innerHTML = "Too high! Try again.";
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerHTML = "Please enter a valid number.";
    feedbackElement.style.color = "red";
  }
}