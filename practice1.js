// Highest Scoring Word
function high(x) {
  let words = x.split(" ");
  let obj = {};

  words.forEach((word) => {
    let points = 0;
    for (let i = 0; i < word.length; i++) {
      points += word.codePointAt(i) - 96;
    }
    obj[word] = points;
  });

  let highScoreWord = Object.keys(obj).reduce((a, b) =>
    obj[a] >= obj[b] ? a : b
  );

  return highScoreWord;
}

high("what time are we climbing up the volcano");

// Remove duplicate words
function removeDuplicateWords(s) {
  let array = s.split(" ");
  let newArray = [];

  for (let word of array) {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  }

  return newArray.join(" ");
}

removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);

// Counting Duplicates
function duplicateCount(text) {
  let duplicatesCount = 0;
  let lettersArray = text.toLowerCase().split("");

  let object = lettersArray.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});

  for (key in object) {
    if (object[key] > 1) {
      duplicatesCount++;
    }
  }

  return duplicatesCount;
}

duplicateCount("aabBcde");

// Find the odd int
function findOdd(A) {
  let countNumbers = {};

  for (let number of A) {
    if (number in countNumbers) {
      countNumbers[number]++;
    } else {
      countNumbers[number] = 1;
    }
  }

  for (value in countNumbers) {
    if (countNumbers[value] % 2 == 1) {
      return +value;
    }
  }
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);

// Integer Difference
const intDiff = (arr, n) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) == n) {
        count++;
      }
    }
  }

  return count;
};

intDiff([1, 1, 5, 6, 9, 16, 27], 4);

// Difference between biggest 2 numbers
function diffBig2(arr) {
  let max1 = Math.max(...arr);
  arr.splice(arr.indexOf(max1), 1);
  let max2 = Math.max(...arr);
  return max1 - max2;
}

diffBig2([10, 5, 2]);

// Vasya - Clerk
function tickets(peopleInLine) {
  let bill25 = 0;
  let bill50 = 0;
  let bill100 = 0;

  for (let bill of peopleInLine) {
    if (bill == 100) {
      bill100++;
      if (bill50 > 0 && bill25 > 0) {
        bill50--;
        bill25--;
      } else if (bill25 > 2) {
        bill25 -= 3;
      } else return "NO";
    }
    if (bill == 50) {
      bill50++;
      if (bill25 > 0) {
        bill25--;
      } else return "NO";
    }
    if (bill == 25) {
      bill25++;
    }
  }
  return "YES";
}

// Human Readable Time
function humanReadable(seconds) {
  let hours = parseInt(seconds / 3600);
  let remainder = seconds % 3600;
  let minutes = parseInt(remainder / 60);
  let anotherRemainder = remainder % 60;
  hours = hours > 9 ? hours : `0${hours}`;
  minutes = minutes > 9 ? minutes : `0${minutes}`;
  anotherRemainder =
    anotherRemainder > 9 ? anotherRemainder : `0${anotherRemainder}`;

  return `${hours}:${minutes}:${anotherRemainder}`;
}

humanReadable(359999);

// parseInt() reloaded
let mapOne = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
let mapTwo = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

function parseInt(string) {
  return string
    .split(" ")
    .join(",")
    .split("-")
    .join(",")
    .split(",")
    .reduce((acc, value) => {
      if (value in mapOne) {
        acc += mapOne[value];
      }
      if (value in mapTwo) {
        acc += mapTwo[value] * (acc % mapTwo[value]) - (acc % mapTwo[value]);
      }
      console.log(mapNumbers[value]);
      console.log(map2[value]);
      console.log(acc);
      return acc;
    }, 0);
}

parseInt("two hundred forty-six");

// Series of integers from 0 to n
function generateIntegers(n) {
  let arrayOfIntegers = [];

  for (let i = 0; i <= n; i++) {
    arrayOfIntegers.push(i);
  }

  return arrayOfIntegers;
}

generateIntegers(3);

// Series of integers from m to n
function generateIntegers(m, n) {
  let arrayOfIntegers = [];

  for (let i = m; i <= n; i++) {
    arrayOfIntegers.push(i);
  }

  return arrayOfIntegers;
}

generateIntegers(2, 5);

// Pairs of integers from 0 to n
function generatePairs(n) {
  let arrayOfPairs = [];

  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      arrayOfPairs.push([i, j]);
    }
  }

  return arrayOfPairs;
}

generatePairs(2);

// Pairs of integers from m to n
function generatePairs(m, n) {
  let arrayOfPairs = [];

  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      arrayOfPairs.push([i, j]);
    }
  }

  return arrayOfPairs;
}

generatePairs(2, 4);

// Count the divisors of a number
function getDivisorsCnt(n) {
  let numberOfDivisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      numberOfDivisors++;
    }
  }
  return numberOfDivisors;
}

// Which section did you scroll to?
function getSectionIdFromScroll(scrollY, sizes) {
  let totalSize = 0;
  for (let i = 0; i < sizes.length; i++) {
    totalSize += sizes[i];
    if (scrollY < totalSize) {
      return i;
    }
  }
  return -1;
}

getSectionIdFromScroll(299, [300, 200, 400, 600, 100]);

// Encrypt this!
var encryptThis = function (text) {
  let words = text.split(" ");
  return words
    .map((word) => {
      let chars = word.split("");
      chars[0] = word.charCodeAt(0);
      [chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]];
      return chars.join("");
    })
    .join(" ");
};

encryptThis("A wise old owl lived in an oak");

// Decipher this!
function decipherThis(str) {
  let replaced = str.replace(/\d+/g, (value) => String.fromCharCode(value));

  return replaced
    .split(" ")
    .map((word) => {
      let chars = word.split("");
      if (chars.length > 1) {
        [chars[1], chars[chars.length - 1]] = [
          chars[chars.length - 1],
          chars[1],
        ];
      }
      return chars.join("");
    })
    .join(" ");
}

decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o");

// Duplicate Encoder
function duplicateEncode(word) {
  word = word.toLowerCase();
  let obj = {};
  for (let char of word) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return word
    .split("")
    .map((char) => (obj[char] == 1 ? "(" : ")"))
    .join("");
}

duplicateEncode("Success");

// Frequency sequence
function freqSeq(str, sep) {
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return str
    .split("")
    .map((char) => obj[char])
    .join(sep);
}

freqSeq("hello world", "-");

// Find the unique number
function findUniq(arr) {
  let object = {};
  for (let i = 0; i < arr.length; i++) {
    if (!object[arr[i]]) {
      object[arr[i]] = 1;
    } else {
      object[arr[i]]++;
    }
  }

  for (let key in object) {
    if (object[key] == 1) {
      return +key;
    }
  }
}

findUniq([1, 1, 1, 2, 1, 1]);

// Find the unique string
function findUniq(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sorted = Array.from(new Set(arr[i].toLowerCase()))
      .sort()
      .join("")
      .trim();
    newArr.push(sorted);
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) == newArr.lastIndexOf(newArr[i])) {
      return arr[i];
    }
  }
}

findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]);
findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]);
