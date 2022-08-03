// Loops

// Output prime numbers
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// isPrime(5)

function outputPrimes(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

outputPrimes(10);

// Functions

// Function pow(x,n)
let x = +prompt("Enter x");
let n = +prompt("Enter n");

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

pow(x, n);

// Objects: the basics

// Check for emptiness
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(obj) {
  let sum = 0;
  for (let salary in obj) {
    sum += obj[salary];
  }
  return sum;
}

sumSalaries(salaries);

// Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

// Object methods, "this"

// Create a calculator
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
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

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Constructor, operator "new"

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
    this.value += +prompt("Enter a value");
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value);

// Numbers

// Repeat until the input is a number
function readNumber() {
  let number;

  while (true) {
    number = prompt("Enter valid numeric value");

    if (number === "" || number === null) {
      return null;
    }

    if (isFinite(number)) {
      return +number;
    }
  }
}

readNumber();

// Course
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
}

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

// Course
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
