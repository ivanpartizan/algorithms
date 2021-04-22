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

// Char Code Calculation
function calc(x) {
  let total1 = "";
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }
  let total2 = total1.replace(/7/g, "1");

  let total1Sum = total1.split("").reduce((acc, value) => acc + +value, 0);
  let total2Sum = total2.split("").reduce((acc, value) => acc + +value, 0);

  return total1Sum - total2Sum;
}

// Reverse or rotate?
function revrot(str, sz) {
  let newString = "";
  let numberOfChunks = Math.floor(str.length / sz);
  let chunks = [];
  if (str === "" || sz <= 0 || sz > str.length) {
    return "";
  }
  for (let i = 0, j = 0; i < numberOfChunks; i++, j += sz) {
    chunks.push(str.substr(j, sz));
  }
  for (let chunk of chunks) {
    let sum = 0;
    for (let number of chunk) {
      sum += Math.pow(number, 3);
    }
    if (sum % 2 === 0) {
      chunk = chunk.split("").reverse().join("");
      newString += chunk;
    } else {
      chunk = chunk.substr(1, chunk.length - 1) + chunk[0];
      newString += chunk;
    }
  }
  return newString;
}

// Inside Out Strings
function insideOut(x) {
  return x
    .split(" ")
    .map((word) => {
      if (word.length <= 3) {
        word = word;
      } else if (word.length % 2 == 0) {
        let left = word
          .slice(0, word.length / 2)
          .split("")
          .reverse()
          .join("");
        let right = word
          .slice(word.length / 2)
          .split("")
          .reverse()
          .join("");
        word = left + right;
      } else {
        let left = word
          .slice(0, word.length / 2)
          .split("")
          .reverse()
          .join("");
        let center = word.slice(
          Math.floor(word.length / 2),
          Math.floor(word.length / 2 + 1)
        );
        let right = word
          .slice(word.length / 2 + 1)
          .split("")
          .reverse()
          .join("");
        word = left + center + right;
      }
      return word;
    })
    .join(" ");
}

// Stop gninnipS My sdroW!
function spinWords(string) {
  return string
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        word = word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}

// Printer Errors
function printerError(s) {
  let numerator = 0;
  let denominator = s.length;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 109) {
      numerator++;
    }
  }

  return `${numerator}/${denominator}`;
}

// Errors : histogram
function hist(s) {
  let u = 0;
  let w = 0;
  let x = 0;
  let z = 0;
  let outputString = [];

  for (let char of s) {
    switch (char) {
      case "u":
        u++;
        break;
      case "w":
        w++;
        break;
      case "x":
        x++;
        break;
      case "z":
        z++;
        break;
      default:
        break;
    }
  }

  if (u > 0) {
    outputString.push(
      `${"u".padEnd(2)} ${String(u).padEnd(6)}${"*".repeat(u)}`
    );
  }
  if (w > 0) {
    outputString.push(
      `${"w".padEnd(2)} ${String(w).padEnd(6)}${"*".repeat(w)}`
    );
  }
  if (x > 0) {
    outputString.push(
      `${"x".padEnd(2)} ${String(x).padEnd(6)}${"*".repeat(x)}`
    );
  }
  if (z > 0) {
    outputString.push(
      `${"z".padEnd(2)} ${String(z).padEnd(6)}${"*".repeat(z)}`
    );
  }

  return outputString.join(`\r`);
}

// Are they the "same"?
function comp(array1, array2) {
  if (
    array1 === null ||
    array2 === null ||
    array1 === [] ||
    array2 === [] ||
    array1.length !== array2.length
  ) {
    return false;
  }

  return array1
    .map((value) => value * value)
    .sort()
    .toString() === array2.sort().toString()
    ? true
    : false;
}

// Lost number in number sequence
function findDeletedNumber(arr, mixArr) {
  for (let number of arr) {
    if (!mixArr.includes(number)) {
      return number;
    }
  }

  return 0;
}

findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]);

// Who likes it?
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
}

likes(["Alex", "Jacob", "Mark", "Max"]);
