// String Reversal
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function reverse(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function reverse(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

// Palindromes
function palindrome(str) {
  return (isPalindrome =
    str === str.split("").reverse().join("") ? true : false);
}

function palindrome(str) {
  return str
    .split("")
    .every((char, index) => char == str[str.length - 1 - index]);
}

// Integer Reversal
function reverseInt(n) {
  let reversedString = String(n).split("").reverse().join("");

  if (n < 0) {
    return parseInt(reversedString) * -1;
  }

  return +reversedString;
}

function reverseInt(n) {
  let reversedString = String(n).split("").reverse().join("");

  return parseInt(reversedString) * Math.sign(n);
}

// Max Chars
function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// My and Improved Solution
function maxChar(str) {
  let obj = {};
  for (let char of str) {
    obj[char] ? obj[char]++ : (obj[char] = 1);
  }

  let max = Math.max(...Object.values(obj));
  return Object.keys(obj).filter((key) => obj[key] == max);
}

// Just the Function
const getMax = (object) => {
  let max = Math.max(...Object.values(object));
  return Object.keys(object).filter((key) => object[key] == max);
};

let obj = { a: 12, b: 11, c: 12 };
getMax(obj);

// The Classic FizzBuzz!
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Array Chunking
function chunk(array, size) {
  let chunked = [];
  for (let element of array) {
    let last = chunked[chunked.length - 1];
    console.log(last);
    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

function chunk(array, size) {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// Anagrams
// Solution 1
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// Helper function
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// Solution 2
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

// Helper function
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// My Solution
function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();
  let anagramA = "";
  let anagramB = "";

  for (let i = 0; i < stringA.length; i++) {
    if (stringA.codePointAt(i) > 96 && stringA.codePointAt(i) < 123) {
      anagramA += stringA[i];
    }
  }

  for (let i = 0; i < stringB.length; i++) {
    if (stringB.codePointAt(i) > 96 && stringB.codePointAt(i) < 123) {
      anagramB += stringB[i];
    }
  }

  return anagramA.split("").sort().join("") ==
    anagramB.split("").sort().join("")
    ? "True"
    : "False";
}

// Sentence Capitalization
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

function capitalize(str) {
  let words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

// My and Improved Solution
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// Printing Steps
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function steps(n, row = 0, stair = "") {
  if (n == row) {
    return;
  }

  if (n == stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

// Two Sided Steps - Pyramids
function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let midpoint = Math.floor((n * 2 - 1) / 2);
    let level = "";
    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

function pyramid(n, row = 0, level = "") {
  if (row == n) {
    return;
  }
  if (level.length == n * 2 - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  let midpoint = Math.floor((n * 2 - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

// My Solution
function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str1 = " ".repeat(n - i);
    let str2 = "#".repeat(i * 2 - 1);
    console.log(str1 + str2 + str1);
  }
}

// Find The Vowels
function vowels(str) {
  let count = 0;
  let checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// My Solution
function vowels(str) {
  str = str.toLowerCase();
  let numberOfVowels = 0;

  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      numberOfVowels++;
    }
  }

  return numberOfVowels;
}

// Matrix Spiral
