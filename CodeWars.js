// Summing a number's digits 7kyu
function sumDigits(number) {
  let digits = String(Math.abs(number));
  let sum = 0;
  for (let digit of digits) {
    sum += +digit;
  }
  return sum;
}

// Sum of integers in string 7kyu
function sumOfIntegersInString(s) {
  let integers = [];
  let currentInteger = "";

  for (let char of s) {
    if (isFinite(char)) {
      currentInteger += char;
    } else if (currentInteger.length > 0) {
      integers.push(currentInteger);
      currentInteger = "";
    }
  }

  if (currentInteger.length > 0) {
    integers.push(currentInteger);
  }

  let sum = 0;

  for (let num of integers) {
    sum += +num;
  }

  return sum;
}

sumOfIntegersInString("h3ll0w0rld");

// Sum - Square Even, Root Odd 7kyu
const sumSquareEvenRootOdd = (nums) => {
  let newNums = nums.map((num) => (num % 2 ? Math.sqrt(num) : num * num));

  let sum = newNums.reduce((acc, value) => acc + value, 0);

  return Math.round(sum * 100) / 100;
};

sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]);

// Reduce My Fraction 7kyu
function reduce(fraction) {
  let min = Math.min(...fraction);
  let max = Math.max(...fraction);
  let divisor = 1;

  for (let i = 1; i <= min; i++) {
    if (min % i == 0 && max % i == 0) divisor = i;
  }

  return [fraction[0] / divisor, fraction[1] / divisor];
}

reduce([45, 120]);

// Odd or Even? 7kyu
function oddOrEven(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum % 2 ? "odd" : "even";
}

oddOrEven([0, 1, 5]);

// Even numbers in an array 7kyu
function evenNumbers(array, number) {
  let evens = [];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 == 0 && evens.length < number) evens.push(array[i]);
  }

  return evens.reverse();
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// How many e-mails we sent today? 7kyu
function getPercentage(sent, limit = 1000) {
  if (sent == 0) return "No e-mails sent";
  if (sent >= limit) return "Daily limit is reached";
  else return `${Math.trunc((sent / limit) * 100)}%`;
}

getPercentage(101, 1000);

// max diff - easy 7kyu
function maxDiff(list) {
  if (list.length == 1 || list.length == 0) return 0;

  let largestValue = Math.max(...list);
  let smallestValue = Math.min(...list);

  return largestValue - smallestValue;
}

maxDiff([0, 1, 2, 3, 4, 5, 6]);

// Numbers Which Sum of Powers of Its Digits Is The Same Number 7kyu
function eqSumPowdig(hMax, exp) {
  let numbers = [];

  for (let i = 2; i <= hMax; i++) {
    let hMaxNew = String(i)
      .split("")
      .map((num) => +num)
      .map((num) => num ** exp);
    let hMaxNewSum = hMaxNew.reduce((acc, value) => acc + value, 0);

    if (i === hMaxNewSum) {
      numbers.push(i);
    }
  }

  return numbers;
}

eqSumPowdig(1500, 3);

// The Most Amicable of Numbers 7kyu
function amicableNumbers(num1, num2) {
  let divisors1 = [],
    divisors2 = [];

  for (let i = 1; i < num1; i++) {
    if (num1 % i == 0) {
      divisors1.push(i);
    }
  }

  for (let i = 1; i < num2; i++) {
    if (num2 % i == 0) {
      divisors2.push(i);
    }
  }

  let sum1 = divisors1.reduce((acc, num) => acc + num, 0);
  let sum2 = divisors2.reduce((acc, num) => acc + num, 0);

  return num1 == sum2 && num2 == sum1 ? true : false;
}

amicableNumbers(220, 284);

// Product of Largest Pair 7kyu
function maxProduct(a) {
  let largestNumber = Math.max(...a);
  let filtered = a.filter((num) => num != largestNumber);
  let secondLargestNumber = Math.max(...filtered);

  return largestNumber * secondLargestNumber;
}

maxProduct([56, 335, 195, 443, 6, 494, 252]);

// Area of a Circle 7kyu
function circleArea(radius) {
  if (radius <= 0) throw new Error();
  return radius * radius * Math.PI;
}

