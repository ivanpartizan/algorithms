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
