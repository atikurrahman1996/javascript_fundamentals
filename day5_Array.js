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
