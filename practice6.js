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

// Speed Control
function gps(s, x) {
  if (x <= 1) return 0;
  let distances = [];
  for (let i = 0; i < x.length; i++) {
    if (isFinite(x[i + 1] - x[i])) distances.push(x[i + 1] - x[i]);
  }

  const speeds = distances.map((distance) => (3600 * distance) / s);
  return Math.floor(Math.max(...speeds));
}

gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]);
