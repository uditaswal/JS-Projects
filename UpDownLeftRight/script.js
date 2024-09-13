var human = document.getElementById("human");
var hello = document.getElementById("hello");
var btn = document.getElementById("btn");

var value = 50;

console.log(value);
function down() {
  value +=1;
    human.style.top = value + "%";
  console.log(value);
}

function up() {
  value -= 1;
  human.style.top = value + "%";
  console.log(value);
}

function left() {
  value -= 1;
  human.style.left = value + "%";
  console.log(value);
}

function right() {
  value += 1;
  human.style.left = value + "%";
  console.log(value);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown" || event.keyCode === 40||event.key === "S"||event.key === "s") {
    down();
  }
  if (event.key === "ArrowUp" || event.keyCode === 38||event.key === "W"||event.key === "w") {
    up();
  }
  if (event.key === "ArrowLeft" || event.keyCode === 37||event.key === "A"||event.key === "a") {
    left();
  }
  if (event.key === "ArrowRight" || event.keyCode === 39||event.key === "D"||event.key === "d") {
    right();
  }
});
