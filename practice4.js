// List Filtering
function filter_list(l) {
  return l.filter((item) => typeof item == "number");
}

filter_list([1, 2, "aasf", "1", "123", 123]);

// Dropcaps
function dropCap(n) {
  return n
    .split(" ")
    .map((word) => {
      if (word.length <= 2) return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

dropCap("more  than    one space between words");

// Filter Long Words
function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((word) => word.length > n);
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4);

// Filter unused digits
function unusedDigits(...array) {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrayOfChars = [];
  let strings = array.map((number) => String(number));

  for (let string of strings) {
    let chars = [...string];
    arrayOfChars.push(...chars);
  }
  let set = new Set(arrayOfChars);
  let sortedSet = [...set].sort();

  let unusedDigits = "";
  for (let value of digits) {
    if (!sortedSet.includes(String(value))) {
      unusedDigits += value;
    }
  }
  return unusedDigits;
}

unusedDigits(2015, 8, 26);

// Largest 5 digit number in a series
function solution(digits) {
  let largestNumber = 0;
  for (let i = 0; i < digits.length; i++) {
    let currentNumber = digits.slice(i, i + 5);
    if (+currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }
  return +largestNumber;
}

solution("1234567898765");

// Simple Fun #395: Fibonacci digit sequence
function find(a, b, n) {
  let string = "" + a + b;
  n = +String(n).slice(-4);

  while (string.length <= n) {
    let lastDigit = +string.slice(-1);
    let penultimateDigit = +string.slice(-2, -1);
    string += lastDigit + penultimateDigit;
  }

  return +string[n];
}

find(7, 8, 9);

// How many pages in a book?
function amountOfPages(summary) {
  let pages = "";
  let i = 1;
  while (pages.length < summary) {
    pages += String(i);
    i++;
  }
  return i - 1;
}

amountOfPages(25);

// Tetration
function tetration(x, y) {
  if (y == 0) return 1;
  let result = x;
  for (let i = 1; i < y; i++) {
    result = x ** result;
  }
  return result;
}

tetration(5, 2);

// Dot Calculator
function dotCalculator(equation) {
  let [firstNo, operator, secondNo] = equation.split(" ");

  switch (operator) {
    case "+":
      return ".".repeat(firstNo.length + secondNo.length);
      break;
    case "-":
      return ".".repeat(firstNo.length - secondNo.length);
      break;
    case "*":
      return ".".repeat(firstNo.length * secondNo.length);
      break;
    case "//":
      return ".".repeat(Math.trunc(firstNo.length / secondNo.length));
      break;
  }
}

dotCalculator("..... + ...............");

// Case swapping
function swap(str) {
  let swappedStr = "";
  for (let char of str) {
    if (char.codePointAt() >= 65 && char.codePointAt() <= 90) {
      char = String.fromCodePoint(char.codePointAt() + 32);
      swappedStr += char;
    } else if (char.codePointAt() >= 97 && char.codePointAt() <= 122) {
      char = String.fromCodePoint(char.codePointAt() - 32);
      swappedStr += char;
    } else {
      swappedStr += char;
    }
  }

  return swappedStr;
}

swap("HelloWorld");

// Change it up
function changer(str) {
  return str
    .toLowerCase()
    .split("")
    .map((character) => {
      if (character.codePointAt(0) >= 97 && character.codePointAt(0) <= 122) {
        character = String.fromCodePoint(character.codePointAt(0) + 1);
        if (character.codePointAt(0) == 123) {
          character = String.fromCodePoint(character.codePointAt(0) - 26);
        }
        if (/[aeiou]/.test(character)) {
          character = character.toUpperCase();
        }
        return character;
      } else {
        return character;
      }
    })
    .join("");
}

changer("Cat30");

// Find the vowels
function vowelIndices(word) {
  let indices = [];

  word
    .toLowerCase()
    .split("")
    .forEach((letter, index) => {
      if (
        letter == "a" ||
        letter == "e" ||
        letter == "i" ||
        letter == "o" ||
        letter == "u" ||
        letter == "y"
      ) {
        indices.push(index + 1);
      }
    });

  return indices;
}

vowelIndices("YoMama");

// Odd-heavy Array
function isOddHeavy(n) {
  let odds = n.filter((number) => number % 2 != 0);
  let evens = n.filter((number) => number % 2 == 0);
  let minOdd = Math.min(...odds);
  let maxEven = Math.max(...evens);

  return odds.length && minOdd > maxEven ? true : false;
}

isOddHeavy([11, 4, 9, 2, 3, 10]);

// Numbers to Letters
function switcher(x) {
  let letters = [];
  for (let i = 1; i <= 26; i++) {
    letters.push(String.fromCodePoint(i + 96));
  }
  letters = letters.reverse();
  letters.push("!", "?", " ");
  letters.unshift(null);

  return x.map((item) => letters[item]).join("");
}

switcher([
  "25",
  "7",
  "8",
  "4",
  "14",
  "23",
  "8",
  "25",
  "23",
  "29",
  "16",
  "16",
  "4",
]);

// Responsible Drinking
function hydrate(s) {
  let regex = /\d/g;
  let test = s.match(regex);

  let sum = test.map((value) => +value).reduce((acc, value) => acc + value);

  return sum == 1 ? `1 glass of water` : `${sum} glasses of water`;
}

hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer");

// FIRE and FURY
var fireAndFury = function (tweet) {
  let availableLetters = /[EFIRUY]/;
  if (!tweet.split("").every((letter) => availableLetters.test(letter)))
    return `Fake tweet.`;

  let regex = /FURY|FIRE/g;
  let test = tweet.match(regex) || 0;

  let furyCount = 0;
  let fireCount = 0;
  let messages = [];

  for (let i = 0; i < test.length; i++) {
    if (test[i] == "FURY") {
      furyCount++;
      fireCount = 0;
      if (test[i + 1] !== "FURY") {
        messages.push(`I am ${`really `.repeat(furyCount - 1)}furious.`);
      }
    }
    if (test[i] == "FIRE") {
      fireCount++;
      furyCount = 0;
      if (test[i + 1] !== "FIRE") {
        messages.push(
          `You ${
            fireCount == 1 ? `` : `and you `.repeat(fireCount - 1)
          }are fired!`
        );
      }
    }
  }

  if (messages.length == 0) return `Fake tweet.`;
  return messages.join(" ");
};

fireAndFury("FIREYYFURYYFURYYFURRYFIRE");

// Digits explosion
function explode(s) {
  let explodedString = "";
  for (let digit of s) {
    explodedString += digit.repeat(digit);
  }
  return explodedString;
}

explode("102269");

// Truncate a string!
function truncateString(str, num) {
  if (num <= 3) return `${str.slice(0, num)}...`;
  else if (num > str.length || num == str.length) return str;
  else return `${str.slice(0, num - 3)}...`;
}

truncateString("codewars", 7);

// Thinkful - String Drills: Areacode extractor
function areaCode(text) {
  let regex = /\(\d+\)/;
  let matched = text.match(regex);
  return matched[0].slice(1, 4);
}

areaCode("The supplier's phone number is (555) 867-5309");

// Money Match: Double or Nothing
function doubleOrNothing(cash, wager, losses) {
  let moneyLost;
  for (let i = 1; i <= losses; i++, wager *= 2) {
    moneyLost = wager;
  }

  return moneyLost > cash ? "I'll pay you back later" : cash - moneyLost;
}

doubleOrNothing(66, 1, 7);

// Frank's Sticky Calculator
function stickyCalc(operation, val1, val2) {
  val1 = Math.round(val1);
  val2 = Math.round(val2);
  let stringAddition = String(val1) + String(val2);

  return operation == "+"
    ? +stringAddition + val2
    : operation == "-"
    ? stringAddition - val2
    : operation == "*"
    ? stringAddition * val2
    : operation == "/"
    ? Math.round(stringAddition / val2)
    : null;
}

stickyCalc("+", 50, 12);

// Simple Fun #144: Distinct Digit Year
function distinctDigitYear(year) {
  while (true) {
    year++;
    let digits = new Set(String(year).split(""));

    if (digits.size == 4) {
      return year;
    }
  }
}

distinctDigitYear(1987);

// Day of the Year
function toDayOfYear(arr) {
  let [day, month, year] = arr;

  let firstDayOfYear = new Date(year, 0, 1);
  let currentDayOfYear = new Date(year, month - 1, day);

  return (
    Math.round((currentDayOfYear - firstDayOfYear) / 1000 / 60 / 60 / 24) + 1
  );
}

toDayOfYear([25, 12, 2017]);

// Simple string characters
function solve(s) {
  let uppercase = 0;
  let lowercase = 0;
  let numbers = 0;
  let specials = 0;

  s.split("").forEach((char) => {
    if (char.codePointAt(0) >= 48 && char.codePointAt(0) <= 57) numbers++;
    else if (char.codePointAt(0) >= 65 && char.codePointAt(0) <= 90)
      uppercase++;
    else if (char.codePointAt(0) >= 97 && char.codePointAt(0) <= 122)
      lowercase++;
    else specials++;
  });

  return [uppercase, lowercase, numbers, specials];
}

solve("*'&ABCDabcde12345");

// ASCII letters from Number
function convert(number) {
  let array = [];
  for (let i = 0; i < number.length; i += 2) {
    array.push(number.slice(i, i + 2));
  }
  return array.map((number) => String.fromCodePoint(number)).join("");
}

convert("73327673756932858080698267658369");

// ASCII Shift Encryption/Decryption
function asciiEncrypt(plaintext) {
  return plaintext
    .split("")
    .map((character, index) =>
      String.fromCodePoint(character.codePointAt(0) + index)
    )
    .join("");
}

asciiEncrypt("PASSWORD");

function asciiDecrypt(ciphertext) {
  return ciphertext
    .split("")
    .map((character, index) =>
      String.fromCodePoint(character.codePointAt(0) - index)
    )
    .join("");
}

asciiDecrypt("PBUV[TXK");

// Palindrome Pairs
const isPalindrome = (word) => {
  if (word == word.split("").reverse().join("")) return true;
};

const palindromePairs = (words) => {
  let pairs = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && isPalindrome(String(words[i]) + String(words[j]))) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
};

palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]);

// Remove All The Marked Elements of a List
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((value) => !values_list.includes(value));
};

Array.prototype.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]);

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
