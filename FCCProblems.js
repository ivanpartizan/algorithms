// Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0;
  let start = arr[0];
  let end = arr[1];

  if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
  if (start > end) {
    for (let i = start; i >= end; i--) {
      sum += i;
    }
    return sum;
  }
}

sumAll([1, 4]);

// Diff Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy
function destroyer(arr, ...args) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter((obj) => {
    return sourceKeys.every((key) => {
      return obj.hasOwnProperty(key) && source[key] == obj[key];
    });
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

// Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");

// Pig Latin
function translatePigLatin(str) {
  let vowelPosition = str.search(/[aeiou]/);
  if (vowelPosition == -1) {
    return `${str}ay`;
  }
  if (vowelPosition == 0) {
    return `${str}way`;
  } else {
    let slice = str.slice(0, vowelPosition);
    let left = str.slice(vowelPosition);
    return `${left}${slice}ay`;
  }
}

translatePigLatin("consonant");

// Search and Replace
function myReplace(str, before, after) {
  let beforeFirstChar = before.slice(0, 1);
  if (beforeFirstChar === beforeFirstChar.toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");

// DNA Pairing
function pairElement(str) {
  let pairs = [];

  let array = str.split("");

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
    }
  }

  return pairs;
}

pairElement("GCG");

// Missing letters
function fearNotLetter(str) {
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  let firstLetterCode = firstLetter.codePointAt(0);
  let lastLetterCode = lastLetter.codePointAt(0);

  let allLetters = [];
  for (let i = firstLetterCode; i <= lastLetterCode; i++) {
    allLetters.push(String.fromCodePoint(i));
  }

  let strArray = str.split("");

  let missingLetter;

  for (let i = 0; i < allLetters.length; i++) {
    if (!strArray.includes(allLetters[i])) {
      missingLetter = allLetters[i];
    }
  }

  return missingLetter;
}

fearNotLetter("abce");

// Sorted Union
function uniteUnique(arr, ...rest) {
  let unique = [];

  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  for (let arr of rest) {
    for (let num of arr) {
      if (!unique.includes(num)) {
        unique.push(num);
      }
    }
  }

  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
  let ampersand = "&amp;";
  let lessThan = "&lt;";
  let greaterThan = "&gt;";
  let doubleQuote = "&quot;";
  let singleQuote = "&apos;";

  let array = str.split("");

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case `&`:
        array[i] = ampersand;
        break;
      case `<`:
        array[i] = lessThan;
        break;
      case `>`:
        array[i] = greaterThan;
        break;
      case `"`:
        array[i] = doubleQuote;
        break;
      case `'`:
        array[i] = singleQuote;
        break;
    }
  }

  return array.join("");
}

convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let fibonacciNumbers = [1, 1];

  for (let i = 2; i <= num; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
    if (fibonacciNumbers[i] > num) {
      break;
    }
  }

  let sum = 0;
  for (let number of fibonacciNumbers) {
    if (number % 2 == 1 && number <= num) {
      sum += number;
    }
  }

  return sum;
}

sumFibs(10);

// Sum All Primes
function sumPrimes(num) {
  let primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  let sum = primes.reduce((a, b) => a + b, 0);
  return sum;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

sumPrimes(10);

// Smallest Common Multiple
function smallestCommons(arr) {
  let numbers = [];
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  let smallestCommonMultiple = max;
  while (!numbers.every((number) => smallestCommonMultiple % number == 0)) {
    smallestCommonMultiple += max;
  }
  return smallestCommonMultiple;
}

smallestCommons([1, 5]);
