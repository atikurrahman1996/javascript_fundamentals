//Map - The map method is used to create a new array with the result of a callback function called on each element in the original array. The callback function takes one argument, the current element, and returns the new value for that element.
//For example, the following code will return an array of each element multiplied by 2:

var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function (element) {
  return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

let numbers = [1, 2, 3, 4, 5];

let result = numbers.map((number) => {
  return 2 * number;
});
console.log(result);

let officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];

let officersIds = officers.map(function (officer) {
  return officer.id;
});
console.log(officersIds);

//Filter - The filter method is used to filter an array based on a certain condition.

var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function (element) {
  return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

let numbers2 = [10, 20, 30, 40, 50];

let result2 = numbers2.filter((number) => {
  return number > 10;
});

console.log(result2); // Output: [20, 30, 40, 50]
