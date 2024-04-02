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

// Is it a letter? 7kyu
function isItLetter(character) {
  let code = character.codePointAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
    ? true
    : false;
}

isItLetter("a");
