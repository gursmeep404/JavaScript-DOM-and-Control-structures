document.body.children[1].children[0].href = "https://google.com";
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link");
anchorElement.href = "https://academind.com";

// Add an element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to google";
let firstPragraph = document.querySelector("p");
firstPragraph.append(newAnchorElement);

//Remove an element

let firstH1Element = document.querySelector("h1");
firstH1Element.remove();

// firstH1Element.parentElement.removeChild(firstH1Element);//for older browsers

//MOVE ELEMENTS

firstPragraph.parentElement.append(firstPragraph);

//innerHTML

console.log(firstPragraph.innerHTML);

firstPragraph.innerHTML = "Hi! This is <strong>important</strong>.";
