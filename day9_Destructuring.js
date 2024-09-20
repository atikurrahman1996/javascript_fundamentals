//array destructuring
let numbers = [10, 20, 30, 40, 50];
let [num1, num2, num3, num4, num5] = numbers;
console.log(num1);
console.log(num2);

// Using spread operator
let [x, y, ...z] = numbers;
console.log(z);

//object destructuring

const user = {
  id: 112,
  firstName: "Atik",
  age: 27,
};

const { firstName } = user;
console.log(firstName);

//object destructuring
const student1 = {
  id: 101,
  fullName: "Anisul Islam",
  gpa: 3.92,
};

//we can also set default values of an object that does not exist
let { id, fullName, gpa, country = "Bangladesh" } = student1;

console.log(fullName);
console.log(country);