circleArea(1);

// Sort rectangles and circles by area II 7kyu
function sortByArea(array) {
  let areas = array
    .map((object, index) => {
      let area;
      if (object.length === 2) {
        area = object[0] * object[1];
      } else {
        area = object * object * Math.PI;
      }
      return { area, index };
    })
    .sort((a, b) => a.area - b.area);

  let sortedArray = areas.map((item) => array[item.index]);

  return sortedArray;
}

sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]);

// noobCode 04: HOT SINGLES...compare two arrays, return the unpaired items ! 7kyu
function hotSingles(arr1, arr2) {
  let singles = [];

  for (let item of arr1) {
    if (!arr2.includes(item)) {
      singles.push(item);
    }
  }

  for (let item of arr2) {
    if (!arr1.includes(item)) {
      singles.push(item);
    }
  }

  return [...new Set(singles)];
}

hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]);

// Selective fear of numbers 7kyu
function AmIAfraid(day, num) {
  if (day == "Monday" && num == 12) return true;
  if (day == "Tuesday" && num > 95) return true;
  if (day == "Wednesday" && num == 34) return true;
  if (day == "Thursday" && num == 0) return true;
  if (day == "Friday" && num % 2 == 0) return true;
  if (day == "Saturday" && num == 56) return true;
  if (day == "Sunday" && num == 666) return true;
  if (day == "Sunday" && num == -666) return true;

  return false;
}

AmIAfraid("Monday", 13);

// Perfect squares, perfect fun 7kyu
function squareIt(int) {
  let string = String(int);
  let newString = "";

  let intLength = string.length;
  let squareRoot = Math.sqrt(intLength);

  if (intLength == 1) return string;

  if (!Number.isInteger(squareRoot)) {
    return "Not a perfect square!";
  } else {
    for (let i = 0; i < intLength; i += squareRoot) {
      newString += `${string.slice(i, i + squareRoot)}\n`;
    }
    return newString.trim();
  }
}

squareIt(1212);

// Fix My Phone Numbers! 7kyu
function isItANum(str) {
  let number = str
    .split("")
    .map((char) => {
      if (Number.isInteger(+char) && char !== " ") {
        return char;
      }
    })
    .join("");

  if (number.length == 11 && number[0] == 0) {
    return number;
  } else {
    return "Not a phone number";
  }
}

isItANum("S:)0207ERGQREG88349F82!efRF)");

// Cryptanalysis Word Patterns 7kyu
function wordPattern(word) {
  let simpleWord = "";

  for (let char of word.toLowerCase()) {
    if (!simpleWord.includes(char)) simpleWord += char;
  }

  let array = [];

  for (let char of word.toLowerCase()) {
    array.push(simpleWord.indexOf(char));
  }

  return array.join(".");
}

wordPattern("helLo");

// Remove anchor from URL 7kyu
function removeUrlAnchor(url) {
  if (url.includes("#")) {
    let split = url.split("#");
    return split[0];
  } else {
    return url;
  }
}

removeUrlAnchor("www.codewars.com#about");

// NATO Phonetic Alphabet 7kyu
function nato(word) {
  return word
    .toUpperCase()
    .split("")
    .map((char) => letters[char])
    .join(" ");
}

let letters = {
  A: "Alpha",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu",
};

nato("abc");

// Longest vowel chain 7kyu
function solve(s) {
  let array = [];
  let substring = "";

  for (let char of s) {
    if (/[aeiou]/.test(char)) {
      substring += char;
    } else {
      array.push(substring);
      substring = "";
    }
  }

  let substringLength = array.map((substring) => substring.length);
  return Math.max(...substringLength);
}

solve("codewarriors");

// Shortest Word 7kyu
function findShort(s) {
  let words = s.split(" ");
  let lengths = words.map((word) => word.length);
  return Math.min(...lengths);
}

findShort("bitcoin take over the world maybe who knows perhaps");

// Find the capitals 7kyu
function capitals(word) {
  let capitalIndexes = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      capitalIndexes.push(i);
    }
  }

  return capitalIndexes;
}

capitals("CodEWaRs");

