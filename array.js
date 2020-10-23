let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

styles[(styles.length - 1) / 2] = "Classics";

console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

function sumInput() {
  let array = [];
  let sum = 10;
  let number;

  do {
    number = prompt("Enter a number to add");
    array.push(number);
  } while (number !== "" || number !== null);

  for (item of array) {
    sum += +item;
  }
  console.log(array);
  return sum;
}

sumInput();

// 1
function camelize(str) {
  let newstr = str.split("-");
  console.log(newstr);
  let newarray = [];

  let cap;
  for (let word of newstr) {
    if (newstr.indexOf(word) !== 0) {
      cap = word[0].toUpperCase() + word.slice(1);
    } else {
      cap = word;
    }
    console.log(cap);
    newarray.push(cap);
  }
  console.log(newarray);
  console.log(cap);
  let newstr1 = newarray.join("");
  return newstr1;
}

camelize("my-name-is-ivan-milenkovic");
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
