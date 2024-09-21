/*
A promise in JavaScript is similar to a promises we do in real life. When we make a promise, 
it is a guarantee that in future, we are going to do something. A promise has two possible 
outcomes: it will be kept when the time comes, or it will not. Similarly, 
in JavaScript, when we define a promise, either it will be resolved when the time comes, or it will get rejected
A promise has three states:
pending: It is the initial state.
Fulfilled: It indicates that the promised operation was successful.
Rejected: It indicates that the promised operation was unsuccessful.
Syntax:let myPromise = new Promise(function(resolve, reject) {
// code here
});
 */
//then() method is called if the promise is resolved, and the catch() method is called when the promise is rejected.

const myPromise = new Promise(function (resolve, reject) {
  let myPromise = true;

  if (myPromise) {
    resolve("promise is completed ");
  } else {
    reject("promise is rejected");
  }
});
//console.log(myPromise);

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// if we want to see catch error result just make - myPromise = false

let promise = new Promise(function (resolve, reject) {
  const x = "geeks";
  const y = "geeks";
  if (x === y) {
    resolve("promise is resolved!");
  } else {
    reject("promise is rejected!");
  }
});

promise
  .then((res) => {
    console.log("Success, You are a GEEK");
  })
  .catch((err) => {
    console.log("Some error has occurred");
  });

//Benefits of Promises:- It improves the code readability, handling of asynchronous operations, and error handling
