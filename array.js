// Sum input numbers
function sumInput() {
  let values = [];
  let value;

  while (true) {
    value = prompt("Enter a number");
    if (!isFinite(value) || value === "" || value === null) {
      break;
    }
    values.push(value);
  }

  let sum = 0;

  for (let number of values) {
    sum += +number;
  }

  return sum;
}

sumInput();

// A maximal subarray
function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;
    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      maxSum = Math.max(maxSum, subSum);
    }
  }
  return maxSum;
}

getMaxSubSum([2, -1, 2, 3, -9]);

// THE BEST
function getMaxSubSum(arr) {
  let maxSum = 0;
  let subSum = 0;

  for (let number of arr) {
    subSum += number;

    if (subSum > maxSum) {
      maxSum = subSum;
    }
    if (subSum < 0) {
      subSum = 0;
    }
  }
  return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]);

function getMaxSubSumNew(arr) {
  let maxSum = 0;
  let subSum = 0;

  for (let number of arr) {
    subSum += number;
    maxSum = Math.max(maxSum, subSum);

    if (subSum < 0) {
      subSum = 0;
    }
  }
  return maxSum;
}

getMaxSubSumNew([-1, 2, 3, -9, 11]);

// Translate border-left-width to borderLeftWidth
function camelize(str) {
  let array = str.split("-");
  let words = array.map((word, index) =>
    index === 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  let newStr = words.join("");
  return newStr;
}

camelize("background-color");
camelize("list-style-image");

// NEW
function camelizeNew(str) {
  return str
    .split("-")
    .map((item, index) =>
      index === 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}

camelizeNew("background-color");

// Filter range
let array1 = [55, 33, 8, 1, 10, 15];

function filterRange(arr, a, b) {
  let newArr = arr.filter((number) => number >= a && number <= b);
  return newArr;
}

let filtered = filterRange(array1, 10, 40);
console.log(filtered);

// Filter range "in place"
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  let i = arr.length;

  while (i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

filterRangeInPlace(arr, 1, 4);

// NEW
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// Sort in decreasing order
let arr = [5, 2, 1, -10, 0, 8, 4];

arr.sort((a, b) => b - a);

// Copy and sort array
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let newArr = arr.slice().sort();
  return newArr;
}

let sorted = copySorted(arr);
console.log(sorted);

// NEW
function copySorted(arr) {
  return arr.slice().sort((a, b) => a.localeCompare(b));
}

// Create an extendable calculator
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };

  this.calculate = function (str) {
    let [first, operator, second] = str.split(" ");
    return this.methods[operator](+first, +second);
  };
}

let calc = new Calculator();
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(calc.calculate("3 + 7"));

// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
console.log(names);

// Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  id: user.id,
  fullName: `${user.name} ${user.surname}`,
}));

console.log(usersMapped);

// NEW
let usersMapped = users.map((user) => {
  let obj = {};
  obj["fullName"] = `${user.name} ${user.surname}`;
  obj.id = user.id;
  return obj;
});

console.log(usersMapped);

// Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

function sortByAge(users) {
  let ages = users.sort((a, b) => a.age - b.age);
  return ages;
}

sortByAge(arr);

// Shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

shuffle(arr);

// Get average age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

getAverageAge(arr);

// Filter unique array members
function unique(arr) {
  let uniqueWords = [];

  for (let word of arr) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }
  return uniqueWords;
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
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((object, user) => {
    object[user.id] = user;
    return object;
  }, {});
}

let usersById = groupById(users);

// Log all pairs of array
const boxes = ["a", "b", "c", "d", "e"];

const logAllPairs = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      newArray.push(array[i], array[j]);
    }
  }
  return newArray;
};

logAllPairs(boxes);
