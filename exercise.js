// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

// let saveElement = document.body.firstElementChild;
// console.dir(saveElement);

console.dir(document);
let saveElement = document.body.children[0];
console.dir(saveElement);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)

console.dir(saveElement.parentElement);
console.dir(saveElement.nextElementSibling);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)

let newVar = document.getElementById("Choose");
console.dir(newVar);
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice

let newVar2 = document.querySelector(".meme");
console.dir(newVar2);

// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

newVar2.textContent = "Heya. Me new here";
console.dir(newVar2);
