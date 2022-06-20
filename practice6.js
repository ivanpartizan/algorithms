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