// Break camelCase 6kyu
function solution(string) {
  return string
    .split("")
    .map((char) => {
      if (char == char.toUpperCase()) {
        return ` ${char}`;
      } else {
        return char;
      }
    })
    .join("");
}

solution("camelCasingTest");

// Alternate case 7kyu
function alternateCase(s) {
  let newString = "";

  for (let char of s) {
    char === char.toUpperCase()
      ? (newString += char.toLowerCase())
      : (newString += char.toUpperCase());
  }

  return newString;
}

alternateCase("Hello World");

// Simple Fun #176: Reverse Letter 7kyu
function reverseLetter(str) {
  let reversed = "";

  for (let i = 0; i < str.length; i++) {
    if (str.codePointAt(i) > 96 && str.codePointAt(i) < 123) {
      reversed += str[i];
    }
  }

  reversed = reversed.split("").reverse().join("");
  return reversed;
}

reverseLetter("ab23c");

// Replace every nth 7kyu
function replaceNth(text, n, oldValue, newValue) {
  if (n < 1) return text;

  let array = text.split("");
  let indexes = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] == oldValue) {
      indexes.push(i);
    }
  }

  for (let i = n - 1; i < indexes.length; i += n) {
    array[indexes[i]] = newValue;
  }

  return array.join("");
}

replaceNth("Vader said: No, I am your father!", 2, "a", "o");

// Disemvowel Trolls 7kyu
function disemvowel(str) {
  return str
    .split("")
    .map((char) => {
      if (/[AEIOUaeiou]/.test(char)) {
        return "";
      } else {
        return char;
      }
    })
    .join("");
}

disemvowel("This website is for losers LOL!");

// Regex validate PIN code 7kyu
function validatePIN(pin) {
  let regex1 = /^\d{4}$/;
  let regex2 = /^\d{6}$/;
  return regex1.test(pin) || regex2.test(pin) ? true : false;
}

validatePIN("a234");

// Leap Years 7kyu
function isLeapYear(year) {
  if (year % 4 != 0) {
    return false;
  } else if (year % 100 == 0 && year % 400 != 0) {
    return false;
  } else if (year % 400 == 0 || year % 4 == 0) {
    return true;
  }
}

isLeapYear(2020);

// What century is it? 6kyu
function whatCentury(year) {
  let century = Math.ceil(year / 100);
  let ending = String(century).at(1);

  return century < 21
    ? `${century}th`
    : ending == 1
    ? `${century}st`
    : ending == 2
    ? `${century}nd`
    : ending == 3
    ? `${century}rd`
    : `${century}th`;
}

whatCentury(1999);

// Sort array by string length 7kyu
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Smallest value of an array 7kyu
function min(arr, toReturn) {
  if (toReturn == "value") return Math.min(...arr);
  if (toReturn == "index") {
    let smallestValue = Infinity;
    for (let num of arr) {
      if (num < smallestValue) smallestValue = num;
    }
    return arr.indexOf(smallestValue);
  }
}

min([1, 2, 3, 4, 5], "value");

// Exes and Ohs 7kyu
function XO(str) {
  let x = [],
    o = [];
  for (let char of str) {
    char == "x" || char == "X"
      ? x.push(char)
      : char == "o" || char == "O"
      ? o.push(char)
      : null;
  }
  return x.length == o.length ? true : false;
}

XO("xxOo");

// What time is it? 7kyu
function getMilitaryTime(input) {
  let str = "";
  let arr = input.split(":");
  arr[2] = arr[2].slice(0, 2);

  if (input.includes("AM")) {
    if (arr[0] === "12") {
      arr[0] = "00";
    }
    str = `${arr[0]}:${arr[1]}:${arr[2]}`;
  }

  if (input.includes("PM")) {
    if (arr[0] !== "12") {
      arr[0] = String(Number(arr[0]) + 12);
    }
    str = `${arr[0]}:${arr[1]}:${arr[2]}`;
  }

  return str;
}

getMilitaryTime("12:00:01AM");

// Converting 12-hour time to 24-hour time 7kyu
function to24hourtime(hour, minute, period) {
  let h;

  if (hour == 12 && period == "am") h = 0;
  if (hour == 12 && period == "pm") h = 12;
  if (hour != 12 && period == "am") h = hour;
  if (hour != 12 && period == "pm") h = hour + 12;

  return `${h < 10 ? `0${h}` : h}${minute < 10 ? `0${minute}` : minute}`;
}

