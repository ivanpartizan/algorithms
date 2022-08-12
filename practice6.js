// Collatz Conjecture Length
function collatz(n) {
  let arr = [n];
  while (n > 0) {
    if (n % 2 == 0) {
      n /= 2;
      arr.push(n);
    } else {
      n = n * 3 + 1;
      arr.push(n);
    }
    if (n == 1) break;
  }

  return arr.length;
}

collatz(20);

// Least Larger
function leastLarger(a, i) {
  // let elementAtGivenIndex = a.at(i);
  let elementAtGivenIndex = a[i];

  let b = a.slice();
  b.splice(i, 1);
  let sorted = b.sort((x, y) => x - y);
  let leastLarger = sorted.find((element) => element > elementAtGivenIndex);
  return leastLarger === undefined ? -1 : a.indexOf(leastLarger);
}

leastLarger([4, 1, 3, 5, 6], 0);

// SevenAte9
function sevenAte9(str) {
  str = Array.from(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 7 && str[i + 1] == 9 && str[i + 2] == 7) {
      str.splice(i + 1, 1);
    }
  }
  return str.join("");
}

sevenAte9("79712312");

// Multiply Word in String
function modifyMultiply(str, loc, num) {
  let words = str.split(" ");
  let word = words[loc];
  let wordArray = [];
  for (let i = 0; i < num; i++) {
    wordArray.push(word);
  }
  return wordArray.join("-");
}

modifyMultiply("This is a string", 3, 5);

// Speed Control
function gps(s, x) {
  if (x <= 1) return 0;
  let distances = [];
  for (let i = 0; i < x.length; i++) {
    if (isFinite(x[i + 1] - x[i])) distances.push(x[i + 1] - x[i]);
  }

  const speeds = distances.map((distance) => (3600 * distance) / s);
  return Math.floor(Math.max(...speeds));
}

gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]);

// Predict your age!
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let list = [age1, age2, age3, age4, age5, age6, age7, age8];
  let x = list
    .map((number) => number * number)
    .reduce((acc, number) => acc + number);
  return Math.floor(Math.sqrt(x) / 2);
}

predictAge(65, 60, 75, 55, 60, 63, 64, 45);

// New £5 notes collectors!
function getNewNotes(salary, bills) {
  let billsTotal = bills.reduce((acc, value) => acc + value, 0);
  let notes = Math.floor((salary - billsTotal) / 5);
  return salary - billsTotal < 5 ? 0 : notes;
}

getNewNotes(2000, [500, 160, 400]);

// Heron's formula
function heron(a, b, c) {
  let s = (a + b + c) / 2;

  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

heron(3, 4, 5);

// Mix Fruit Juice
function mixFruit(arr) {
  let five$ = ["banana", "orange", "apple", "lemon", "grapes"];
  let seven$ = ["avocado", "strawberry", "mango"];

  let total = arr
    .map((value) => {
      if (five$.includes(value.toLowerCase())) return 5;
      if (seven$.includes(value.toLowerCase())) return 7;
      else return 9;
    })
    .reduce((acc, value) => acc + value, 0);

  return Math.round(total / arr.length);
}

mixFruit(["Mango", "Banana", "Avocado"]);

// Help the Fruit Guy
function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length == 0) return [];
  return bagOfFruits.map((fruit) => {
    if (fruit.includes("rotten")) {
      fruit = fruit[6].toLowerCase() + fruit.slice(7);
    }
    return fruit;
  });
}

removeRotten(["apple", "banana", "kiwi", "melone", "orange"]);

function bintodec(num) {
  let str = String(num);
  let sum = 0;
  for (let i = str.length - 1, times = 1; i >= 0; times *= 2, i--) {
    console.log(times, str[i]);
    sum += str[i] * times;
    console.log(sum);
  }
  return sum;
}

bintodec(100111);
