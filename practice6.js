// Least Larger
function leastLarger(a, i) {
  // let elementAtGivenIndex = a.at(i);
  let elementAtGivenIndex = a[i];

  let b = a.slice();
  b.splice(i, 1);
  let sorted = b.sort((x, y) => x - y);
  let leastLarger = sorted.find((element) => element > elementAtGivenIndex);
  return leastLarger === undefined ? -1 : a.indexOf(leastLarger);
}

leastLarger([4, 1, 3, 5, 6], 0);

// SevenAte9
function sevenAte9(str) {
  str = Array.from(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 7 && str[i + 1] == 9 && str[i + 2] == 7) {
      str.splice(i + 1, 1);
    }
  }
  return str.join("");
}

sevenAte9("79712312");
