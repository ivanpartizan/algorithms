// Reverse A String
function reverse(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

reverse("Ivan");

function reverse1(str) {
  return str.split("").reverse().join("");
}

reverse1("Ivan Milenkovic");

// Merge Sorted Arrays
function mergeSortedArrays(array1, array2) {
  let merged = [];

  for (let i = 0; i < array1.length; i++) {
    merged.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    merged.push(array2[i]);
  }

  return merged.sort((a, b) => a - b);
}

mergeSortedArrays([11, 88, 22, 5, 4], [33, 6, 7, 90]);

// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// Check the login
let login = prompt("Who's there?");

if (login == "Admin") {
  let password = prompt("Enter password");
  if (password == "TheMaster") {
    alert("Welcome!");
  } else if (password == "" || password == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (login == "" || login == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

// Repeat until the input is correct
while (true) {
  let number = prompt("Enter a number greater than 100");

  if (number > 100 || number == "" || number == null) {
    break;
  }
}

// Power
let x = +prompt("Enter x");
let n = +prompt("Enter n");

function pow(x, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= x;
  }

  return result;
}

pow(x, n);

// Simple Calculator
let calculator = {
  read() {
    this.a = +prompt("Enter first number");
    this.b = +prompt("Enter second number");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

// Create new Calculator
function Calculator() {
  this.read = function () {
    this.a = +prompt("Enter first number");
    this.b = +prompt("Enter second number");
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Create new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.newValue = +prompt("Enter a number");
    this.value += this.newValue;
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

// Repeat until the input is a number
function readNumber() {
  let value;

  do {
    value = prompt("Please, enter a valid numeric value");
  } while (!isFinite(value));

  if (value === null || value === "") {
    return null;
  }

  return +value;
}

readNumber();

// A random number from min to max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

random(1, 5);

// A random integer from min to max
function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min - 0.5);
}

randomInteger(1, 5);
