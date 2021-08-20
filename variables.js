console.log("Variables.js")
// Declare and assign values to 3 variables using each of the following keywords let, const, and var.
// Use console.log() to display the value of the variables in the browser's console.
let cards = "Magic";
console.log(cards);

const price = "$14.99";
console.log(price);

var edition = "legends";
console.log(edition)


// Change the value of the variables declared with the let and var. Print their new value to the console with console.log()
cards = "pokemon";
console.log(cards);

edition = "Pearl";
console.log(edition);

// What happens if you try to change the value of the variable declared with the const and print its new value to the console?
// it cannot change the const variable
// price = "$4.99";
// console.log(price);

//Why might you choose to use the const keyword?
// to make sure that variable cannot be changed.

// What is one reason it not best practice to use the var keyword?
// var is too broad a scope which an identifier is visible. best practice is to use let, which narrows the scope of the identifier