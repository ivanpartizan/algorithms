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

// Caesars Cipher
function rot13(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90) {
      let newCode = str.codePointAt(i) + 13;
      if (newCode > 90) {
        newCode -= 26;
      }
      newStr += String.fromCodePoint(newCode);
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");

// Cash Register
function checkCashRegister(price, cash, cid) {
  let currencyUnits = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  let totalCash = cid.reduce((acc, val) => (acc += val[1]), 0);
  let roundedTotalCash = Math.round(totalCash * 100) / 100;
  let change = cash - price;
  let newArray = [];

  if (roundedTotalCash < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  if (roundedTotalCash == change) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let element of cid.reverse()) {
      let used = [element[0], 0];
      while (change >= currencyUnits[element[0]] && element[1] > 0) {
        used[1] += currencyUnits[element[0]];
        element[1] -= currencyUnits[element[0]];
        change -= currencyUnits[element[0]];
        change = change.toFixed(2);
      }
      if (used[1] > 0) {
        newArray.push(used);
      }
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: newArray };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
