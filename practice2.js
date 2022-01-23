// Numbers with The Highest Amount of Divisors
function procArrInt(listNum) {
  let totalAmountOfNumbers = listNum.length;

  let totalPrimeNumbers = 0;

  listNum.forEach((num) => {
    if (isPrime(num)) {
      totalPrimeNumbers++;
    }
  });

  let numberOfDivisors = listNum.map(countDivisors);
  let highestAmountOfDivisors = Math.max(...numberOfDivisors);

  let obj = {};
  listNum.map((number) => {
    obj[number] = countDivisors(number);
  });

  let numbersWithHighestAmountOfDivisors = [];
  for (let key in obj) {
    if (obj[key] == highestAmountOfDivisors) {
      numbersWithHighestAmountOfDivisors.push(+key);
    }
  }

  return [
    totalAmountOfNumbers,
    totalPrimeNumbers,
    [highestAmountOfDivisors, numbersWithHighestAmountOfDivisors],
  ];
}

function countDivisors(num) {
  let numberOfDivisors = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      numberOfDivisors++;
    }
  }
  return numberOfDivisors;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

// More Zeros than Ones
function moreZeros(s) {
  let array = [];

  for (let i = 0; i < s.length; i++) {
    let code = s[i].codePointAt();
    let binaryNumber = convertToBinary(code);

    if (countZerosAndOnes(binaryNumber) && !array.includes(s[i])) {
      array.push(s[i]);
    }
  }

  return array;
}

function convertToBinary(number) {
  return number.toString(2);
}

function countZerosAndOnes(string) {
  let zeros = 0;
  let ones = 0;
  for (let character of string) {
    if (character == 0) {
      zeros++;
    }
    if (character == 1) {
      ones++;
    }
  }
  return zeros > ones ? true : false;
}

moreZeros("abcde");

// Round by 0.5 steps
function solution(n) {
  let integer = parseInt(n);
  let decimalPart = n % 1;

  if (decimalPart >= 0 && decimalPart < 0.25) {
    return integer;
  }
  if (decimalPart >= 0.25 && decimalPart < 0.75) {
    return integer + 0.5;
  }
  if (decimalPart >= 0.75 && decimalPart <= 1) {
    return integer + 1;
  }
}

solution(4.75);
// OR Math.round(n * 2) / 2;

// Maximum Product
function adjacentElementsProduct(array) {
  let products = [];

  for (let i = 0; i < array.length - 1; i++) {
    let subProduct = array[i] * array[i + 1];
    products.push(subProduct);
  }

  return Math.max(...products);
}

adjacentElementsProduct([1, 2, 3]);

// Padovan numbers
function padovan(n) {
  if (n <= 2) {
    return 1;
  } else {
    return padovan(n - 2) + padovan(n - 3);
  }
}

// Birthday I - Cake
function cake(candles, debris) {
  let total = 0;

  for (let i = 0; i < debris.length; i++) {
    if (i % 2 == 0) {
      total += debris.charCodeAt(i);
    } else {
      total += debris.charCodeAt(i) - 96;
    }
  }

  let seventyPercent = (candles * 70) / 100;

  return total > seventyPercent ? "Fire!" : "That was close!";
}

cake(900, "abcdef");

// Birthday II - Presents
function present(x, y) {
  if (x == "goodpresent") {
    let newString = "";
    for (let i = 0; i < x.length; i++) {
      newString += String.fromCodePoint(x.codePointAt(i) + y);
    }
    return newString;
  }

  if (x == "crap" || x == "empty") {
    return [...x].sort().join("");
  }

  if (x == "bang") {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += x.codePointAt(i) - y;
    }
    return sum;
  }

  if (x == "badpresent") {
    return "Take this back!";
  }

  if (x == "dog") {
    return `pass out from excitement ${y} times`;
  }
}

present("goodpresent", 9);

// Double Trouble
function trouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] == t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

trouble([4, 1, 1, 1, 4], 2);

// Compare powers
function comparePowers(n1, n2) {
  let [base1, exponent1] = [...n1];
  let [base2, exponent2] = [...n2];

  let power1 = Math.pow(base1, exponent1);
  let power2 = Math.pow(base2, exponent2);

  return power1 > power2 ? -1 : power1 == power2 ? 0 : 1;
}

comparePowers([3, 9], [5, 6]);

// Measuring Average Speed
function calculateSpeed(distance, time) {
  let distanceNumber = parseInt(distance);
  let timeNumber = parseInt(time);

  if (distance.includes("km")) {
    distanceNumber *= 1000;
  }
  if (time.includes("min")) {
    timeNumber *= 60;
  }

  let averageSpeedInMetrePerSecond = distanceNumber / timeNumber;
  let averageSpeedInMilesPerHour = Math.round(
    averageSpeedInMetrePerSecond * 2.23694
  );
  return `${averageSpeedInMilesPerHour}mph`;
}

calculateSpeed("573km", "39min");

// Stanton measure
function stantonMeasure(array) {
  let numberOfOnes = 0;
  for (let number of array) {
    if (number == 1) {
      numberOfOnes++;
    }
  }
  let stantonNumber = 0;
  for (let number of array) {
    if (number == numberOfOnes) {
      stantonNumber++;
    }
  }
  return stantonNumber;
}

stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]);

// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
function remove(string) {
  let newString = "";
  let words = string.split(" ");
  for (let word of words) {
    if (!word.match(/^!\w+$|^\w+!$/)) {
      newString += `${word} `;
    }
  }
  return newString.trim();
}

remove("Hi! !Hi! Hi!");

// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
function balance(left, right) {
  let leftScore = 0;
  let rightScore = 0;

  for (let mark of left) {
    mark == "!" ? (leftScore += 2) : (leftScore += 3);
  }
  for (let mark of right) {
    mark == "!" ? (rightScore += 2) : (rightScore += 3);
  }
  return leftScore > rightScore
    ? "Left"
    : leftScore < rightScore
    ? "Right"
    : "Balance";
}

balance("!!", "??");

// Convert ISBN-10 to ISBN-13
function isbnConverter(isbn) {
  let withoutLastCharacter = isbn.slice(0, isbn.length - 1);
  let withPrefix = `978-${withoutLastCharacter}`;
  let twelveDigits = withPrefix.match(/\d+/g).join("");

  let sum = 0;
  for (let i = 0; i < twelveDigits.length; i++) {
    if (i % 2 == 0) {
      sum += twelveDigits[i] * 1;
    } else {
      sum += twelveDigits[i] * 3;
    }
  }

  let checkDigit = sum % 10 == 0 ? 0 : 10 - (sum % 10);
  let newIsbn = `${withPrefix}${checkDigit}`;
  return newIsbn;
}

isbnConverter("1-85326-158-0");

// Ones and Zeros
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  for (let i = arr.length - 1, b = 1; i >= 0; i--, b *= 2) {
    let number = arr[i] * b;
    sum += number;
  }
  return sum;
};

binaryArrayToNumber([0, 0, 0, 1]);

// Simple Fun #154: Zero And One
function zeroAndOne(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] != s[i + 1]) {
      s = s.replace(s[i], "").replace(s[i + 1], " ");
    }
  }

  s = s.replace(/[' ']/g, "");

  return s.length;
}

zeroAndOne("01010");

// Two Oldest Ages
function twoOldestAges(ages) {
  let twoMaxValues = [];

  let maxValue = Math.max(...ages);
  let countMaxValues = ages.filter((number) => number == maxValue);

  if (countMaxValues.length >= 2) {
    return countMaxValues.slice(0, 2);
  }
  if (countMaxValues.length == 1) {
    twoMaxValues.unshift(maxValue);
    let newAges = ages.filter((number) => number != maxValue);
    let secondMaxValue = Math.max(...newAges);
    twoMaxValues.unshift(secondMaxValue);

    return twoMaxValues;
  }
}

twoOldestAges([1, 5, 87, 45, 8, 8]);

// Pair of gloves
function numberOfPairs(gloves) {
  let object = {};
  let pairs = 0;

  for (let glove of gloves) {
    if (object[glove]) {
      object[glove]++;
    } else {
      object[glove] = 1;
    }
  }

  for (let color in object) {
    if (object[color] >= 2) {
      if (object[color] % 2 == 0) {
        pairs += object[color] / 2;
      } else {
        pairs += Math.floor(object[color] / 2);
      }
    }
  }
  return pairs;
}

const myGloves = ["red", "green", "red", "blue", "blue"];
numberOfPairs(myGloves);

// Make the Deadfish swim
function parse(data) {
  let value = 0;
  let array = [];
  for (let character of data) {
    switch (character) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value *= value;
        break;
      case "o":
        array.push(value);
        break;
    }
  }
  return array;
}

parse("iiisxxxdoso");

// A Gift Well Spent
var buy = function (x, arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (x - arr[i] == arr[j]) {
        return [i, j];
      }
  }
  return null;
};

buy(5, [1, 2, 3, 4, 5]);

// Folding your way to the moon
function foldTo(distance) {
  let thickness = 0.0001;
  let count = 0;
  if (distance < 0) {
    return null;
  } else {
    while (thickness < distance) {
      thickness *= 2;
      count++;
    }
  }
  return count;
}

foldTo(384000000);

// Simple Fun #238: Tennis Game Points
function tennisGamePoints(score) {
  let object = {
    love: 0,
    15: 1,
    30: 2,
    40: 3,
  };

  let points = 0;

  if (score == "15-all") {
    points += 2;
  } else if (score == "30-all") {
    points += 4;
  } else {
    let [firstPlayer, secondPlayer] = score.split("-");
    points += object[firstPlayer] + object[secondPlayer];
  }

  return points;
}

tennisGamePoints("30-all");

// Simple Fun #165: Withdraw
function withdraw(n) {
  let withdrawn100 = 0;
  let withdrawn50 = 0;
  let withdrawn20 = 0;

  while (n >= 20) {
    if (n % 50 == 0) {
      break;
    }
    n -= 20;
    withdrawn20++;
  }
  while (n >= 100) {
    n -= 100;
    withdrawn100++;
  }
  while (n >= 50) {
    n -= 50;
    withdrawn50++;
  }

  return [withdrawn100, withdrawn50, withdrawn20];
}

withdraw(370);
