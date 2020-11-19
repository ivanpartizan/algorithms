// Store "unread" flags
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let weakSet = new WeakSet();

for (let message of messages) {
  weakSet.add(message);
}

console.log(weakSet.has(messages[0]));
console.log(weakSet.has(messages[1]));
console.log(weakSet.has(messages[2]));
console.log(weakSet.has(messages[3]));

console.log(weakSet);

// Store read dates
let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let weakMap = new WeakMap();

for (let message of messages) {
  weakMap.set(message, new Date());
}

console.log(weakMap);
