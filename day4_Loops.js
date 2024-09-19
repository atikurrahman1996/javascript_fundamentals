// initialization, conditions, increment

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Descending order

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// increment > 2

for (let i = 2; i <= 10; i = i + 2) {
  console.log("Bangladesh");
}

// While Loop

//Syntax:
//while (condition) {
// code block to be executed
//}

let i = 1; // initialization
while (i <= 10) {
  // condition
  console.log("Bangladesh");
  i++; //increment
}

//Do-While Loop

// Syntax:
//do {
//   // code block to be executed
// } while (condition);

let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);

// Switch

//Syntax:

/*
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
*/

//Example:

let day; // Declare the variable

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break; // Add break to prevent falling through to default
  default:
    console.log(new Date().getDay());
    break;
}

console.log(day); // Print the day
