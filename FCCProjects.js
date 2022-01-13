// Palindrome Checker
function palindrome(str) {
  let myRegex = /[a-z0-9]/g;
  let newStr = str.toLowerCase().match(myRegex).join("");

  let reversedNewStr = "";

  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedNewStr += newStr[i];
  }

  return newStr === reversedNewStr;
}

palindrome("eye");

// Roman Numeral Converter
function convertToRoman(num) {
  let number = "";

  let romanNumerals = {
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

  for (let symbol in romanNumerals) {
    while (romanNumerals[symbol] <= num) {
      number += symbol;
      num -= romanNumerals[symbol];
    }
  }

  return number;
}

convertToRoman(36);
