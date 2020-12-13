const finalGrade = (number1, number2, number3) => {
  if (
    number1 < 0 ||
    number1 > 100 ||
    number2 < 0 ||
    number2 > 100 ||
    number3 < 0 ||
    number3 > 100
  ) {
    return `You have entered an invalid grade.`;
  } else {
    let average = (number1 + number2 + number3) / 3;
    if (average >= 0 && average <= 59) {
      return "F";
    } else if (average <= 69) {
      return "D";
    } else if (average <= 79) {
      return "C";
    } else if (average <= 89) {
      return "B";
    } else {
      return "A";
    }
  }
};

finalGrade(99, 92, 95);

const howOld = (age, year) => {
  let born = 2020 - age;
  if (year > 2020) {
    return `You will be ${year - born} in the year ${year}`;
  }
  if (year < born) {
    return `The year ${year} was ${born - year} years before you were born`;
  }
  if (year < 2020 && year > born) {
    return `You were ${year - born} in the year ${year}`;
  }
};

howOld(34, 1990);

// Whale Talk
let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join("").toUpperCase());

// Dog Factory
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(name) {
      return (this._name = name);
    },
    set breed(breed) {
      return (this._breed = breed);
    },
    set weight(weight) {
      return (this._weight = weight);
    },
    bark() {
      return `ruff! ruff!`;
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};

// Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
const subLength = (string, letter) => {
  let countChar = 0;
  let pos1;
  let pos2;
  let sublength;
  for (char of string) {
    if (letter === char) {
      countChar++;
      console.log(`found same character ${char}`);
      pos1 = string.indexOf(letter);
      pos2 = string.lastIndexOf(letter);
      console.log(pos1, pos2);
    }
  }
  if (countChar < 2 || countChar > 2) {
    return 0;
  }

  return `found exactly ${countChar} ${letter} occurrences and sublength is ${
    pos2 - pos1 + 1
  }`;
};

subLength("Saturdaaayqwy", "y");

// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
const groceries = (array) => {
  let string = array.map((item, index) => item.item);
  let string1;
  if (string.length > 1) {
    let lastItem = string.pop();
    console.log(lastItem);

    string1 = string.join(", ") + " and " + lastItem;
    console.log(string);
    console.log(string1);
  } else {
    string1 = string.join(", ");
    console.log(string1);
  }
  return string1;
};

groceries([
  { item: "Carrots" },
  { item: "Hummus" },
  { item: "Pesto" },
  { item: "Rigatoni" },
]);
