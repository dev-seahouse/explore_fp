export function xManyTimes(fn, x) {
  return (...args) => {
    if (x > 0) {
      fn(...args);
      x--;
    }
  };
}
