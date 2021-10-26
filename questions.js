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
