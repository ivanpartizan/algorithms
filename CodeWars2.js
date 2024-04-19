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
