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
