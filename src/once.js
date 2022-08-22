export function once(fn, gn) {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      void fn(...args);
    }
    typeof gn === 'function' && void gn(...args);
  };
}
