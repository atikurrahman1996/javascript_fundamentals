//Let and Const:
//let: Block-scoped variable declaration that can be reassigned.
//const: Block-scoped variable declaration that cannot be reassigned.

Example: 1;
// Using let
let count = 0;
count = 1; // Valid

// // Using const
// const name = "Alice";
// name = "Bob"; // Error: Assignment to constant variable.

//Arrow function   Syntax: const x = (x, y) => x * y;
//Example-1
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

//Example-2
const x = (x, y) => {
  return x * y;
};
console.log(x(5, 6));

//Example-3
const y = 5;
const z = 6;
const multiply = () => {
  return y * z;
};
console.log(multiply(y, z));

//Example-4

// Arrow Function Equivalent

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const evenNumbersArrow = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbersArrow); // Output: [2, 4, 6]

const oddNumbersArrow = numbers.filter((number) => number % 3 === 0);
console.log(oddNumbersArrow); // Output: [2, 4, 6]

//Template Literals

const firstName = "Alice";
const greeting = `Hello, ${firstName}`; // "Hello, Alice!"
console.log(greeting);

const fullName = "atikur rahman";
const message = `I am ${fullName}, learning javascript`;
console.log(message);

//Spread and Rest Operators:
//Spread (...): Expands elements of an iterable (like arrays) or properties of an object.
//Rest (...): Collects multiple elements into a single array or object property.

// Spread Operator (...)
const number = [1, 2, 3];
const fruits = ["apple", "banana", "orange"];

// Combining arrays using spread operator
const combinedArray = [...number, ...fruits];
console.log(combinedArray); // Output: [1, 2, 3, "apple", "banana", "orange"]

// Creating a new object with spread operator
const person = { name: "Alice", age: 30 };
const updatedPerson = { ...person, city: "New York" };
console.log(updatedPerson); // Output: { name: 'Alice', age: 30, city: 'New York' }

const numbers1 = [1, 2, 3];
const numbers2 = [1, 2, 3];

var totalNumbers = numbers1.concat(numbers2);
console.log(totalNumbers);

// Rest Operator (...)

function myFunction(...parameters) {
  console.log(parameters);
}
myFunction(5, 6, 7, 8, 9);

function sum2(x, y, ...z) {
  console.log(`x= ${x}, y=${y}, z=${z}`);
}
sum2(10, 20, 30, 50, 50, 60, 70);

function sum(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// for...of and for...in

const names = ["atik", "israt", "jahan", "srity"];
for (let name of names) {
  console.log(name);
}

//for...in

let students = {
  ID: 101,
  name: "atik2",
  cgpa: 3.72,
};

for (let x in students) {
  //console.log(x);
  console.log(students[x]); // if want to see the values
}
