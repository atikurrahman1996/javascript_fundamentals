// example of synchronous js: js is single threaded, By default synchronous programming language.
// tasks will be added in call stack, when one task is done then it will moved to the next one (LIFO)
// Asynchronous code does not have to wait; the program can continue to run

//synchronous

const taskOne = () => {
  console.log("Task 1");
};

const taskTwo = () => {
  console.log("Task 2");
};
const taskThree = () => {
  console.log("Task 3");
};
const taskFour = () => {
  console.log("Task 4");
};

taskOne();
taskTwo();
taskThree();
taskFour(); //output: Task 1, Task 2, Task 3, Task 4

//Asynchronous

const taskFive = () => {
  console.log("Task 5");
};

const taskSix = () => {
  setTimeout(() => {
    console.log("Task 6, Data Loading for 3 sec");
  }, 3000);
};
const taskSeven = () => {
  console.log("Task 7");
};
const taskEight = () => {
  setTimeout(() => {
    console.log("Task 8, Data Loading for 5 sec");
  }, 5000);
};

const taskNine = () => {
  console.log("Task 9");
};

taskFive();
taskSix();
taskSeven();
taskEight();
taskNine(); // output:Task 5, Task 7, Task 9, Task 6, Task 8

/*
//Remember: 
In synchronous programming, one thing happens at a time. 
When we call a function that performs a long-running action, it returns a result when the action has finished. 
This stops the program for the time the action takes. In contrast, asynchronous programming allows multiple things 
to happen at the same time. When we start an action, the program continues to run. When the action finishes, 
the program is informed and gets the result.

In synchronous programming, where the request function returns only after it has done its work. 
To perform this task, we make the requests one after the other. Here the drawback is that the second request 
will be started only when the first has finished.
Asynchronous code does not have to wait; the program can continue to run. The asynchronous programming makes it 
possible to express waiting for long-running actions without stopping the program during these actions. 
JavaScript usually implements this style of programming using callbacks.
Asynchronous programming is made easier by using promises, 
*/
