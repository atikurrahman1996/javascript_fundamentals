// Array is an object, collection of variables, which can hold more than one value

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars.length);

// using push function to add elements
cars.push("Audi"); // Enclose Audi in quotes to define it as a string
console.log("The total number of cars after adding: " + cars);
console.log("The length of cars: " + cars.length);

//Array pop(): The pop() method removes the last element from an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitRemove = fruits.pop();
console.log(fruits);
//console.log(fruitRemove);

//Array shift() --               //The shift() method removes the first array element

const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruitsss.shift();
console.log(fruitsss);

//Array unshift()   --               The unshift() method adds a new element to an array

const fruitssss = ["Banana", "Orange", "Apple", "Mango"];
fruitssss.unshift("Lemon");
console.log(fruitssss);

// Array sorting

// how to sorting all of our  students name alphabetically

const students = ["Atik", "Ariyan", "Israt", "Jahan", "AAtik", "Jami"];
//console.log(students);
console.log(students.sort());

//Array at()

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruitss.at(2);
//let fruit = fruits[2];
//console.log(fruitss);
console.log(fruit);

// Changing elements

const fruitsEle = ["Banana", "Orange", "Apple", "Mango"];
fruitsEle[0] = "Graps";

console.log(fruitsEle);

//Array concat()

const myGirls = ["Israt", "Jahan"];
const aboutMe = ["Atik", "AR", "Rahman"];
const myLove = myGirls.concat(aboutMe);
console.log(myLove);

// 2D array

// Creating a 2D array representing a 3x3 matrix
let matrix = [
  [1, 2, 3], // Row 0
  [4, 5, 6], // Row 1
  [7, 8, 9], // Row 2
];

// Displaying the entire 2D array
console.log("Entire 2D Array:", matrix);

// Accessing elements in the 2D array
let firstElement = matrix[0][0]; // First row, first column
let middleElement = matrix[1][1]; // Second row, second column
let lastElement = matrix[2][2]; // Third row, third column

console.log("First Element:", firstElement); // Output: 1
console.log("Middle Element:", middleElement); // Output: 5
console.log("Last Element:", lastElement); // Output: 9