to24hourtime(9, 45, "pm");

// Easy Time Convert 7kyu
function timeConvert(num) {
  if (num <= 0) return "00:00";

  let hours = Math.floor(num / 60);
  let minutes = num % 60;

  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

timeConvert(75);

// Running out of space 7kyu
function spacey(array) {
  let result = [];
  let word = "";
  for (let i = 0; i < array.length; i++) {
    word = word + array[i];
    result.push(word);
  }
  return result;
}

// Two numbers are positive 7kyu
function twoArePositive(a, b, c) {
  let positiveNumbers = [];

  for (let number of arguments) {
    if (number > 0) positiveNumbers.push(number);
  }

  return positiveNumbers.length == 2 ? true : false;
}

twoArePositive(2, 4, -3);

// Simple remove duplicates 7kyu
function solve(arr) {
  arr = arr.reverse();

  let newArr = [];

  for (let num of arr) {
    if (!newArr.includes(num)) newArr.push(num);
  }

  return newArr.reverse();
}

solve([3, 4, 4, 3, 6, 3]);

// Remove duplication 7kyu
function removeDuplication(arr) {
  let countNumbers = {};
  let newArray = [];

  for (let number of arr) {
    if (isFinite(number)) {
      countNumbers[number] = countNumbers[number] + 1 || 1;
    }
  }

  for (let [key, value] of Object.entries(countNumbers)) {
    if (value == 1) {
      newArray.push(key);
    }
  }

  return newArray.map((num) => +num);
}

// Count characters in your string 6kyu
function count(string) {
  let obj = {};

  for (let char of string) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}

count("aba");

// Vampire Numbers 7kyu
function vampireTest(a, b) {
  let product = a * b;

  let obj1 = {},
    obj2 = {};

  for (let char of String(a)) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of String(b)) {
    obj1[char] = (obj1[char] || 0) + 1;
  }

  for (let char of String(product)) {
    obj2[char] = (obj2[char] || 0) + 1;
  }

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

vampireTest(30, -51);

// Maximum Multiple 7kyu
function maxMultiple(divisor, bound) {
  let multiples = [];
  for (let i = divisor; i <= bound; i += divisor) {
    multiples.push(i);
  }
  return multiples.at(-1);
}

maxMultiple(37, 200);

// Factorial 7kyu
function factorial(n) {
  if (n == 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Sum Factorial 7kyu
function sumFactorial(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += factorial(number);
  }
  return sum;
}

// Friend or Foe? 7kyu
function friend(friends) {
  return friends.filter((name) => name.length == 4);
}

friend(["Ryan", "Kieran", "Mark"]);

// Replace letters 6kyu
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const vowels = ["a", "e", "i", "o", "u"];

function replaceLetters(word) {
  new_word = "";

  for (let letter of word) {
    let position = alphabet.indexOf(letter);

    if (vowels.indexOf(letter) > -1) {
      let consonant = letter == "a" ? "z" : alphabet[position - 1];
      new_word += consonant;
    } else {
      let vowel =
        position > 0 && position < 4
          ? "e"
          : position > 4 && position < 8
          ? "i"
          : position > 8 && position < 14
          ? "o"
          : position > 14 && position < 20
          ? "u"
          : "a";
      new_word += vowel;
    }
  }

  return new_word;
}

replaceLetters("abcdtuvwxyz");

// All Star Code Challenge #3 7kyu
var removeVowels = function (str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let withoutVowels = "";

  for (let char of str) {
    if (!vowels.includes(char)) {
      withoutVowels += char;
    }
  }

  return withoutVowels;
};

removeVowels("drake");

// Jubilee Year 7kyu
function isJubilee(year) {
  let date = new Date(year, 6, 25);
  return date.getDay() === 0 ? true : false;
}

isJubilee(2020);

// The unknown but known variables: Addition 7kyu
function theVar(theVariables) {
  let [first, second] = theVariables.split("+");
  return first.codePointAt(0) - 96 + (second.codePointAt(0) - 96);
}

theVar("d+g");
