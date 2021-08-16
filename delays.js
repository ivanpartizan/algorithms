function printNumbers(from, to) {
  for (let i = from; i <= to; i++) {
    setInterval(printNumbers(1, 5), 1000);
  }
}
setInterval(printNumbers, 1000);
