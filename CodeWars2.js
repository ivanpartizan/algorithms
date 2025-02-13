// Sum of angles 7kyu
function angle(n) {
  return (n - 2) * 180;
}

angle(3);

// Change two-dimensional array 7kyu
function matrix(array) {
  array.forEach((row, rowIndex) => {
    row.forEach((item, itemIndex) => {
      if (rowIndex == itemIndex) {
        row[itemIndex] = item < 0 ? 0 : 1;
      }
    });
  });

  return array;
}

matrix([
  [-1, 4, -5, -9, 3],
  [6, -4, -7, 4, -5],
  [3, 5, 4, -9, -1],
  [1, 5, -7, -8, -9],
  [-3, 2, 1, -5, 6],
]);

// Javascript filter - 1 7kyu
function searchNames(logins) {
  let filteredLogins = logins.filter((login) => {
    if (login[0].endsWith("_")) {
      return login;
    }
  });

  return filteredLogins;
}

searchNames([
  ["foo", "foo@foo.com"],
  ["bar_", "bar@bar.com"],
]);

// ToLeetSpeak 7kyu
function toLeetSpeak(str) {
  let object = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2",
  };
  let leet = "";

  for (let char of str) {
    char === " " ? (leet += " ") : (leet += object[char]);
  }

  return leet;
}

toLeetSpeak("CODEWARS");

// Each n-th element of list 6kyu
function each(n, xs) {
  if (n == 0) return [];

  let list = [];

  if (n > 0) {
    for (let i = n - 1; i < xs.length; i += n) {
      list.push(xs[i]);
    }
  }

  if (n < 0) {
    n = Math.abs(n);
    for (let i = xs.length - n; i >= 0; i -= n) {
      list.push(xs[i]);
    }
  }

  return list;
}

each(-2, [1, 2, 3, 4, 5, 6]);

// Sort an array by value and index 7kyu
function sortByValueAndIndex(array) {
  let products = array.map((value, index) => {
    return { value: value, product: value * (index + 1) };
  });

  let sorted = products
    .sort((a, b) => a.product - b.product)
    .map((value) => value.value);
  return sorted;
}

sortByValueAndIndex([23, 2, 3, 4, 5]);

// Check the exam 7kyu
function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === "") score += 0;
    else if (array2[i] === array1[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }

  return score <= 0 ? 0 : score;
}

checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]);

// Sort with a sorting array 7kyu
function sort(initialArray, sortingArray) {
  let sortedArray = [];

  sortingArray.forEach(
    (item, index) => (sortedArray[item] = initialArray[index])
  );

  return sortedArray;
}

sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]);

// Sorted Union 7kyu
function uniteUnique(...args) {
  let allValues = args.flat();
  let uniqueValues = [];

  for (let value of allValues) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
}

uniteUnique([], [1, 2, 1, 2], [2, 1, 1, 2, 1]);

// How many are smaller than me? 7kyu
function smaller(nums) {
  let smallerThanNumberArray = nums.map((number, index) => {
    let numberOfSmallerNumbers = 0;

    for (let i = index + 1; i < nums.length; i++) {
      if (number > nums[i]) {
        numberOfSmallerNumbers++;
      }
    }

    return numberOfSmallerNumbers;
  });

  return smallerThanNumberArray;
}

smaller([5, 4, 3, 2, 1]);

// Most digits 7kyu
function findLongest(array) {
  let mostDigits = 0;
  let numberWithMostDigits = 0;

  for (let number of array) {
    if (String(number).length > mostDigits) {
      mostDigits = String(number).length;
      numberWithMostDigits = number;
    }
  }

  return numberWithMostDigits;
}

findLongest([9000, 8, 800]);

// Partial Word Searching 7kyu
function wordSearch(query, seq) {
  let found = seq.filter((string) =>
    string.toLowerCase().includes(query.toLowerCase())
  );

  return found.length ? found : ["Empty"];
}

wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]);

// Simple beads count 7kyu
function countRedBeads(n) {
  return n < 2 ? 0 : n * 2 - 2;
}

countRedBeads(5);

// Thinkful - List and Loop Drills: Inverse Slicer 7kyu
function inverseSlice(items, a, b) {
  return items.filter((item, index) => index < a || index >= b);
}

inverseSlice([12, 14, 63, 72, 55, 24], 2, 4);

// Sum of the first nth term of Series 7kyu
function SeriesSum(n) {
  let series = [];

  for (let i = 1, denominator = 1; i <= n; i++, denominator += 3) {
    series.push(1 / denominator);
  }

  let sum = series.reduce((acc, value) => acc + value, 0);
  return sum.toFixed(2);
}

SeriesSum(5);

