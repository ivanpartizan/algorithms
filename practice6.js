// Least Larger
function leastLarger(a, i) {
  // let elementAtGivenIndex = a.at(i);
  let elementAtGivenIndex = a[i];

  let b = a.slice();
  b.splice(i, 1);
  let sorted = b.sort((x, y) => x - y);
  let leastLarger = sorted.find((element) => element > elementAtGivenIndex);
  return leastLarger === undefined ? -1 : a.indexOf(leastLarger);
}

leastLarger([4, 1, 3, 5, 6], 0);

// SevenAte9
function sevenAte9(str) {
  str = Array.from(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 7 && str[i + 1] == 9 && str[i + 2] == 7) {
      str.splice(i + 1, 1);
    }
  }
  return str.join("");
}

sevenAte9("79712312");

// Speed Control
function gps(s, x) {
  if (x <= 1) return 0;
  let distances = [];
  for (let i = 0; i < x.length; i++) {
    if (isFinite(x[i + 1] - x[i])) distances.push(x[i + 1] - x[i]);
  }

  const speeds = distances.map((distance) => (3600 * distance) / s);
  return Math.floor(Math.max(...speeds));
}

gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]);

// Predict your age!
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let list = [age1, age2, age3, age4, age5, age6, age7, age8];
  let x = list
    .map((number) => number * number)
    .reduce((acc, number) => acc + number);
  return Math.floor(Math.sqrt(x) / 2);
}

predictAge(65, 60, 75, 55, 60, 63, 64, 45);

// New £5 notes collectors!
function getNewNotes(salary, bills) {
  let billsTotal = bills.reduce((acc, value) => acc + value, 0);
  let notes = Math.floor((salary - billsTotal) / 5);
  return salary - billsTotal < 5 ? 0 : notes;
}

getNewNotes(2000, [500, 160, 400]);

// Heron's formula
function heron(a, b, c) {
  let s = (a + b + c) / 2;

  return +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

heron(3, 4, 5);

// “All vanity plates must start with at least two letters.”
// “… vanity plates may contain a maximum of 6 characters (letters or numbers) and a minimum of 2 characters.”
// “Numbers cannot be used in the middle of a plate; they must come at the end. For example, AAA222 would be an acceptable … vanity plate; AAA22A would not be acceptable. The first number used cannot be a ‘0’.”
// “No periods, spaces, or punctuation marks are allowed.”
// In plates.py, implement a program that prompts the user for a vanity plate and then output Valid if meets all of the requirements or Invalid if it does not.

function validPlates(plate) {
  // “… vanity plates may contain a maximum of 6 characters (letters or numbers) and a minimum of 2 characters.”
  if (plate.length < 2 || plate.length > 6) {
    return "Not Valid";
  }

  let numbersPart = "";

  for (let i = 0; i < plate.length; i++) {
    // “No periods, spaces, or punctuation marks are allowed.”
    if (
      plate.codePointAt(i) < 48 ||
      (plate.codePointAt(i) > 57 && plate.codePointAt(i) < 65) ||
      plate.codePointAt(i) > 90
    ) {
      return "Not Valid";
    }
    // “All vanity plates must start with at least two letters.”
    if (isFinite(plate[0]) || isFinite(plate[1])) {
      console.log(plate[i]);
      return "Not Valid";
    }
    if (isFinite(plate[i])) {
      numbersPart += plate[i];
    }
  }

  console.log(numbersPart);
  // The first number used cannot be a ‘0’.”
  if (numbersPart[0] === "0") {
    return "Not Valid";
  }
  // Numbers cannot be used in the middle of a plate; they must come at the end.
  if (!plate.endsWith(numbersPart[numbersPart.length - 1])) {
    console.log(numbersPart[numbersPart.length - 1]);
    return "Valid";
  }

  if (numbersPart === "") return "Valid";
  return "Valid";
}

validPlates("AAA222");
