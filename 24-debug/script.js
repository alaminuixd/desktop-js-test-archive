function findBinary(decimal, result = "") {
  if (decimal === 0) return result;
  result = (decimal % 2) + result; // Fix this line
  return findBinary(Math.floor(decimal / 2), result); // Fix this line
}

console.log(findBinary(233)); // Output: "11101001"

/* 
let division = null;
let result = "";
result = 233 % 2 + result;
division = Math.floor(233 / 2);
result = division % 2 + result;
division = Math.floor(division / 2);
result = division % 2 + result;
division = Math.floor(division /2);
result = division % 2 + result;
*/
