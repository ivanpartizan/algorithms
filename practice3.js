// Data Reverse
function dataReverse(data) {
  let temp = [];
  for (let i = 0; i < data.length; i += 8) {
    temp.push(data.slice(i, i + 8));
  }

  let reversed = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    reversed.push(...temp[i]);
  }

  return reversed;
}

dataReverse([
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
]);

// Identical Elements
function duplicateElements(m, n) {
  if (m == [] || n == []) return false;
  for (let i = 0; i < m.length; i++) {
    if (n.includes(m[i])) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}

duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]);

// The Barksdale Code
function decode(string) {
  return string
    .split("")
    .map((num) => {
      return num == "5" ? "0" : num == "0" ? "5" : 10 - num;
    })
    .join("");
}

decode("4103432323");

// Multiplication table
multiplicationTable = function (size) {
  let table = [];

  for (let i = 1; i <= size; i++) {
    let inner = [];

    for (let j = 1; j <= size; j++) {
      inner.push(i * j);
    }
    table.push(inner);
  }

  return table;
};

multiplicationTable(5);

// Sorting the Odd way!
function sortItOut(array) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(array[i]) % 2 == 0) {
      evenNumbers.push(array[i]);
    } else {
      oddNumbers.push(array[i]);
    }
  }
  evenNumbers.sort((a, b) => b - a);
  oddNumbers.sort((a, b) => a - b);
  return oddNumbers.concat(evenNumbers);
}

sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]);

// Sort the odd
function sortArray(array) {
  let oddNumbers = array
    .filter((num) => num % 2 == 1 || num % 2 == -1)
    .sort((a, b) => a - b);
  return array.map((num, index) => (num % 2 == 0 ? num : oddNumbers.shift()));
}

sortArray([5, 3, 2, 8, 1, 4]);

// Sort odd and even numbers in different order
function sortArray(array) {
  let oddNumbers = array
    .filter((number) => number % 2 == 1)
    .sort((a, b) => a - b);
  let evenNumbers = array
    .filter((number) => number % 2 == 0)
    .sort((a, b) => b - a);

  return array.map((number) =>
    number % 2 == 1 ? oddNumbers.shift() : evenNumbers.shift()
  );
}

sortArray([5, 3, 2, 8, 1, 4, 11]);

// Highest and Lowest
function highAndLow(numbers) {
  let arrayOfNumbers = numbers.split(" ");
  let max = Math.max(...arrayOfNumbers);
  let min = Math.min(...arrayOfNumbers);
  return `${max} ${min}`;
}

highAndLow("1 2 3 4 5");

