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
