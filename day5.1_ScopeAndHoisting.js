/*Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

Block scope
Function scope
Global scope

Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

*/

// Block Scope

{
  let x = 2;
  console.log(x);
}
// x can NOT be used here

// Function Scope

function myFunction() {
  const carName = "Volvo"; // Function Scope
  console.log(carName);
}

// Global Scope

let carName2 = "Volvo";
console.log(carName2);

//JavaScript Hoisting
//Hoisting is JavaScript's default behavior of moving declarations to the top.
//a variable can be used before it has been declared.

//Example:1 and Example:2 will be the same result

x = 5; // Assign 5 to x
console.log(x); // Output: 5
//var x; // Declare x

var x; // Declare x
x = 5; // Assign 5 to x
console.log(x); //Output : 5

//To avoid bugs, always declare all variables at the beginning of every scope.
