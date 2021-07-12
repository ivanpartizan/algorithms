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

function readNumber() {
  let number;
  do {
    number = prompt("enter numeric value");
  } while (!isFinite(number));
  {
    console.log(number);
    if (number == "" || number == null) {
      return null;
    }
    return +number;
  }
}

readNumber();
