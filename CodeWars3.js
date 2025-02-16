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
