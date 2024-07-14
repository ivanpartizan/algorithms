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
