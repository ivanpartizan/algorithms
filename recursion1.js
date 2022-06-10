function pow(x, n) {
  let result = x;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
}

pow(2, 4);

function pow1(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow1(x, n - 1);
  }
}

pow1(2, 5);

// Sum all numbers till the given one
// Using a for loop.
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
sumTo(100);
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

// Using the arithmetic progression formula.
function sumTo(n) {
  return (n + 1) * (n / 2);
}

sumTo(100);

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

factorial(5);

// Fibonacci numbers
function fib(n) {
  let arr = [1, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
  return arr[n - 1];
}

fib(77);

function printList(list) {
  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

printList(list);

function printList(list) {
  let temp = list;
  if (temp.next == null) {
    return;
  } else {
    console.log(temp.value);
    temp = temp.next;
  }
}

function fib(n) {
  let a = 0;
  let b = 1;
  if (n == 1) return 0;
  if (n == 2) return 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

fib(5);

let stocks = {
  fruit: ["strawberry", "banana", "raspberry", "vanilla"],
  liqwuid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};

let isOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("the shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.fruit[0]} is taken`))
  .then(() => {
    return order(1000, () => console.log("production has strartre"));
  })
  .then(() => {
    return order(2000, () => console.log("the food was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liqwuid[0]} and ${stocks.liqwuid[1]}} was selected`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("star machine"));
  })
  .then(() => {
    return order(2000, () => {
      console.log(`ice cream placed on ${stocks.holders[0]}`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was selected`);
    });
  })
  .then(() => {
    return order(1000, () => console.log("ice cream was served"));
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("day ended, we are closed");
  });

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesnt exist", error);
  } finally {
    console.log("runs code anyway");
  }
}
order();

let toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping you want?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("a");
  console.log("b");
  console.log("c");
  await toppingsChoice();
  console.log("d");
  console.log("e");
}

kitchen();

console.log("x");
console.log("y");
console.log("z");

let stocks = {
  fruit: ["strawberry", "banana", "raspberry", "vanilla"],
  liqwuid: ["water", "ice"],
  holders: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};

let isOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closded"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.fruit[0]}`);
    await time(0000);
    console.log(`start the productionj`);
    await time(2000);
    console.log(`cut the fruit`);
    await time(1000);
    console.log(`${stocks.liqwuid[0]}``amd ${stocks.liqwuid[1]}`);
    await time(1000);
    console.log(`start tehe machine`);
    await time(2000);
    console.log(`ice cream placed on ${stocks.holders[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was added`);
    await time(2000);
    console.log(`srve ice cream`);
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shp closed");
  }
}

kitchen();

function Calculator() {
  this.read = function () {
    this.a = +prompt("enter first number");
    this.b = +prompt("enter second number");
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

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("enter number to add");
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);

function readNumber() {
  while (true) {
    let value = prompt("enter valid numeric value");

    if (value == "" || value == null) return null;

    if (isFinite(value)) {
      console.log(value);
      break;
    }
  }
}

readNumber();

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

random(11, 15);

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("john");

function checkSpam(str) {
  let lowercased = str.toLowerCase();
  if (lowercased.includes("xxx") || lowercased.includes("viagra")) {
    return true;
  } else {
    return false;
  }
}
checkSpam("buy ViAgRA now");

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "…";
  } else return str;
}

truncate("What I'd like to tell on this topic is:", 20);

function extractCurrencyValue(str) {
  let returned = "";
  for (let char of str) {
    if (typeof char == "number") returned += char;
  }
  return returned;
}

extractCurrencyValue("$120");

function readNumber() {
  while (true) {
    let value = prompt("enter a number");
    if (value == "" || value == null) return null;
    if (isFinite(value)) return +value;
  }
}

readNumber();

function random(min, max) {
  return Math.random() * (max - min) + min;
}

random(1, 5);

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("john");

function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("xxx") || str.includes("viagra")) return true;
  return false;
}

checkSpam("buy ViAgRA now");

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  }
  return str;
}

truncate("What I'd like to tell on this topic is:", 20);

truncate("Hi everyone!", 20);

function extractCurrencyValue(str) {
  let newStr = "";
  for (let char of str) {
    if (isFinite(char)) newStr += char;
  }

  return +newStr;
}

extractCurrencyValue("$120");

let styles = [Jazz, Blues];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles);
let fiest = styles.shift();
console.log(first);
console.log(styles);
styles.unshift("Rap", "Reaggeae");
console.log(styles);

function sumInput() {
  let values = [];
  let num;

  while (true) {
    num = prompt("enter a number");
    if (num == "" || num == null || !isFinite(num)) break;
    else values.push(+num);
  }

  let sum = 0;
  for (let value of values) {
    sum += value;
  }
  return sum;
}

sumInput();

function getMaxSubSum(arr) {
  let subSum = 0;
  let maxSum = 0;
  for (let num of arr) {
    subSum += num;
    if (subSum < 0) subSum = 0;
    if (subSum > maxSum) maxSum = subSum;
  }

  return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]);

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index > 0 ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
}

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition");

function filterRange(arr, a, b) {
  return arr.slice().filter((num) => num >= a && num <= b);
}

let arr = [5, 3, 8, 1];

filterRange(arr, 1, 4);

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert(arr);

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);

console.log(names);

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/
console.log(usersMapped);
alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); //

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

let sorted = sortByAge(arr);
console.log(sorted);
// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let arr = [1, 2, 3];

shuffle(arr);

function getAverageAge(users) {
  let average =
    users.reduce((acc, value) => {
      return acc + value.age;
    }, 0) / users.length;
  return average;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

getAverageAge(arr);

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

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
}

let usersById = groupById(users);

console.log(usersById);

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (string) {
    let values = string.split(" ");
    let a = +values[0];
    let b = +values[2];
    let operator = values[1];
    return this.methods[operator](a, b);
  };

  this.addMethod = function (operator, func) {
    this.methods[operator] = func;
  };
}

let calc = new Calculator();

calc.calculate("3 + 7");

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