// Get the Middle Character
function getMiddle(s) {
  return s.length % 2 == 1
    ? s[Math.floor(s.length / 2)]
    : `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}

getMiddle("testing");

// Character Counter
function validateWord(s) {
  let object = {};
  for (let character of s.toLowerCase()) {
    if (object[character]) {
      object[character]++;
    } else {
      object[character] = 1;
    }
  }

  let allValues = Object.values(object);
  let firstValue = Object.values(object)[0];
  return allValues.every((number) => number == firstValue);
}

validateWord("abcabc");

// Character counts
String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return undefined;
  let object = {};
  for (let character of this) {
    if (object[character]) {
      object[character]++;
    } else {
      object[character] = 1;
    }
  }

  let counts = [];
  for (let char of charsToCount) {
    counts.push(object[char]);
  }

  counts = counts.map((num) => {
    return num === undefined ? 0 : num;
  });

  return counts.length == 1 ? +String(counts) : counts;
};

characterCount("booop-booop-deee-doo-dooop", "ado");

// Battle of the characters (Easy)
function battle(x, y) {
  let sumX = 0,
    sumY = 0;
  for (let i = 0; i < x.length; i++) {
    sumX += x.charCodeAt(i) - 64;
  }
  for (let i = 0; i < y.length; i++) {
    sumY += y.charCodeAt(i) - 64;
  }
  return sumX == sumY ? `Tie!` : sumX > sumY ? `${x}` : `${y}`;
}

battle("ONE", "TWO");

// Battle of the characters (Medium)
function battle(x, y) {
  let sumX = 0,
    sumY = 0;

  for (let i = 0; i < x.length; i++) {
    if (x.charCodeAt(i) >= 65 && x.charCodeAt(i) <= 90) {
      sumX += x.charCodeAt(i) - 64;
    } else {
      sumX += (x.charCodeAt(i) - 96) / 2;
    }
  }

  for (let i = 0; i < y.length; i++) {
    if (y.charCodeAt(i) >= 65 && y.charCodeAt(i) <= 90) {
      sumY += y.charCodeAt(i) - 64;
    } else {
      sumY += (y.charCodeAt(i) - 96) / 2;
    }
  }

  return sumX == sumY ? `Tie!` : sumX > sumY ? `${x}` : `${y}`;
}

battle("One", "Two");

// Compress sentences
function compress(sentence) {
  let object = {};
  let list = sentence.split(" ");
  let casing = list.map((word) => word.toLowerCase());

  for (let i = 0; i < casing.length; i++) {
    if (!(casing[i] in object)) {
      object[casing[i]] = i;
    } else {
      let repeated = casing.splice(i, 1);
      i--;
    }
  }

  return sentence
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => object[word])
    .join("");
}

compress(
  "Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"
);

// All Star Code Challenge #13 : Pig Latin Translator
const translate = function (word) {
  let vowels = /[aeiou]/;
  if (word === "") return "";
  if (word.length == 1) return word;
  if (word.length >= 2) {
    if (vowels.test(word[0])) {
      word = `${word}ay`;
      return word;
    } else {
      word = `${word.slice(1)}${word[0]}ay`;
      return word;
    }
  }
};

translate("billy");

// "Very Even" Numbers.
function isVeryEvenNumber(n) {
  let string = String(n);
  if (string.length == 1) {
    return +string % 2 == 0 ? true : false;
  } else {
    let sum = 0;
    for (let number of string) {
      sum += +number;
    }
    if (String(sum).length == 1) {
      return sum % 2 == 0 ? true : false;
    } else {
      return isVeryEvenNumber(sum);
    }
  }
}

isVeryEvenNumber(88);

// last digits of a number
function lastDigit(n, d) {
  let array = [];
  let numberString = String(n);
  if (numberString.length > d) {
    for (let i = numberString.length - d; i < numberString.length; i++) {
      array.push(+numberString[i]);
    }
  } else {
    for (let i = 0; i < numberString.length; i++) {
      array.push(+numberString[i]);
    }
  }
  return array;
}

lastDigit(123767, 4);

// Find the divisors!
function divisors(integer) {
  let divisorsArray = [];
  for (let i = 1; i <= integer; i++) {
    if (isPrime(integer)) {
      return `${integer} is prime`;
    } else {
      if (integer % i == 0 && i !== 1 && i !== integer) {
        divisorsArray.push(i);
      }
    }
  }
  return divisorsArray;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

divisors(12);

// Buying a car
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let moneyRemaining = 0;
  let savings = 0;

  if (startPriceOld >= startPriceNew) {
    moneyRemaining = startPriceOld - startPriceNew;
  } else {
    for (
      let i = 1, percent = percentLossByMonth;
      savings + startPriceOld < startPriceNew;
      i++
    ) {
      if (i % 2 == 0) {
        percent += 0.5;
      }
      savings += savingperMonth;
      startPriceOld = startPriceOld * ((100 - percent) / 100);
      startPriceNew = startPriceNew * ((100 - percent) / 100);
      moneyRemaining = savings + startPriceOld - startPriceNew;
      months++;
    }
  }

  return [months, Math.round(moneyRemaining)];
}

nbMonths(2000, 8000, 1000, 1.5);

// Happy Birthday
function wrap(height, width, length) {
  let array = [arguments[0], arguments[1], arguments[2]];
  let sortedarray = array.sort((a, b) => b - a);
  return (
    sortedarray[0] +
    (sortedarray[0] + 20) +
    sortedarray[1] * 2 +
    sortedarray[2] * 4
  );
}

wrap(17, 32, 11);

// Is n divisible by (...)?
function isDivisible(n, ...divisors) {
  let dividend = n;
  return divisors.every((divisor) => dividend % divisor == 0);
}

isDivisible(100, 5, 4, 10, 25, 20);

// Your order, please
function order(words) {
  let arrayOfWords = words.split(" ");
  return arrayOfWords.sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ");
}

order("is2 Thi1s T4est 3a");

// Unlucky Days
function unluckyDays(year) {
  let nextYear = new Date(year + 1, 0, 1);
  let blackFridays = 0;
  let dates = [];

  for (
    let date = new Date(year, 0, 1);
    date <= nextYear;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }

  dates.forEach((date) => {
    if (date.getDate() == 13 && date.getDay() == 5) {
      blackFridays++;
    }
  });
  return blackFridays;
}

unluckyDays(2015);

// Tap Code Translation
function tapCodeTranslation(text) {
  let letters = [];
  for (let i = 0; i < 26; i++) {
    if (String.fromCodePoint(i + 97) == "k") continue;
    letters.push(String.fromCodePoint(i + 97));
  }
  let object = {};
  letters.map((letter, index) => {
    let row, column;
    if (
      index + 1 == 1 ||
      index + 1 == 6 ||
      index + 1 == 11 ||
      index + 1 == 16 ||
      index + 1 == 21
    )
      column = 1;
    else if (
      index + 1 == 2 ||
      index + 1 == 7 ||
      index + 1 == 12 ||
      index + 1 == 17 ||
      index + 1 == 22
    )
      column = 2;
    else if (
      index + 1 == 3 ||
      index + 1 == 8 ||
      index + 1 == 13 ||
      index + 1 == 18 ||
      index + 1 == 23
    )
      column = 3;
    else if (
      index + 1 == 4 ||
      index + 1 == 9 ||
      index + 1 == 14 ||
      index + 1 == 19 ||
      index + 1 == 24
    )
      column = 4;
    else if (
      index + 1 == 5 ||
      index + 1 == 10 ||
      index + 1 == 15 ||
      index + 1 == 20 ||
      index + 1 == 25
    )
      column = 5;
    if (index + 1 >= 1 && index + 1 <= 5) row = 1;
    else if (index + 1 >= 6 && index + 1 <= 10) row = 2;
    else if (index + 1 >= 11 && index + 1 <= 15) row = 3;
    else if (index + 1 >= 16 && index + 1 <= 20) row = 4;
    else if (index + 1 >= 21 && index + 1 <= 25) row = 5;
    return (object[letter] = { value: letter, x: row, y: column });
  });

  let string = text;
  let returnValue = "";

  for (let letter of string) {
    if (letter == "k") letter = "c";
    returnValue +=
      ".".repeat(object[letter]["x"]) +
      " " +
      ".".repeat(object[letter]["y"]) +
      " ";
  }

  return returnValue.trim();
}
