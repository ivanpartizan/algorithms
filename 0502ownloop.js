function loop(start, testFunction, updateFunction, bodyFunction) {
  for (let value = start; testFunction(value); value = updateFunction(value)) {
    bodyFunction(value);
  }
}
