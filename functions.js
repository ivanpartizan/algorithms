// What's a Perfect Power anyway?
var isPP = function (n) {
  let m = parseInt(n ** 0.5);
  for (let i = 2; i < m + 1; i++) {
    let k = 2;
    while (i ** k < n) {
      k++;
    }
    if (i ** k == n) {
      return [i, k];
    }
  }
  return null;
};

isPP(81);

// Roman Numerals Encoder
const romanEncoder = (number) => {
  let romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = "";
  for (let key in romanNumbers) {
    while (number >= romanNumbers[key]) {
      roman += key;
      number -= romanNumbers[key];
    }
  }
  return roman;
};

romanEncoder(2020);

// The Hashtag Generator
function generateHashtag(str) {
  if (str == "") {
    return false;
  }

  str = str.split(" ").filter((s) => s !== "");

  let newString = `#${str
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("")}`;

  if (newString.length > 140 || newString == "" || newString == "#") {
    return false;
  }

  return newString;
}

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
const sumDigPow = (a, b) => {
  let result = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;
    let digits = i.toString();
    for (let j = 0; j < digits.length; j++) {
      sum += Math.pow(+digits[j], j + 1);
    }
    if (sum == i) {
      result.push(i);
    }
  }
  return result;
};

sumDigPow(1, 150);

// Sum of pairs
function sumPairs(ints, s) {
  let numbers = {};

  for (let int of ints) {
    let currentNumber = int;
    let neededNumber = s - currentNumber;

    if (numbers[neededNumber] == true) {
      return [neededNumber, currentNumber];
    } else {
      numbers[currentNumber] = true;
    }
  }
}

sumPairs([1, 4, 8, 7, 3, 15], 8);

// Playing with digits
function digPow(n, p) {
  let digits = String(n);
  let total = 0;

  for (let i = 0; i < digits.length; i++) {
    total += (+digits[i]) ** p;
    p++;
  }

  return Number.isInteger(total / n) ? total / n : -1;
}

digPow(46288, 3);

// Build a pile of Cubes
function findNb(m) {
  let n = 0;
  let total = 0;

  while (total < m) {
    n++;
    total += n ** 3;
  }

  return total == m ? n : -1;
}

findNb(1071225);

// Formatting a number as price
var numberToPrice = function (number) {
  if (typeof number !== "number") {
    return "NaN";
  }

  //  number = Math.trunc(number*Math.pow(10, 2))/Math.pow(10, 2)

  number =
    (Math.sign(number) * Math.floor(100 * Math.abs(number) + 0.0000001)) / 100;

  let newPrice = number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return newPrice;
};

// Is my friend cheating?
function removeNb(n) {
  let numbers = [];
  let sum = ((n + 1) * n) / 2;
  // console.log(sum)

  for (let a = 1; a <= n; a++) {
    // a * b = sum - a - b => b is ?
    // a * b + b = sum - a - b + b
    // b * (a + 1) = sum - a // divide by (a + 1)
    // b = (sum - a) / (a + 1)
    let b = (sum - a) / (a + 1);
    if (b < n && Number.isInteger(b)) {
      // console.log(a, b)
      numbers.push([a, b]);
    }
  }

  return numbers;
}

removeNb(26);

// Create Phone Number
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

//First non-repeating character
function firstNonRepeatingLetter(s) {
  let lowerCase = s.toLowerCase();

  for (let i = 0; i < lowerCase.length; i++) {
    if (
      lowerCase.indexOf(lowerCase[i]) == lowerCase.lastIndexOf(lowerCase[i])
    ) {
      return s[i];
    }
  }

  return "";
}

// First character that repeats
function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    let firstIndex = s.indexOf(s[i]);
    let secondIndex = s.indexOf(s[i], i + 1);

    if (firstIndex >= 0 && secondIndex != -1) {
      return s[i];
    }
  }
}

firstDup("tweet");

// Split Strings
function solution(str) {
  let chunks = [];

  if (str.length % 2 == 1) {
    str = str + "_";
  }

  for (let i = 0; i < str.length; i += 2) {
    chunks.push(str.substring(i, i + 2));
  }

  return chunks;
}

// Holiday IV - Leg Room
function legRoom(a, b) {
  if (b.includes("00")) {
    return "Jackpot!";
  }

  let roomForLegs = 0;

  for (let letter of b) {
    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      roomForLegs += 2;
    }
  }

  let personLegLength = Math.floor((a * 55) / 100);

  if (roomForLegs > (personLegLength * 25) / 100) {
    return "super comfy";
  } else if (roomForLegs >= (personLegLength * 15) / 100) {
    return "comfortable";
  } else {
    return "ouch";
  }
}

legRoom(192, "aelm");

// Vowels Back
function vowelBack(s) {
  let output = "";
  let position;
  let newPosition;
  let newChar;

  for (let i = 0; i < s.length; i++) {
    position = s.charCodeAt(i);

    if (s[i] === "c" || s[i] === "o") {
      newPosition = ((position - 97 - 1) % 26) + 97;
      newChar = String.fromCharCode(newPosition);
      if (
        newChar === "c" ||
        newChar === "o" ||
        newChar === "d" ||
        newChar === "e"
      ) {
        newChar = s[i];
      }
      output += newChar;
    } else if (s[i] === "d") {
      newPosition = ((position - 97 - 3) % 26) + 97;
      newChar = String.fromCharCode(newPosition);
      if (
        newChar === "c" ||
        newChar === "o" ||
        newChar === "d" ||
        newChar === "e"
      ) {
        newChar = s[i];
      }
      output += newChar;
    } else if (s[i] === "e") {
      newPosition = ((position - 97 - 4) % 26) + 97;
      newChar = String.fromCharCode(newPosition);
      if (
        newChar === "c" ||
        newChar === "o" ||
        newChar === "d" ||
        newChar === "e"
      ) {
        newChar = s[i];
      }
      output += newChar;
    } else if (s[i] === "a" || s[i] === "i" || s[i] === "u") {
      newPosition = ((((position - 97 - 5) % 26) + 26) % 26) + 97;
      newChar = String.fromCharCode(newPosition);
      if (
        newChar === "c" ||
        newChar === "o" ||
        newChar === "d" ||
        newChar === "e"
      ) {
        newChar = s[i];
      }
      output += newChar;
    } else {
      newPosition = ((position - 97 + 9) % 26) + 97;
      newChar = String.fromCharCode(newPosition);
      if (
        newChar === "c" ||
        newChar === "o" ||
        newChar === "d" ||
        newChar === "e"
      ) {
        newChar = s[i];
      }
      output += newChar;
    }
  }
  return output;
}
