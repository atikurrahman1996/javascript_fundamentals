//The Async Keyword:-We use the async keyword with a function to represent that the function is asynchronous.
//The async function always returns a promise.

// async function example:

async function func() {
  console.log("Async/Await tutorial.");
  return Promise.resolve(1);
}
func();

//In the above example, the async keyword is used to represent that the function is asynchronous.
//Since this func() function returns a promise, we can use the chaining method then() like this:

async function func() {
  console.log("Async/Await tutorial 2.");
  return Promise.resolve(1);
}
func().then(function (res) {
  console.log(res);
});

//The await keyword:- The await keyword is used to wait for the asynchronous operation.
//This keyword is used inside the async function. Here is the syntax to use await is:
//let result = await promise;
//The await pauses the async function until the promise returns a result value.

async function func1() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done with Async/Await!"), 5000);
  });
  let result = await promise; // wait until the promise resolves
  console.log(result);
}
func1();

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    resolve("I love You !!");
  });
  console.log(await myPromise);
}

myDisplay();

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    reject("task 3 is not completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    resolve("task 4 is completed");
  });
};

const callAllTasks = async () => {
  try {
    const t1 = await taskOne();
    console.log(t1);
    const t2 = await taskTwo();
    console.log(t2);
    const t3 = await taskThree();
    console.log(t3);
    const t4 = await taskFour();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};

callAllTasks();
