// List Filtering
function filter_list(l) {
  return l.filter((item) => typeof item == "number");
}

filter_list([1, 2, "aasf", "1", "123", 123]);

// Filter Long Words
function filterLongWords(sentence, n) {
  return sentence.split(" ").filter((word) => word.length > n);
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4);

// Filter unused digits
function unusedDigits(...array) {
  let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arrayOfChars = [];
  let strings = array.map((number) => String(number));

  for (let string of strings) {
    let chars = [...string];
    arrayOfChars.push(...chars);
  }
  let set = new Set(arrayOfChars);
  let sortedSet = [...set].sort();

  let unusedDigits = "";
  for (let value of digits) {
    if (!sortedSet.includes(String(value))) {
      unusedDigits += value;
    }
  }
  return unusedDigits;
}

unusedDigits(2015, 8, 26);

// Largest 5 digit number in a series
function solution(digits) {
  let largestNumber = 0;
  for (let i = 0; i < digits.length; i++) {
    let currentNumber = digits.slice(i, i + 5);
    if (+currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }
  return +largestNumber;
}

solution("1234567898765");

// Tetration
function tetration(x, y) {
  if (y == 0) return 1;
  let result = x;
  for (let i = 1; i < y; i++) {
    result = x ** result;
  }
  return result;
}

tetration(5, 2);

// Responsible Drinking
function hydrate(s) {
  let regex = /\d/g;
  let test = s.match(regex);

  let sum = test.map((value) => +value).reduce((acc, value) => acc + value);

  return sum == 1 ? `1 glass of water` : `${sum} glasses of water`;
}

hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer");

// FIRE and FURY
var fireAndFury = function (tweet) {
  let availableLetters = /[EFIRUY]/;
  if (!tweet.split("").every((letter) => availableLetters.test(letter)))
    return `Fake tweet.`;

  let regex = /FURY|FIRE/g;
  let test = tweet.match(regex) || 0;

  let furyCount = 0;
  let fireCount = 0;
  let messages = [];

  for (let i = 0; i < test.length; i++) {
    if (test[i] == "FURY") {
      furyCount++;
      fireCount = 0;
      if (test[i + 1] !== "FURY") {
        messages.push(`I am ${`really `.repeat(furyCount - 1)}furious.`);
      }
    }
    if (test[i] == "FIRE") {
      fireCount++;
      furyCount = 0;
      if (test[i + 1] !== "FIRE") {
        messages.push(
          `You ${
            fireCount == 1 ? `` : `and you `.repeat(fireCount - 1)
          }are fired!`
        );
      }
    }
  }

  if (messages.length == 0) return `Fake tweet.`;
  return messages.join(" ");
};

fireAndFury("FIREYYFURYYFURYYFURRYFIRE");
