// IP Validation
function isValidIP(str) {
  console.log(str);
  if (
    str == "" ||
    str.includes(" ") ||
    str.includes(",") ||
    /\r|\n/.test(str) ||
    /[a-zA-Z]/.test(str)
  ) {
    return false;
  } else {
    let octets = str.split(".");

    if (
      octets.length != 4 ||
      octets.some(
        (value) =>
          (value.length > 1 && value[0] == 0) || value == "" || value == "-0"
      )
    ) {
      return false;
    } else {
      if (octets.every((value) => value >= 0 && value < 256)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

isValidIP("12.255.56.1");

// Narcissistic Numbers
function isNarcissistic(n) {
  let numberLength = String(n).length;
  let sum = String(n)
    .split("")
    .reduce((acc, value) => (acc += value ** numberLength), 0);
  return sum == n;
}

isNarcissistic(153);

// Bingo ( Or Not )
function bingo(a) {
  let letters = [];
  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCodePoint(i + 65));
  }

  let selectedLetters = a.map((value) => letters[value - 1]);
  if (
    selectedLetters.includes("B") &&
    selectedLetters.includes("I") &&
    selectedLetters.includes("N") &&
    selectedLetters.includes("G") &&
    selectedLetters.includes("O")
  ) {
    return "WIN";
  } else return "LOSE";
}

bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Credit Card Mask
function maskify(cc) {
  let length = cc.length;
  if (length < 5) return cc;
  else {
    let hashes = "#".repeat(length - 4);
    return `${hashes}${cc.slice(-4)}`;
  }
}

maskify("4556364607935616");

// Don't give me five!
function dontGiveMeFive(start, end) {
  let counter = 0;
  for (let i = start; i <= end; i++) {
    if (String(i).includes("5")) continue;
    counter++;
  }
  return counter;
}

dontGiveMeFive(1, 9);

// Find all pairs
function duplicates(array) {
  if (array.length == 0 || array.length == 1) return 0;

  let obj = {};
  let pairs = 0;

  for (let item of array) {
    if (obj[item]) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }

  let values = Object.values(obj);

  values.forEach((value) => {
    if (value % 2 == 0) {
      pairs += value / 2;
    } else if (value > 1 && value % 2 == 1) {
      pairs += Math.floor(value / 2);
    }
  });

  return pairs;
}

duplicates([1, 2, 5, 6, 5, 2]);

// You Got Change?
function giveChange(amount) {
  let array = [];

  let bills1 = 0,
    bills5 = 0,
    bills10 = 0,
    bills20 = 0,
    bills50 = 0,
    bills100 = 0;

  let obj = {
    oneDollar: 1,
    fiveDollars: 5,
    tenDollars: 10,
    twentyDollars: 20,
    fiftyDollars: 50,
    oneHundredDollars: 100,
  };

  while (amount > 99) {
    amount -= obj["oneHundredDollars"];
    bills100++;
  }
  while (amount > 49) {
    amount -= obj["fiftyDollars"];
    bills50++;
  }
  while (amount > 19) {
    amount -= obj["twentyDollars"];
    bills20++;
  }
  while (amount > 9) {
    amount -= obj["tenDollars"];
    bills10++;
  }
  while (amount > 4) {
    amount -= obj["fiveDollars"];
    bills5++;
  }
  while (amount > 0) {
    amount -= obj["oneDollar"];
    bills1++;
  }

  array.push(bills1, bills5, bills10, bills20, bills50, bills100);
  return array;
}

giveChange(365);

// Feynman's square question
function countSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

countSquares(5);

// Run-length encoding
var runLengthEncoding = function (str) {
  let array = [];

  for (let i = 0; i < str.length; i++) {
    let subarray = [];
    let num = 1;
    if (str[i] == str[i + 1]) {
      while (str[i] == str[i + 1]) {
        num++;
        i++;
        if (str[i] !== str[i + 1]) {
          subarray.push(num, str[i]);
        }
      }
    } else {
      subarray.push(num, str[i]);
    }

    array.push(subarray);
  }

  return array;
};

runLengthEncoding("hello world!");

// Simple Fun #79: Delete a Digit
function deleteDigit(n) {
  let array = String(n).split("");

  let numbers = [];
  for (let i = 0; i < array.length; i++) {
    numbers.push(+(array.slice(0, i) + array.slice(i + 1)).split(",").join(""));
  }

  let maxNumber = Math.max(...numbers);
  return maxNumber;
}

deleteDigit(152);

// Simple Fun #193: Moment Of Time In Space
function momentOfTimeInSpace(moment) {
  let past, present, future;

  let regex = /[1-9]/g;
  let sum = moment.match(regex).reduce((acc, value) => acc + +value, 0);

  let notIncreasingChars = 0;

  for (let char of moment) {
    if (/[^1-9]/.test(char)) {
      notIncreasingChars++;
    }
  }

  past = sum < notIncreasingChars;
  present = sum == notIncreasingChars;
  future = sum > notIncreasingChars;

  return [past, present, future];
}

momentOfTimeInSpace("12:30 am");

// Simple Fun #30: Strings Construction
function stringsConstruction(A, B) {
  let lettersA = {};
  let lettersB = {};

  for (let letter of A) {
    if (lettersA[letter]) {
      lettersA[letter]++;
    } else {
      lettersA[letter] = 1;
    }
  }

  lettersA = Object.keys(lettersA)
    .sort()
    .reduce((obj, key) => {
      obj[key] = lettersA[key];
      return obj;
    }, {});

  let matchingLetters = B.split("").filter((letter) => lettersA[letter]);

  for (let letter of matchingLetters) {
    if (lettersB[letter]) {
      lettersB[letter]++;
    } else {
      lettersB[letter] = 1;
    }
  }

  lettersB = Object.keys(lettersB)
    .sort()
    .reduce((obj, key) => {
      obj[key] = lettersB[key];
      return obj;
    }, {});

  let valuesA = Object.values(lettersA);
  let valuesB = Object.values(lettersB);

  let minValue;

  if (
    valuesA.length === 0 ||
    valuesB.length === 0 ||
    valuesA.length != valuesB.length
  )
    return 0;
  else {
    minValue = Math.floor(
      Math.min(...valuesB.map((value, index) => value / valuesA[index]))
    );
  }
  return minValue;
}

stringsConstruction("hnccv", "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn");

// Alphabet symmetry
function solve(arr) {
  let letters = [];
  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCodePoint(i + 65));
  }

  return arr
    .map((word) => word.toUpperCase())
    .map((word, index) => {
      let number = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] == letters[i]) number++;
      }
      return number;
    });
}

solve(["abode", "ABc", "xyzD"]);

// WeIrD StRiNg CaSe
function toWeirdCase(string) {
  let array = string.split(" ");
  return array
    .map((word) => {
      return word
        .split("")
        .map((letter, index) => {
          if (index % 2 == 0) {
            return letter.toUpperCase();
          } else {
            return letter.toLowerCase();
          }
        })
        .join("");
    })
    .join(" ");
}

toWeirdCase("Weird string case");

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real");

// Consecutive items
function consecutive(arr, a, b) {
  let firstIndex = arr.indexOf(a);
  let secondIndex = arr.indexOf(b);
  return firstIndex - secondIndex == 1 || firstIndex - secondIndex == -1
    ? true
    : false;
}

consecutive([1, 3, 5, 7], 3, 7);

// Categorize New Member
function openOrSenior(data) {
  return data.map((pair) => {
    if (pair[0] >= 55 && pair[1] > 7) return "Senior";
    else return "Open";
  });
}

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
