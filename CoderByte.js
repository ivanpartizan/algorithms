// Longest Word - easy
function LongestWord(sen) {
  let regex = /^[A-Za-z0-9]+$/;
  let words = sen.split(" ");
  let allowedWords = [];

  for (let word of words) {
    if (regex.test(word)) {
      allowedWords.push(word);
    }
  }

  let longestWord = "";
  let longestWordValue = 0;

  for (let word of allowedWords) {
    if (word.length > longestWordValue) {
      longestWordValue = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}

LongestWord("fun&!! time");

// Find Intersection - easy
function FindIntersection(strArr) {
  let firstArray = strArr[0].split(", ");
  let secondArray = strArr[1].split(", ");

  let longerArray =
    firstArray.length > secondArray.length ? firstArray : secondArray;
  let shorterArray =
    firstArray.length > secondArray.length ? secondArray : firstArray;

  let intersection = longerArray.filter((item) => shorterArray.includes(item));

  return intersection.length === 0 ? false : intersection.join(",");
}

FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]);
