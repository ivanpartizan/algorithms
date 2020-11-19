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

// Filter anagrams
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let words = word.toLowerCase().split("").sort().join("");
    // console.log(words)

    map.set(words, word);
  }
  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(arr);

// Iterable keys
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
console.log(keys);
