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
