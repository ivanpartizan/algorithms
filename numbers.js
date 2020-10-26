// Repeat until the input is a number
function readNumber() {
  let num;
  do {
    num = prompt("Enter valid number");
  } while (!isFinite(num));
  if (num === null || num === "") {
    return null;
  }
  return +num;
  alert(`You entered number ${num}`);
}

readNumber();

// A random number from min to max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

random(1, 5);

// A random integer from min to max
function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

randomInteger(2, 6);

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

randomInteger(1, 5);

// Sum numbers from the visitor
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");

let sum = a + b;
alert(`Sum of ${a} and ${b} is ${sum}`);
