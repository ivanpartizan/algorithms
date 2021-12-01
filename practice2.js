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
