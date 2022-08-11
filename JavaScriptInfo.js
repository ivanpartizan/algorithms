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

// Strings

// Uppercase the first character
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("john");

// Check for spam
function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  }
  return false;
}

checkSpam("buy ViAgRA now");

// Truncate the text
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

truncate("What I'd like to tell on this topic is:", 20);

// Extract the money
function extractCurrencyValue(str) {
  let value = "";
  for (let char of str) {
    if (isFinite(char)) {
      value += char;
    }
  }
  return +value;
}

extractCurrencyValue("$120");

// Arrays

// Sum input numbers
function sumInput() {
  let numbers = [];
  let sum = 0;

  while (true) {
    let value = prompt("Enter a number");
    if (value === null || value === "" || !isFinite(value)) break;
    if (isFinite(value)) {
      numbers.push(+value);
    }
  }

  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

sumInput();

// A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0;
  let subSum = 0;

  for (let number of arr) {
    subSum += number;

    if (subSum < 0) {
      subSum = 0;
    }
    if (subSum > maxSum) {
      maxSum = subSum;
    }
  }

  return maxSum;
}

getMaxSubSum([2, -1, 2, 3, -9]);

// Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

camelize("list-style-image");

// Filter range
function filterRange(arr, a, b) {
  return arr.filter((value) => value >= a && value <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

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

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

// Create an extendable calculator
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
calc.calculate("3 + 7");

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

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
function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// Shuffle an array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle([1, 2, 3, 4, 5]);

// Get average age
function getAverageAge(users) {
  return users.reduce((sum, value) => sum + value.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

getAverageAge(arr);

//  Filter unique array members
function unique(arr) {
  let uniques = [];

  for (let value of arr) {
    if (!uniques.includes(value)) {
      uniques.push(value);
    }
  }

  return uniques;

  // return [...new Set(arr)];
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
  return arr.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

// Map, Set

// Filter unique array members
function unique(arr) {
  return [...new Set(arr)];

  // return Array.from(new Set(arr));
}

let values = [
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

unique(values);

// Filter anagrams
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let key = word.toLowerCase().split("").sort().join("");
    map.set(key, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

aclean(arr);

// Object.keys, values, entries

// Sum the properties
function sumSalaries(salaries) {
  let sum = 0;

  let salariesArray = Object.values(salaries);
  for (let salary of salariesArray) {
    sum += salary;
  }

  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

sumSalaries(salaries);

// Count properties
function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

count(user);

// Destructuring assignment

// The maximal salary
function topSalary(salaries) {
  let maxSalary = 0;
  let maxPaid;

  let entries = Object.entries(salaries);
  for (let [key, value] of entries) {
    if (value > maxSalary) {
      maxSalary = value;
      maxPaid = key;
    }
  }

  return maxPaid;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

topSalary(salaries);

// Date and time

// Show a weekday
function getWeekDay(date) {
  // let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  // return days[date.getDay()];

  let day = date.getDay();
  switch (day) {
    case 0:
      return "SU";
      break;
    case 1:
      return "MO";
      break;
    case 2:
      return "TU";
      break;
    case 3:
      return "WE";
      break;
    case 4:
      return "TH";
      break;
    case 5:
      return "FR";
      break;
    case 6:
      return "SA";
      break;
  }
}

let date = new Date(2012, 0, 3);
getWeekDay(date);

// European weekday
function getLocalDay(date) {
  let day = date.getDay();
  return day == 0 ? 7 : day;
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
getLocalDay(date);

// Which day of month was many days ago?
function getDateAgo(date, days) {
  let dateDaysAgo = new Date(date);
  dateDaysAgo.setDate(date.getDate() - days);
  return dateDaysAgo.getDate();
}

let date = new Date(2015, 0, 2);
getDateAgo(date, 1);

// Last day of month?
function getLastDayOfMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

getLastDayOfMonth(2012, 1);

// How many seconds have passed today?
function getSecondsToday() {
  let now = Date.now();
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return (now - today) / 1000;
}

getSecondsToday();

// How many seconds till tomorrow?
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return (tomorrow - now) / 1000;
}

getSecondsToTomorrow();

// Format the relative date
function formatDate(date) {
  let now = Date.now();

  let difference = now - date;

  if (difference < 1000) {
    return `right now`;
  } else if (difference < 60000) {
    return `${Math.round(difference / 1000)} sec. ago`;
  } else if (difference < 3600000) {
    return `${Math.round(difference / 1000 / 60)} min. ago`;
  } else {
    return `${
      new Date(date).getDate() > 9
        ? `${new Date(date).getDate()}`
        : `0${new Date(date).getDate()}`
    }.${
      new Date(date).getMonth() > 8
        ? `${new Date(date).getMonth() + 1}`
        : `0${new Date(date).getMonth() + 1}`
    }.${new Date(date).getFullYear().toString().slice(-2)} ${
      new Date(date).getHours() > 9
        ? `${new Date(date).getHours()}`
        : `0${new Date(date).getHours()}`
    }:${
      new Date(date).getMinutes() > 9
        ? `${new Date(date).getMinutes()}`
        : `0${new Date(date).getMinutes()}`
    }`;
  }
}

// formatDate(new Date(new Date() - 1));
// formatDate(new Date(new Date() - 30 * 1000));
// formatDate(new Date(new Date() - 5 * 60 * 1000));
formatDate(new Date(new Date() - 86400 * 1000));

// Recursion

// Sum all numbers till the given one
function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

sumTo(100);

function sumTo(n) {
  if (n == 1) return 1;
  else {
    return n + sumTo(n - 1);
  }
}

sumTo(100);

function sumTo(n) {
  return (n + 1) * (n / 2);
}

sumTo(100);

// Calculate factorial
function factorial(n) {
  if (n == 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}

factorial(5);

function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

factorial(5);

// Fibonacci numbers
function fib(n) {
  let numbers = [1, 1];

  for (let i = 2; i < n; i++) {
    numbers.push(numbers[i - 1] + numbers[i - 2]);
  }

  return numbers[n - 1];
}

fib(77);

function fib(n) {
  if (n <= 2) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

fib(7);
