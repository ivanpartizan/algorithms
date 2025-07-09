// Basic Math (Add or Subtract) 7kyu
function calculate(str) {
  str = str.replaceAll("plus", "+").replaceAll("minus", "-");

  let result = eval(str);
  return String(result);
}

calculate("1plus2plus3minus4");

// Magic Sum of 3s 7kyu
function magicSum(numbers) {
  let sum = 0;

  let oddNumbersWithDigit3 = numbers
    .filter((number) => number % 2 === 1)
    .map((number) => String(number))
    .filter((digit) => digit.includes(3))
    .map((number) => +number);

  for (let number of oddNumbersWithDigit3) {
    sum += number;
  }

  return sum;
}

magicSum([3, 12, 5, 8, 30, 13]);

// Unique Sum 7kyu
function uniqueSum(lst) {
  if (lst.length === 0) return null;

  let sum = 0;
  let uniques = [...new Set(lst)];

  for (let number of uniques) {
    sum += number;
  }

  return sum;
}

uniqueSum([1, 3, 8, 1, 8]);

// Powers of 3 7kyu
function largestPower(n) {
  let x = 0;

  for (let i = 0; i < n / 3; i++) {
    if (3 ** i < n) {
      x = i;
    }
  }

  return x;
}

largestPower(82);

// Array Array Array 7kyu
function explode(x) {
  if (typeof x[0] !== "number" && typeof x[1] !== "number") {
    return "Void!";
  } else if (typeof x[0] === "number" && typeof x[1] === "number") {
    let sum = x[0] + x[1];
    let array = [];

    for (let i = 0; i < sum; i++) {
      array.push(x);
    }

    return array;
  } else if (typeof x[0] === "number" || typeof x[1] === "number") {
    let y;
    let array = [];

    if (typeof x[0] === "number") {
      y = x[0];
    } else {
      y = x[1];
    }

    for (let i = 0; i < y; i++) {
      array.push(x);
    }

    return array;
  }
}

explode(["a", "b"]);

// Find array 7kyu
function findArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return [];

  let newArray = [];
  for (let i = 0; i < arr2.length; i++) {
    newArray.push(arr1[arr2[i]]);
  }
  return newArray;
}

findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]);

// Is it a vowel on this position? 7kyu
function checkVowel(string, position) {
  if (position < 0) return false;

  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return vowels.includes(string[position]);
}

checkVowel("cat", 1);
