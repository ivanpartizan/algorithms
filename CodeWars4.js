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

// Sum of Multiples 8kyu
function sumMul(n, m) {
  if (n <= 0 || m <= 0 || n > m) return "INVALID";

  let multiples = [];

  for (let i = n; i < m; i++) {
    if (i % n == 0) multiples.push(i);
  }

  let sum = multiples.reduce((a, b) => a + b);
  return sum;
}

sumMul(4, 123);

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

// esrever esreveR! 7kyu
function esrever(str) {
  if (str === "") return "";

  let mark = str[str.length - 1];

  let string = str.slice(0, str.length - 1);

  let words = string.split(" ");

  let reversedWords = words.map((word) => word.split("").reverse().join(""));
  reversedWords = reversedWords.reverse();

  return `${reversedWords.join(" ")}${mark}`;
}

esrever("hello world.");

// Ciphers #1 - The 01 Cipher 7kyu
function encode(plaintext) {
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let array = plaintext.split("");

  let encoded = array.map((letter) => {
    if (!letters.includes(letter)) return letter;
    else if (letter.charCodeAt(0) % 2 == 0) return 1;
    else return 0;
  });

  return encoded.join("");
}

encode("Hello World!");

// Jenny the youngest detective 7kyu
function missingWord(nums, str) {
  let orderedNums = nums.sort((a, b) => a - b);

  let newStr = str.toLowerCase().split(" ").join("");

  for (let num of orderedNums) {
    if (num > newStr.length - 1) return "No mission today";
  }

  let word = orderedNums.map((num) => {
    return newStr[num];
  });

  return word.join("");
}

missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog");

// Remove First and Last Character 8kyu
function removeChar(str) {
  let num = str.length;
  if (num === 2) return "";

  let newStr = "";
  for (let i = 0; i < num; i++) {
    if (i !== 0 && i !== num - 1) {
      newStr += str[i];
    }
  }

  return newStr;
}

removeChar("country");
