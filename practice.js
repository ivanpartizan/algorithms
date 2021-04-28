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

// Sum input numbers
function sumInput() {
  let values = [];
  let sum = 0;

  while (true) {
    let value = prompt("Enter a number");

    if (isFinite(value) && value != "" && value != null) {
      values.push(value);
    }

    if (!isFinite(value) || value == "" || value == null) {
      break;
    }
  }

  for (let number of values) {
    sum += +number;
  }

  console.log(values);
  return sum;
}

sumInput();

// NEW
function sumInput() {
  let sum = 0;
  let values = [];

  while (true) {
    let value = prompt("Enter a number to sum");

    if (!isFinite(value) || value === "" || value === null) {
      break;
    }

    values.push(+value);
  }

  for (let number of values) {
    sum += number;
  }

  return sum;
}

// A maximal subarray
function getMaxSubSum(arr) {}

// Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
}

// Filter range
function filterRange(arr, a, b) {
  let filtered = arr.filter((number) => number >= a && number <= b);
  return filtered;
}

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

// Sort in decreasing order
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

// Copy and sort array
function copySorted(arr) {
  return arr.slice().sort();
}

// Create an extendable calculator
// class Calculator(){

// }

// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);

// Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

// Sort users by age
function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// Shuffle an array

// Get average age
function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}

// Filter unique array members
function unique(arr) {
  let uniques = [];

  for (let item of arr) {
    if (!uniques.includes(item)) {
      uniques.push(item);
    }
  }

  return uniques;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

unique(strings);

// Create keyed object from array
function groupById(arr) {
  return arr.reduce((object, current) => {
    object[current.id] = current;
    return object;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
