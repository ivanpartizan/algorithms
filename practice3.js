// The Barksdale Code
function decode(string) {
  return string
    .split("")
    .map((num) => {
      return num == "5" ? "0" : num == "0" ? "5" : 10 - num;
    })
    .join("");
}

decode("4103432323");

// Multiplication table
multiplicationTable = function (size) {
  let table = [];

  for (let i = 1; i <= size; i++) {
    let inner = [];

    for (let j = 1; j <= size; j++) {
      inner.push(i * j);
    }
    table.push(inner);
  }

  return table;
};

multiplicationTable(5);

// Sorting the Odd way!
function sortItOut(array) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(array[i]) % 2 == 0) {
      evenNumbers.push(array[i]);
    } else {
      oddNumbers.push(array[i]);
    }
  }
  evenNumbers.sort((a, b) => b - a);
  oddNumbers.sort((a, b) => a - b);
  return oddNumbers.concat(evenNumbers);
}

sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]);

// Sort the odd
function sortArray(array) {
  let oddNumbers = array
    .filter((num) => num % 2 == 1 || num % 2 == -1)
    .sort((a, b) => a - b);
  return array.map((num, index) => (num % 2 == 0 ? num : oddNumbers.shift()));
}

sortArray([5, 3, 2, 8, 1, 4]);

// Sort odd and even numbers in different order
function sortArray(array) {
  let oddNumbers = array
    .filter((number) => number % 2 == 1)
    .sort((a, b) => a - b);
  let evenNumbers = array
    .filter((number) => number % 2 == 0)
    .sort((a, b) => b - a);

  return array.map((number) =>
    number % 2 == 1 ? oddNumbers.shift() : evenNumbers.shift()
  );
}

sortArray([5, 3, 2, 8, 1, 4, 11]);

// Get the Middle Character
function getMiddle(s) {
  return s.length % 2 == 1
    ? s[Math.floor(s.length / 2)]
    : `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}

getMiddle("testing");

// Character Counter
function validateWord(s) {
  let object = {};
  for (let character of s.toLowerCase()) {
    if (object[character]) {
      object[character]++;
    } else {
      object[character] = 1;
    }
  }

  let allValues = Object.values(object);
  let firstValue = Object.values(object)[0];
  return allValues.every((number) => number == firstValue);
}

validateWord("abcabc");

// Character counts
String.prototype.characterCount = function (charsToCount) {
  if (!charsToCount) return undefined;
  let object = {};
  for (let character of this) {
    if (object[character]) {
      object[character]++;
    } else {
      object[character] = 1;
    }
  }

  let counts = [];
  for (let char of charsToCount) {
    counts.push(object[char]);
  }

  counts = counts.map((num) => {
    return num === undefined ? 0 : num;
  });

  return counts.length == 1 ? +String(counts) : counts;
};

characterCount("booop-booop-deee-doo-dooop", "ado");

// last digits of a number
function lastDigit(n, d) {
  let array = [];
  let numberString = String(n);
  if (numberString.length > d) {
    for (let i = numberString.length - d; i < numberString.length; i++) {
      array.push(+numberString[i]);
    }
  } else {
    for (let i = 0; i < numberString.length; i++) {
      array.push(+numberString[i]);
    }
  }
  return array;
}

lastDigit(123767, 4);

// Buying a car
function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let moneyRemaining = 0;
  let savings = 0;

  if (startPriceOld >= startPriceNew) {
    moneyRemaining = startPriceOld - startPriceNew;
  } else {
    for (
      let i = 1, percent = percentLossByMonth;
      savings + startPriceOld < startPriceNew;
      i++
    ) {
      if (i % 2 == 0) {
        percent += 0.5;
      }
      savings += savingperMonth;
      startPriceOld = startPriceOld * ((100 - percent) / 100);
      startPriceNew = startPriceNew * ((100 - percent) / 100);
      moneyRemaining = savings + startPriceOld - startPriceNew;
      months++;
    }
  }

  return [months, Math.round(moneyRemaining)];
}

nbMonths(2000, 8000, 1000, 1.5);