// Sum it continuously 7kyu
function add(arr) {
  let sums = arr.map((number, index) => {
    if (index == 0) {
      return number;
    } else {
      let currentSum = arr[0];
      for (let i = 1; i <= index; i++) {
        currentSum += arr[i];
      }
      return currentSum;
    }
  });

  return sums;
}

add([1, 2, 3, 4, 5]);

// Gradually Adding Parameters 7kyu
function add(...args) {
  let numbers = [...args];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * (i + 1);
  }

  return sum;
}

add(100, 200, 300);

// Difference Of Squares 7kyu
function differenceOfSquares(n) {
  let squareOfSumOfNumbers = 0;
  let sumOfSquaresOfNumbers = 0;
  let difference = 0;

  for (let i = 1; i <= n; i++) {
    squareOfSumOfNumbers += i;
    sumOfSquaresOfNumbers += i ** 2;
  }
  squareOfSumOfNumbers **= 2;

  difference = squareOfSumOfNumbers - sumOfSquaresOfNumbers;
  return difference;
}

differenceOfSquares(10);

// Simple Maths Test 7kyu
function numberProperty(n) {
  let isPrime, isEven, isMultipleOf10;

  if (n < 2) {
    isPrime = false;
  } else {
    isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
  }

  isEven = n % 2 == 0 ? true : false;

  isMultipleOf10 = n % 10 == 0 || n % 10 == -0 ? true : false;

  return [isPrime, isEven, isMultipleOf10];
}

numberProperty(7);

// Divisible by previous digit? 7kyu
function divisibleByLast(n) {
  let stringN = String(n);
  let numbersArray = stringN.split("");

  let isDivisible = numbersArray.map((number, index) => {
    if (index === 0) return false;
    else {
      return numbersArray[index] % numbersArray[index - 1] === 0 ? true : false;
    }
  });

  return isDivisible;
}

divisibleByLast(73312);

// Simple consecutive pairs 7kyu
function pairs(ar) {
  let count = 0;

  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] == ar[i + 1] + 1 || ar[i] == ar[i + 1] - 1) {
      count++;
    }
  }

  return count;
}

pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]);

// Number Pairs 7kyu
function getLargerNumbers(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] >= arr2[i] ? newArray.push(arr1[i]) : newArray.push(arr2[i]);
  }

  return newArray;
}

getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]);

// The highest profit wins! 7kyu
function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
}

minMax([1, 2, 3, 4, 5]);

// Odd-Even String Sort 7kyu
function sortMyString(S) {
  let evenIndexed = "";
  let oddIndexed = "";

  let letters = S.split("");

  letters.forEach((letter, index) => {
    index % 2 ? (oddIndexed += letter) : (evenIndexed += letter);
  });

  return `${evenIndexed} ${oddIndexed}`;
}

sortMyString("CodeWars");

// Sort the Vowels! 7kyu
function sortVowels(s) {
  if (typeof s == "number" || s === null || s === undefined) return "";

  let sorted = "";

  for (let char of s) {
    if (/[aeiou]/i.test(char)) {
      sorted += `|${char}\n`;
    } else {
      sorted += `${char}|\n`;
    }
  }

  sorted = sorted.replace(/\n$/, "");
  return sorted;
}

sortVowels("Codewars");

