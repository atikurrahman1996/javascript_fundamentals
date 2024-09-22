// Error handling -> try , catch, finally , throw
// try ... catch handle run time errors (program which is runable), but not syntax error
// Error object
// The finally statement -> execute code, after try and catch

try {
  // code test
  console.log("Hi Everyone");
  console.log(x); // This will cause a ReferenceError because x is not defined
  console.log("Not gonna work");
} catch (err) {
  console.log("An error occurred:", err.message);
} finally {
  console.log("Bye Everyone");
}

try {
  console.log("Hi Everyone");
  let x = 5; // Define x
  console.log(x);
  console.log("Everything works fine!");
} catch (err) {
  console.log("An error occurred:", err.message);
} finally {
  console.log("Bye Everyone");
}

try {
  let number = 10;
  let divideBy = 0;

  if (divideBy === 0) {
    throw new Error("You can't divide by zero!"); // Custom error
  }

  let result = number / divideBy;
  console.log(result);
} catch (err) {
  console.log("Error: " + err.message); // This will show the error message
} finally {
  console.log("This runs no matter what!"); // This always runs
}
