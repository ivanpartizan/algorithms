// Filter unique array members
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
  let set = new Set(arr);
  return Array.from(set);
}

unique(values);

// Another option
function unique(arr) {
  let set = new Set();

  for (let value of arr) {
    set.add(value);
  }

  return Array.from(set);
}

// Filter anagrams
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let words = word.toLowerCase().split("").sort().join("");
    map.set(words, word);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(arr);

// NEW
function aclean(arr) {
  let sorted = arr.map((word) => word.toLowerCase().split("").sort().join(""));
  return Array.from(new Set(sorted));
}

// Iterable keys
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);
