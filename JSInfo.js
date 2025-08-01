// Check the login
// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
let userName = prompt("Who's there");

if (userName == "Admin") {
  let password = prompt("Enter your password");

  if (password == "TheMaster") {
    alert("Welcome");
  } else if (password === null || password === "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === null || userName === "") {
  alert("Canceled");
} else {
  alert("I don't know you");
}

// Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
while (true) {
  let number = prompt("Enter a number greater than 100");

  if (number > 100 || number == null || number == "") {
    break;
  }
}

// Output prime numbers
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.
let n = 10;

for (let i = 2; i <= n; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) alert(i);
}

// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  return a < b ? a : b;
}

min(2, 5);

// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// P.S. In this task the function should support only natural values of n: integers up from 1.
let x = prompt("Enter x");
let n = prompt("Enter n");

function pow(x, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= x;
  }

  return result;
}

pow(x, n);

// Check for emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

isEmpty(schedule);

// Sum object properties
// We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
let sum = 0;

for (let salary in salaries) {
  sum += salaries[salary];
}

alert(sum);

// Multiply numeric property values by 2
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// For instance:
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
// multiplyNumeric(menu);
// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// P.S. Use typeof to check for a number here.
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

// Create a calculator
// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
let calculator = {
  read() {
    this.a = prompt("Enter first value");
    this.b = prompt("Enter second value");
  },

  sum() {
    return +this.a + +this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// Create new Calculator
// Create a constructor function Calculator that creates objects with 3 methods:
// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());
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

// Create new Accumulator
// Create a constructor function Accumulator(startingValue).
// Object that it creates should:
// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.
// Here’s the demo of the code:
// let accumulator = new Accumulator(1); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// alert(accumulator.value); // shows the sum of these values
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.number = +prompt("Enter a number");
    this.value += this.number;
  };
}

// Sum numbers from the visitor
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let x = +prompt("Enter the first number");
let y = +prompt("Enter the second number");
let sum = x + y;

alert(sum);

// Repeat until the input is a number
// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.
function readNumber() {
  let number;
  while (true) {
    number = prompt("Please enter a number...");

    if (number === "" || number === null) {
      return null;
    }

    if (isFinite(number)) {
      return +number;
    }
  }
}

// A random number from min to max
// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
function random(min, max) {
  return Math.random() * (max - min) + min;
}

random(1, 5);
