function getBinary(decimal, result = "") {
  if (decimal <= 0) {
    return result;
  }
  result = (decimal % 2) + result;
  getBinary(Math.floor(decimal / 2), result);
}

console.log(getBinary(11));
