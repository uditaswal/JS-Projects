var equals = document.getElementById("equals");
var clear = document.getElementById("clear");
var back = document.getElementById("back");
let result = document.getElementById("result");
let input = document.getElementById("input");
var values = null;
var expr = 0;

// entering values in the input box
var gridItem = document.querySelectorAll(".grid-item");
var gridItemArray = Array.from(gridItem);
var lastThreeItems = gridItemArray.slice(0, gridItemArray.length - 3);
lastThreeItems.forEach(function (div) {
  div.addEventListener("click", function () {
    expr = input.value;
    input.value = expr + div.innerHTML;
  });
});
// backspace button
back.addEventListener("click", function () {
  input.value = input.value.slice(0, input.value.length - 1);
});
// Clear Button
clear.addEventListener("click", function () {
  input.value = null;
});
// equal button
equals.addEventListener("click", function () {
  solution();
});
// to switch to input box whenever a key is pressed and to call solution() with enter key
document.addEventListener("keypress", function () {
  input.focus();
  // disable();
  if (event.key === "Enter") {
    solution();
  }



});
// function to evaluate the numbers
function solution() {
  values = input.value;
  if (values.trim() === "") {
    alert("Wrong Dumbass");
  } else {
    try {
      let k = eval(values);
      result.innerHTML = k; // Display the result
    } catch (error) {
      alert("Wrong Dumbass");
    } // Display an error message if the expression is invalid
  }
}


// to not allows buttons other than numbers and arithmetic operators
function disable() {
  var allowedCharacters = /[0-9()+\-\\%\.]/;

  document.onkeydown = function (event) {
      if (event.key.match(allowedCharacters)||event.key === "Enter") {} 
       else{ event.preventDefault()};

      }
  
}
disable();


