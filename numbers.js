// Repeat until the input is a number
function readNumber() {
  let number;
  do {
    number = prompt("Enter valid number");
  } while (!isFinite(number));
  if (number === null || number === "") {
    return null;
  }

  alert(`You entered number ${number}`);

  return +number;
}

function readNumber() {
  let num;
  while (true) {
    num = prompt("Enter valid numeric value");
    if (num === "" || num === null) return null;
    if (isFinite(num)) return +num;
  }
}

readNumber();

// A random number from min to max
function random(min, max) {
  let number = Math.random() * (max - min) + min;
  return number;
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
