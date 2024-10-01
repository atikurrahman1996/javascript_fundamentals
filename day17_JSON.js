const data = require("./SampleData.json");

//JSON stands for JavaScript Object Notation
//standard text-based format for representing structured data based on JavaScript object syntax.
//It is commonly used for transmitting data in web applications

// Accessing JSON Data

//console.log(data);

//console.log(data.friends[0]);

//console.log(data.friends[3].name);

// Modify JSON Data

//data.friends[0].age = 35;
//console.log(data.friends[0]);

// delete JSON data

//delete data.friends[0].age;
//console.log(data.friends[0]);

// conversion between js and json
//Syntax:
//JSON.stringify(value);
//JSON.stringify(value, replacer);
//JSON.stringify(value, replacer, space);

//Use the JavaScript function JSON.parse() to convert json text into a JavaScript object:

// Convert JSON to Obj
//JSON.parse():

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);
console.log(myArr);

//Date objects are not allowed in JSON. If you need to include a date, write it as a string.

const text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj2 = JSON.parse(text2);
obj.birth = new Date(obj2.birth);
console.log(obj2);

// Convert Obj to JSON
//JSON.stringify():

const obj3 = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj3);
console.log(myJSON);

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON2 = JSON.stringify(arr);

console.log(myJSON2);

//JSON.stringify() static method converts a JavaScript value to a JSON string

console.log(JSON.stringify({ x: 5, y: 6 })); // Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String("false"), new Boolean(false)])
);

// Expected output: '[3,"false",false]'

console.log(
  JSON.stringify({
    x: [10, undefined, function () {}, Symbol("")],
  })
);
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2024, 9, 23, 15, 4, 5)));
// Expected output: "2024-10-23T09:04:05.000Z"
