let count = 0;
function countChar(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return count;
}

console.log(countChar("Ivan Milenkovic", "I"));
