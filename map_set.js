let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let set = new Set();

  for (let value of values) {
    set.add(value);
  }

  console.log(set);
}

unique(values);

/////
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

ucFirst("baby girl boy woman man");

function checkSpam(str) {
  if (
    str.toLowerCase().includes("viagra") ||
    str.toLowerCase().includes("xxx")
  ) {
    return true;
  }
  return false;
}
checkSpam("i am a fine boy");
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str[maxlength - 1] === "…";
  }
  console.log(str);
}
truncate("What I'd like to tell on this topic is:", 20);

truncate("Hi everyone!", 20);
