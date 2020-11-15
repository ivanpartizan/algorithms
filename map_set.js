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

//
let styles = [
  "Jazz",
  "Jazz",
  "Jazz",
  "Jazz",
  "Jazz",
  "Jazz",
  "Blues",
  "Blues",
  "Blues",
  "Blues",
  "Blues",
  "Blues",
];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
console.log(styles.length);
styles[Math.floor(styles.length / 2)] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);
