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