// Nickname Generator 7kyu
function nicknameGenerator(name) {
  if (name.length <= 3) return "Error: Name too short";

  if (/[aeiou]/.test(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}

nicknameGenerator("Kimberly");

// Histogram - H1 7kyu
function histogram(results) {
  let six = `6|${"#".repeat(results[5])}${
    results[5] > 0 ? ` ${results[5]}` : ""
  }`;
  let five = `5|${"#".repeat(results[4])}${
    results[4] > 0 ? ` ${results[4]}` : ""
  }`;
  let four = `4|${"#".repeat(results[3])}${
    results[3] > 0 ? ` ${results[3]}` : ""
  }`;
  let three = `3|${"#".repeat(results[2])}${
    results[2] > 0 ? ` ${results[2]}` : ""
  }`;
  let two = `2|${"#".repeat(results[1])}${
    results[1] > 0 ? ` ${results[1]}` : ""
  }`;
  let one = `1|${"#".repeat(results[0])}${
    results[0] > 0 ? ` ${results[0]}` : ""
  }`;

  return `${six}\n${five}\n${four}\n${three}\n${two}\n${one}\n`;
}

histogram([7, 3, 10, 1, 0, 5]);

// Pig Sursurunga 6kyu
function sursurungal(txt) {
  let regex = /(\d+)\s+(\w+)/g;

  let pigSursurungal = txt.replace(regex, (match, number, string) => {
    if (parseInt(number) == 2) {
      return `${number} bu${string.slice(0, -1)}`;
    }
    if (parseInt(number) >= 3 && parseInt(number) <= 9) {
      return `${number} ${string.slice(0, -1)}zo`;
    }
    if (parseInt(number) > 9) {
      return `${number} ga${string.slice(0, -1)}ga`;
    }

    return match;
  });

  return pigSursurungal;
}

sursurungal("5 lions and 15 zebras");

// C.Wars 7kyu
function initials(n) {
  let words = n.split(" ");
  let name = words.map((word, index) => {
    if (index < words.length - 1) {
      return word[0].toUpperCase();
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });

  return name.join(".");
}

initials("Barack hussain obama");

// Colored Hexes! 7kyu
function hexColor(codes) {
  let [red, green, blue] = codes.split(" ").map((number) => +number);

  if (!codes || (red == 0 && green == 0 && blue == 0)) {
    return "black";
  } else if (red == green && green == blue && blue == red) {
    return "white";
  } else if (red > green && red > blue) {
    return "red";
  } else if (green > red && green > blue) {
    return "green";
  } else if (blue > red && blue > green) {
    return "blue";
  } else if (red == blue) {
    return "magenta";
  } else if (green == red) {
    return "yellow";
  } else if (blue == green) {
    return "cyan";
  }
}

hexColor("121 245 255");

// Turn any word into a beef taco 7kyu
function tacofy(word) {
  let array = word.split("");

  let tacos = array
    .map((letter) => {
      if (/[aeiou]/i.test(letter)) return "beef";
      else if (letter.toLowerCase() == "c") return "cheese";
      else if (letter.toLowerCase() == "g") return "guacamole";
      else if (letter.toLowerCase() == "l") return "lettuce";
      else if (letter.toLowerCase() == "s") return "salsa";
      else if (letter.toLowerCase() == "t") return "tomato";
      else return "";
    })
    .filter((word) => word.length > 0);

  tacos.push("shell");
  tacos.unshift("shell");
  return tacos;
}

tacofy("ogl");

// Airport itinerary 7kyu
function itinerary(travel) {
  let cities = [];

  for (let part of travel) {
    cities.push(...Object.values(part));
  }

  let uniqueCities = [];

  cities.forEach((city, index) => {
    if (index === 0 || uniqueCities[uniqueCities.length - 1] !== city) {
      uniqueCities.push(city);
    }
  });

  return uniqueCities.join("-");
}

itinerary([
  { in: "TRN", out: "FCO" },
  { in: "FCO", out: "TRN" },
]);

// Dinner Plans 7kyu
function commonGround(s1, s2) {
  let words1 = s1.split(" ");
  let words2 = s2.split(" ");

  let commonWords = [];

  for (let word of words2) {
    if (words1.includes(word) && !commonWords.includes(word)) {
      commonWords.push(word);
    }
  }

  return commonWords.length === 0 ? "death" : commonWords.join(" ");
}

commonGround("eat a burger and drink a coke", "drink a coke");

// De-Emojify 7kyu
function deEmojify(emojiString) {
  if (emojiString === "") return "";

  let table = {
    ":)": 0,
    ":D": 1,
    ">(": 2,
    ">:C": 3,
    ":/": 4,
    ":|": 5,
    ":O ": 6,
    ";)": 7,
    "^.^": 8,
    ":(": 9,
  };

  let split = emojiString.split("  ");

  let numbers = split.map((chain) => {
    let digits = chain
      .split(" ")
      .map((char) => table[char])
      .join("");
    return +digits;
  });

  let letters = numbers.map((number) => String.fromCodePoint(number));
  return letters.join("");
}

deEmojify(
  ";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"
);

// Number encrypting: cypher 7kyu
function cypher(string) {
  let cyphered = "";

  for (let char of string) {
    switch (char) {
      case "I":
      case "l":
        cyphered += 1;
        break;
      case "R":
      case "z":
        cyphered += 2;
        break;
      case "E":
      case "e":
        cyphered += 3;
        break;
      case "A":
      case "a":
        cyphered += 4;
        break;
      case "S":
      case "s":
        cyphered += 5;
        break;
      case "G":
      case "b":
        cyphered += 6;
        break;
      case "T":
      case "t":
        cyphered += 7;
        break;
      case "B":
        cyphered += 8;
        break;
      case "g":
        cyphered += 9;
        break;
      case "O":
      case "o":
        cyphered += 0;
        break;

      default:
        cyphered += char;
        break;
    }
  }

  return cyphered;
}

cypher("Hello World");

// Is it a letter? 7kyu
function isItLetter(character) {
  let code = character.codePointAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
    ? true
    : false;
}

isItLetter("a");

// A Letter's Best Friend 7kyu
function bestFriend(txt, a, b) {
  if (!txt.includes(a)) return true;
  if (!txt.includes(b)) return false;

  let pairs = [];

  for (let i = 0; i < txt.length; i++) {
    if (txt[i] == a) {
      pairs.push(`${txt[i]}${txt[i + 1]}`);
    }
  }

  return pairs.every((pair) => pair[0] == a && pair[1] == b);
}

bestFriend("he headed to the store", "h", "e");

// Rock Paper Scissors Lizard Spock 7kyu
function rpsls(pl1, pl2) {
  if (pl1 == pl2) return "Draw!";
  else if (
    (pl1 == "Scissors" && pl2 == "Paper") ||
    (pl1 == "Paper" && pl2 == "Rock") ||
    (pl1 == "Rock" && pl2 == "Lizard") ||
    (pl1 == "Lizard" && pl2 == "Spock") ||
    (pl1 == "Spock" && pl2 == "Scissors") ||
    (pl1 == "Scissors" && pl2 == "Lizard") ||
    (pl1 == "Lizard" && pl2 == "Paper") ||
    (pl1 == "Paper" && pl2 == "Spock") ||
    (pl1 == "Spock" && pl2 == "Rock") ||
    (pl1 == "Rock" && pl2 == "Scissors")
  ) {
    return "Player 1 Won!";
  } else return "Player 2 Won!";
}

rpsls("spock", "lizard");

// Temperature converter 6kyu
function convertTemp(temp, from_scale, to_scale) {
  function toKelvin(temp, from_scale) {
    if (from_scale == "C") {
      return temp + 273.15;
    } else if (from_scale == "F") {
      return ((temp + 459.67) * 5) / 9;
    } else if (from_scale == "R") {
      return (temp * 5) / 9;
    } else if (from_scale == "De") {
      return 373.15 - (temp * 2) / 3;
    } else if (from_scale == "N") {
      return (temp * 100) / 33 + 273.15;
    } else if (from_scale == "Re") {
      return (temp * 5) / 4 + 273.15;
    } else if (from_scale == "Ro") {
      return ((temp - 7.5) * 40) / 21 + 273.15;
    } else {
      return temp;
    }
  }

  const kelvinTemp = toKelvin(temp, from_scale);

  function fromKelvin(kelvinTemp, to_scale) {
    if (to_scale == "C") {
      return kelvinTemp - 273.15;
    } else if (to_scale == "F") {
      return (kelvinTemp * 9) / 5 - 459.67;
    } else if (to_scale == "R") {
      return (kelvinTemp * 9) / 5;
    } else if (to_scale == "De") {
      return ((373.15 - kelvinTemp) * 3) / 2;
    } else if (to_scale == "N") {
      return ((kelvinTemp - 273.15) * 33) / 100;
    } else if (to_scale == "Re") {
      return ((kelvinTemp - 273.15) * 4) / 5;
    } else if (to_scale == "Ro") {
      return ((kelvinTemp - 273.15) * 21) / 40 + 7.5;
    } else {
      return kelvinTemp;
    }
  }

  const result = fromKelvin(kelvinTemp, to_scale);
  return Math.round(result);
}

convertTemp(-30, "De", "K");

// All Star Code Challenge #17 7kyu
function findYear(month, dayOfWeek) {
  if (month < 0 || month > 11) return 0;
  if (dayOfWeek < 0 || dayOfWeek > 6) return 0;

  for (let i = 2014; i <= 2050; i++) {
    const date = new Date(i, month, 1);

    if (date.getDay() == dayOfWeek) {
      return i;
    }
  }
}

findYear(11, 2);

// Fizz Buzz Cuckoo Clock 7kyu
function fizzBuzzCuckooClock(time) {
  let result = "";

  let [hour, minute] = time.split(":");
  hour = hour % 12 == 0 ? 12 : hour % 12;
  minute = +minute;

  if (minute == 0) {
    result = "Cuckoo ".repeat(hour).trimEnd();
  } else if (minute == 30) {
    result = "Cuckoo";
  } else if (minute % 15 == 0) {
    result = "Fizz Buzz";
  } else if (minute % 3 == 0) {
    result = "Fizz";
  } else if (minute % 5 == 0) {
    result = "Buzz";
  } else {
    result = "tick";
  }

  return result;
}

fizzBuzzCuckooClock("12:00");

// Cat Years, Dog Years (2) 7kyu
function ownedCatAndDog(catYears, dogYears) {
  let ownedCat = 0,
    ownedDog = 0;

  if (catYears < 15) {
    ownedCat = 0;
  } else if (catYears < 24) {
    ownedCat = 1;
  } else {
    ownedCat = 2 + Math.floor((catYears - 24) / 4);
  }

  if (dogYears < 15) {
    ownedDog = 0;
  } else if (dogYears < 24) {
    ownedDog = 1;
  } else {
    ownedDog = 2 + Math.floor((dogYears - 24) / 5);
  }

  return [ownedCat, ownedDog];
}

ownedCatAndDog(56, 64);
