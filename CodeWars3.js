// Merge two arrays 7kyu
function mergeArrays(a, b) {
  let newArray = [];
  let number = a.length <= b.length ? a.length : b.length;

  for (let i = 0; i < number; i++) {
    newArray.push(a[i]);
    newArray.push(b[i]);
  }

  if (a.length > number) {
    for (let i = number; i < a.length; i++) {
      newArray.push(a[i]);
    }
  }

  if (b.length > number) {
    for (let i = number; i < b.length; i++) {
      newArray.push(b[i]);
    }
  }

  return newArray;
}

mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]);

// Get key/value pairs as arrays 7kyu
function keysAndValues(data) {
  let keysArray = Object.keys(data);
  let valuesArray = Object.values(data);
  let fullArray = [];

  fullArray.push(keysArray);
  fullArray.push(valuesArray);
  return fullArray;
}

keysAndValues({ a: 1, b: 2, c: 3 });

// Transpose two strings in an array 7kyu
function transposeTwoStrings(array) {
  let firstWord = array[0];
  let secondWord = array[1];
  let number =
    firstWord.length >= secondWord.length
      ? firstWord.length
      : secondWord.length;

  let string = "";

  for (let i = 0; i < number; i++) {
    string += `${firstWord[i] === undefined ? " " : firstWord[i]} ${
      secondWord[i] === undefined ? " " : secondWord[i]
    }${i < number - 1 ? "\n" : ""}`;
  }

  return string;
}

transposeTwoStrings(["Hello", "World"]);

// Find twins 7kyu
function elimination(arr) {
  let count = {};
  for (let number of arr) {
    if (count[number]) {
      count[number]++;
    } else {
      count[number] = 1;
    }
  }

  for (let [key, value] of Object.entries(count)) {
    if (value === 2) return +key;
    else continue;
  }
  return null;
}

elimination([2, 5, 34, 1, 22, 1]);

// Name Array Capping 7kyu
function capMe(names) {
  return names.map(
    (name) => `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}`
  );
}

capMe(["RALPH", "GEORGIA", "CHRISTINA"]);

// Substituting Variables Into Strings: Padded Numbers 7kyu
function padNumbers(value) {
  return `Value is ${String(value).padStart(5, "0")}`;
}

padNumbers(1204);

// String average 6kyu
function averageString(str) {
  let object = {
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
  };

  let stringNumbers = str.split(" ");

  for (let stringNumber of stringNumbers) {
    if (object[stringNumber] === undefined) return "n/a";
  }

  let map = stringNumbers.map((number) => object[number]);

  let sum = map.reduce((acc, current) => acc + current);

  let average = Math.floor(sum / map.length);

  let stringAverage = Object.keys(object).find((key) => object[key] == average);
  return stringAverage;
}

averageString("zero nine five two");

// The average length 7kyu
function averageLength(array) {
  let lengths = array.map((element) => element.length);
  let average = Math.round(
    lengths.reduce((acc, current) => acc + current) / lengths.length
  );

  let newArray = array.map((element) => element.slice(0, 1).repeat(average));
  return newArray;
}

averageLength(["aa", "bbb", "cccc"]);

// Substring fun 7kyu
function nthChar(words) {
  let newWord = "";
  words.forEach((word, index) => (newWord += word[index]));
  return newWord;
}

nthChar(["yoda", "best", "has"]);

// Make the small words big! 7kyu
function smallWordHelper(sentence) {
  let newSentence = sentence.split(" ").map((word) => {
    if (word.length <= 3) {
      return word.toUpperCase();
    } else {
      return word
        .split("")
        .map((char) => {
          let newWord = "";
          if (!/[aeiou]/i.test(char)) {
            newWord += char;
          }
          return newWord;
        })
        .join("");
    }
  });

  return newSentence.join(" ");
}

smallWordHelper("The quick brown fox jumps over the lazy dog");

// Sentence Calculator 6kyu
function lettersToNumbers(s) {
  let totalScore = 0;

  for (let char of s) {
    if (/[A-Z]/.test(char)) {
      totalScore += (char.charCodeAt(0) - 64) * 2;
    } else if (/[a-z]/.test(char)) {
      totalScore += char.charCodeAt(0) - 96;
    } else if (/[0-9]/.test(char)) {
      totalScore += +char;
    }
  }

  return totalScore;
}

lettersToNumbers("I Love You");

// maxPossibleScore 7kyu
function maxPossibleScore(obj, arr) {
  let score = 0;

  for (const [key, value] of Object.entries(obj)) {
    if (arr.includes(key)) {
      score += value * 2;
    } else {
      score += value;
    }
  }

  return score;
}

maxPossibleScore({ a: 2, b: 5, c: 8 }, ["c"]);

// Round to nearest 0 or 5 7kyu
function roundToFive(numbers) {
  let rounded = numbers
    .map((number) => Math.round(number))
    .map((number) => {
      if (number % 5 === 0) {
        return number;
      } else {
        return Math.round(number / 5) * 5;
      }
    });

  return rounded;
}

roundToFive([34.5, 56.2, 11, 13]);

// One line task: Square Every Digit 6kyu
const squareEveryDigit = (x) =>
  +String(x)
    .split("")
    .map((digit) => digit * digit)
    .join("");

squareEveryDigit(77455754);

// Turkish Numbers, 0-99 7kyu
const getTurkishNumber = (num) => {
  let numbers = {
    0: "sıfır",
    1: "bir",
    2: "iki",
    3: "üç",
    4: "dört",
    5: "beş",
    6: "altı",
    7: "yedi",
    8: "sekiz",
    9: "dokuz",
    10: "on",
    20: "yirmi",
    30: "otuz",
    40: "kırk",
    50: "elli",
    60: "altmış",
    70: "yetmiş",
    80: "seksen",
    90: "doksan",
  };

  let turkishNumber = "";

  if (num in numbers) {
    return numbers[num];
  } else {
    let split = String(num)
      .split("")
      .map((digit, index) => {
        if (index == 0) return +(digit + "0");
        else return +digit;
      });

    for (let num of split) {
      turkishNumber += numbers[num] + " ";
    }
  }

  return turkishNumber.trimEnd();
};

getTurkishNumber(12);
