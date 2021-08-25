// Output every second
function printNumbers(from, to) {
  let start = from;

  let timer = setInterval(function () {
    alert(start);
    if (start == to) {
      clearInterval(timer);
    }
    start++;
  }, 1000);
}

printNumbers(1, 10);

function printNumbers(from, to) {
  let start = from;

  setTimeout(function timer() {
    alert(start);
    if (start < to) {
      setTimeout(timer, 1000);
    }
    start++;
  }, 1000);
}

printNumbers(1, 5);

let i = 0;

setTimeout(() => alert(i), 100); // ?

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
