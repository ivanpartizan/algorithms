// Remove duplicate words
function removeDuplicateWords(s) {
  let array = s.split(" ");
  let newArray = [];

  for (let word of array) {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  }

  return newArray.join(" ");
}

removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);

// Counting Duplicates
function duplicateCount(text) {
  let duplicatesCount = 0;
  let lettersArray = text.toLowerCase().split("");

  let object = lettersArray.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});

  for (key in object) {
    if (object[key] > 1) {
      duplicatesCount++;
    }
  }

  return duplicatesCount;
}

duplicateCount("aabBcde");

let mapNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
let map2 = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

let str = "seven thousand";
str
  .split(" ")
  .join(",")
  .split("-")
  .join(",")
  .split(",")
  .reduce((acc, value) => {
    if (value in mapNumbers) {
      acc += mapNumbers[value];
    }
    if (value in map2) {
      acc += map2[value] * (acc % map2[value]) - (acc % map2[value]);
    }
    console.log(mapNumbers[value]);
    return acc;
  }, 0);

// Remove duplicate words
function removeDuplicateWords(s) {
  let array = s.split(" ");
  let newArray = [];

  for (let word of array) {
    if (!newArray.includes(word)) {
      newArray.push(word);
    }
  }

  return newArray.join(" ");
}

removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);

// Counting Duplicates
function duplicateCount(text) {
  let duplicatesCount = 0;
  let lettersArray = text.toLowerCase().split("");

  let object = lettersArray.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});

  for (key in object) {
    if (object[key] > 1) {
      duplicatesCount++;
    }
  }

  return duplicatesCount;
}

duplicateCount("aabBcde");

let mapNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
let map2 = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

let str = "seven thousand";
str
  .split(" ")
  .join(",")
  .split("-")
  .join(",")
  .split(",")
  .reduce((acc, value) => {
    if (value in mapNumbers) {
      acc += mapNumbers[value];
    }
    if (value in map2) {
      acc += map2[value] * (acc % map2[value]) - (acc % map2[value]);
    }
    console.log(mapNumbers[value]);
    return acc;
  }, 0);
