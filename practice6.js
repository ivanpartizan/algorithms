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

// Sort and Star
function twoSort(s) {
  let sorted = s.sort();
  return sorted[0]
    .split("")
    .map((char, index) => {
      return index === 0 ? char : `***${char}`;
    })
    .join("");
}

twoSort([
  "turns",
  "out",
  "random",
  "test",
  "cases",
  "are",
  "easier",
  "than",
  "writing",
  "out",
  "basic",
  "ones",
]);

// Complementary DNA
function DNAStrand(dna) {
  let complementary = "";
  for (let symbol of dna) {
    switch (symbol) {
      case "A":
        complementary += "T";
        break;
      case "T":
        complementary += "A";
        break;
      case "C":
        complementary += "G";
        break;
      case "G":
        complementary += "C";
        break;
    }
  }
  return complementary;
}

DNAStrand("ATTGC");

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  let [lowestIntegerOne, lowestIntegerTwo] = [...numbers];
  return lowestIntegerOne + lowestIntegerTwo;
}

sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

// Round up to the next multiple of 5
function roundToNext5(n) {
  if (n % 5 == 0) {
    return n;
  } else {
    while (n % 5 != 0) {
      n++;
      if (n % 5 == 0) {
        return n;
      }
    }
  }
}

roundToNext5(5);

// Square Every Digit
function squareDigits(num) {
  num = String(num);
  let squared = "";

  for (let digit of num) {
    squared += digit * digit;
  }

  return +squared;
}

squareDigits(3212);

// Make acronym
function toAcronym(inp) {
  return inp
    .split(" ")
    .map((word, index) => word[0].toUpperCase())
    .join("");
}

toAcronym("Code wars");

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

// Isograms
function isIsogram(str) {
  str = str.toLowerCase();
  let obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] > 1) return false;
  }
  return true;
}

isIsogram("Dermatoglyphics");

// All unique
function hasUniqueChars(str) {
  if (str === "") return true;
  let obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  let values = Object.values(obj);
  let maxValue = Math.max(...values);

  return maxValue == 1 ? true : false;
}

hasUniqueChars("  nAa");

// Small enough? - Beginner
function smallEnough(a, limit) {
  return a.every((value) => value <= limit);
}

smallEnough([66, 101], 200);

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

// Next Prime
function nextPrime(n) {
  if (n < 2) return 2;
  let i = n + 1;
  if (isPrime(i)) return i;
  while (!isPrime(i)) {
    i++;
    if (isPrime(i)) return i;
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function pow(x, n) {
  x = prompt("enter x");
  n = prompt("enter n");
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

pow();
