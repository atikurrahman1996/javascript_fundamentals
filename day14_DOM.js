// Open Index2.html file see the result.

/*
DOM: It allows developers to access and manipulate the elements of the web page, as well as the 
Document Object Model (DOM) tree that represents the structure of the web page.
One of the most commonly used methods of the document object is the getElementById() method. 
This method allows developers to access a specific element on the web page by its unique ID.
*/

//getElementById

//document.getElementById("dom").innerHTML = "Hello World";
document.getElementById("dom").innerHTML =
  "This is my new text, identified through getElementsById";

let myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "This is getElementsById";

//getElementsByClassName
//The getElementsByClassName() method is a part of the JavaScript document object and it
//allows developers to access multiple elements on a web page by their class name

let elements = document.getElementsByClassName("myClass");
for (let i = 0; i < elements.length; i++) {
  elements[i].innerHTML = "This is getElementsByClassName";
}

//getElementsByName
//The getElementsByName() method is a part of the JavaScript document object and it allows developers to access
//multiple elements on a web page by their name attribute

let elements2 = document.getElementsByName("myName");
for (let i = 0; i < elements.length; i++) {
  elements2[i].value = "This is getElementsByName";
}

//getElementsByTagName
//The getElementsByTagName() method is a part of the JavaScript document object and
//it allows developers to access multiple elements on a web page by their HTML tag name.

// let elements3 = document.getElementsByTagName("p");
// for (let i = 0; i < elements3.length; i++) {
//   elements3[i].innerHTML = " This is getElementsByName";
// }

// To see the getElementsByTagName result, just uncomment the above code

/*
innerHTML
The innerHTML property is a part of the JavaScript HTMLElement object and it allows developers to access and 
manipulate the HTML content of an element. The innerHTML property returns the content between the opening and 
closing tags of an element, as a string of HTML.

For example, consider the following HTML code:

<div id="myDiv">
    <p>This is my paragraph</p>
    <p>This is my paragraph</p>
</div>
The following JavaScript code can be used to access the content of the <div> element with the ID "myDiv" and 
change its text:

let myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "<p>This is my new text</p>";

The innerHTML property is a powerful tool for manipulating the HTML content of an element. 
Developers can use it to add, remove, or replace elements, as well as change the text and attributes of 
existing elements.
*/
