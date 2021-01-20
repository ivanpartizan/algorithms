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

// Create Phone Number
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

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
