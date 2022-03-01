// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.

function isPalindrome(string) {
  let regex = /\w+/gi;
  let test = string.toLowerCase().match(regex);
  return test.join("") == test.join("").split("").reverse().join("")
    ? true
    : false;
}

isPalindrome("level");

// Their solution
function isPalindrome(str) {
  str = str.replace(/\W/g, "").toLowerCase();
  return str == str.split("").reverse().join("");
}
