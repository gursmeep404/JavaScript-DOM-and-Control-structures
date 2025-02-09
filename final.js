let newText = document.querySelector("input");
let remainingChar = document.getElementById("num");

let maxAllowedChars = newText.maxLength;

function listen(event) {
  let enteredText = event.target.value; // newText.value
  let textLength = enteredText.length;

  let remainingCharacters = maxAllowedChars - textLength;
  remainingChar.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingChar.classList.add("error");
    newText.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingChar.classList.add("warning");
    newText.classList.add("warning");
    remainingChar.classList.remove("error");
    newText.classList.remove("error");
  } else {
    remainingChar.classList.remove("warning");
    newText.classList.remove("warning");
  }
}

newText.addEventListener("input", listen);
