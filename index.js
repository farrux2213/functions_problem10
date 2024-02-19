function tubSonTopish(son) {
  if (son <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(son); i++) {
    if (son % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(tubSonTopish(7)); // true
console.log(tubSonTopish(14)); // false

console.log("Array");
console.log("Array");
