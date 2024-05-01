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
