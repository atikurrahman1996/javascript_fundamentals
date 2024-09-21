//A string in JavaScript is a sequence of characters enclosed in either single or double quotes.
//For example, "Hello World", Hello World', "Rahim", 'Karim', 'Atik'

//length - This method returns the number of characters in a string.

var str = "Hello World";
console.log(str.length);

//concat - This method is used to concatenate (combine) two or more strings.

var str1 = "Hello";
var str2 = " World";
console.log(str1.concat(str2));

//indexOf - This method is used to find the index of a specific character or substring in a string.

var str = "Hello World";
console.log(str.indexOf("W"));

//slice - This method is used to extract a portion of a string. For example, the following code will return "World":

var str = "Hello World";
console.log(str.slice(6));

//replace - This method is used to replace a specific character or substring in a string.
var str = "Hello World";
console.log(str.replace("World", "Universe"));

//toUpperCase and toLowerCase - These methods are used to convert a string to uppercase or lowercase letters.
var str = "Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
