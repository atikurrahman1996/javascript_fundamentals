let h1 = document.querySelector("h1");

let buttonsLength = document.querySelectorAll(".my-button").length;
//Using anonymous function

for (let x = 0; x < buttonsLength; x++) {
  document
    .querySelectorAll(".my-button")
    [x].addEventListener("click", function () {
      h1.innerHTML = this.innerHTML + " is clicked";
    });
}

document.querySelector("#input-id").addEventListener("change", function (e) {
  console.log(e.target.value);
});

// adding document keypress listener
document.addEventListener("keypress", function (event) {
  console.log(event.key);
});

// adding mouseout, mouseover listener
h1.addEventListener("mouseover", function () {
  h1.style.color = "green";
  h1.style.fontSize = "3rem";
});

h1.addEventListener("mouseout", function () {
  h1.style.color = "black";
  h1.style.fontSize = "2rem";
});

//to see the result, run Index3.html file
