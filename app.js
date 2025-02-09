let paragraphElement = document.querySelector("p");

function changePragraphText() {
  paragraphElement.textContent = "Clicked"; //preferably don't use variables defined outside the fxn without passing
  console.log("Paragraph clicked");
}

paragraphElement.addEventListener("click", changePragraphText);

let textElement = document.querySelector("input");

function updateKeystroke(event) {
  //   let enteredText = textElement.value;
  let enteredText = event.target.value;
  //   let enteredText = event.data; //This is different
  console.log(enteredText);
  console.log(event);
}

textElement.addEventListener("input", updateKeystroke);
