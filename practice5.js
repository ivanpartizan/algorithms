// IP Validation
function isValidIP(str) {
  console.log(str);
  if (
    str == "" ||
    str.includes(" ") ||
    str.includes(",") ||
    /\r|\n/.test(str) ||
    /[a-zA-Z]/.test(str)
  ) {
    return false;
  } else {
    let octets = str.split(".");

    if (
      octets.length != 4 ||
      octets.some(
        (value) =>
          (value.length > 1 && value[0] == 0) || value == "" || value == "-0"
      )
    ) {
      return false;
    } else {
      if (octets.every((value) => value >= 0 && value < 256)) {
        return true;
      } else {
        return false;
      }
    }
  }
}

isValidIP("12.255.56.1");

// Narcissistic Numbers
function isNarcissistic(n) {
  let numberLength = String(n).length;
  let sum = String(n)
    .split("")
    .reduce((acc, value) => (acc += value ** numberLength), 0);
  return sum == n;
}

isNarcissistic(153);

// Credit Card Mask
function maskify(cc) {
  let length = cc.length;
  if (length < 5) return cc;
  else {
    let hashes = "#".repeat(length - 4);
    return `${hashes}${cc.slice(-4)}`;
  }
}

maskify("4556364607935616");

// Feynman's square question
function countSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}

countSquares(5);

// Simple Fun #193: Moment Of Time In Space
function momentOfTimeInSpace(moment) {
  let past, present, future;

  let regex = /[1-9]/g;
  let sum = moment.match(regex).reduce((acc, value) => acc + +value, 0);

  let notIncreasingChars = 0;

  for (let char of moment) {
    if (/[^1-9]/.test(char)) {
      notIncreasingChars++;
    }
  }

  past = sum < notIncreasingChars;
  present = sum == notIncreasingChars;
  future = sum > notIncreasingChars;

  return [past, present, future];
}

momentOfTimeInSpace("12:30 am");

// Simple Fun #30: Strings Construction
function stringsConstruction(A, B) {
  let lettersA = {};
  let lettersB = {};

  for (let letter of A) {
    if (lettersA[letter]) {
      lettersA[letter]++;
    } else {
      lettersA[letter] = 1;
    }
  }

  lettersA = Object.keys(lettersA)
    .sort()
    .reduce((obj, key) => {
      obj[key] = lettersA[key];
      return obj;
    }, {});

  let matchingLetters = B.split("").filter((letter) => lettersA[letter]);

  for (let letter of matchingLetters) {
    if (lettersB[letter]) {
      lettersB[letter]++;
    } else {
      lettersB[letter] = 1;
    }
  }

  lettersB = Object.keys(lettersB)
    .sort()
    .reduce((obj, key) => {
      obj[key] = lettersB[key];
      return obj;
    }, {});

  let valuesA = Object.values(lettersA);
  let valuesB = Object.values(lettersB);

  let minValue;

  if (
    valuesA.length === 0 ||
    valuesB.length === 0 ||
    valuesA.length != valuesB.length
  )
    return 0;
  else {
    minValue = Math.floor(
      Math.min(...valuesB.map((value, index) => value / valuesA[index]))
    );
  }
  return minValue;
}

stringsConstruction("hnccv", "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn");

// Categorize New Member
function openOrSenior(data) {
  return data.map((pair) => {
    if (pair[0] >= 55 && pair[1] > 7) return "Senior";
    else return "Open";
  });
}

openOrSenior([
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]);
