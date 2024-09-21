/*
A callback is a function that is executed after another function has finished executing. 
Functions can take functions as arguments and can be returned by other functions. 
Functions that take another function as an argument are called higher-order functions. So, the callback function 
can also be defined as any function that is passed as an argument is called a callback function.
// using callback we can make our code non blocking
*/

// Callback function

const printSquare = (x) => {
  console.log(`The square ${x} is: ${x * x}`);
};

const square = printSquare;
square(10);

//How to create a Callback:- Suppose we want to log a message to the console but it should be there after 5 seconds.

function myMessage() {
  setTimeout(() => {
    console.log(`This is callback function`);
  }, 5000);
}
myMessage();

// Callback function

function addition(x, y, callback) {
  setTimeout(() => {
    console.log(`The sum of ${x} and ${y} is ${x + y}.`);
    callback();
  }, 5000);
}

// display() function is called just after the ending of addition() function
function display() {
  console.log("Numbers added!");
}

// Calling addition() function and display
addition(5, 5, display);
