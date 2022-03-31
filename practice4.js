// List Filtering
function filter_list(l) {
  return l.filter((item) => typeof item == "number");
}

filter_list([1, 2, "aasf", "1", "123", 123]);

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
