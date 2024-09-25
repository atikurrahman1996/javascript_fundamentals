// Arrow function vs Traditional function

// Traditional function

function display1() {
  console.log("I am display 1");
}
display1();

// demo1 - must use parenthesis for no parameters, but for one parameter its optional
//Arrow function

const display2 = () => {
  console.log("I am display 2");
};
display2();

// demo2 - no need to use curly braces if returning or dealing with single statement
const display4 = () => console.log("I am display 4");
display4();

// parameters in arrow function
function add1(x, y) {
  return x + y;
}
console.log(add1(10, 20));

//Arrow function

const add2 = (x, y) => x * y;
console.log(add2(20, 30));

// Arrow function with map and filter

let students = [
  {
    id: 101,
    name: "Atikur Rahman",
    gpa: 3.92,
  },
  {
    id: 102,
    name: "Israt Jahan",
    gpa: 3.12,
  },
  {
    id: 103,
    name: "Srity",
    gpa: 2.12,
  },
  {
    id: 104,
    name: "AR",
    gpa: 4.92,
  },
];
console.log(students);

// returning the student name whose gpa is greater than 3 using traditional function
function studentsName1() {
  return students
    .filter(function (x) {
      return x.gpa > 3;
    })
    .map(function (y) {
      return y.name;
    });
}
console.log(studentsName1());

// returning the student name whose gpa is greater than 3 using arrow function

const studentsName2 = () =>
  students.filter((x) => x.gpa > 3).map((y) => y.name);
console.log(studentsName2());
