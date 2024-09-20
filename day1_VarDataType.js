console.log("I love javascript");

//Variables

//let name = "Atik";
//console.log(name);

// let firstNme = "Atik";
// let secondNme = "Ariyan";
// let fullName = "Atik" + "  " + "Ariyan";
// console.log(fullName);

let firstNme = "Israt";
let secondNme = "Jahan";
let thirdName = "Srity";
let fullNme = "Israt" + " " + "Jahan" + " " + "Srity";
console.log(fullNme);

let fullName = "Israt".concat(" ", "Jahan", " ", "Srity"); // using concat method
console.log(fullNme);

//DataType
//JavaScript has 8 Datatypes: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object

let name = "Atik"; // String
let age = 30; // Number
let isApproved = true; // Boolean could be true or false
let firstN; // undefined
let selectedColor = null;

// Object

let person = {
  name: "Atik",
  age: 30,
};

console.log(person);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(person2);

//
// Create an Object
const person3 = new Object();

// Add Properties
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";
console.log(person3);

// Arrays

const cars = ["Saab", "Volvo", "BMW"];

//console.log(cars);
//console.log(cars[0]);
//console.log(cars[1]);
console.log(cars.length);

// Function

//A JavaScript function is a block of code, function is executed when "something" invokes it (calls it).
//Syntax: function name(parameter1, parameter2, parameter3) {
// code to be executed
//}

//Example: 1

// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;
}
console.log(x);
