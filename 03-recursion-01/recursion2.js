const arr = Array(5);
function fillArray(array, items, index = 0) {
  // As index will never exceed array.length, "index === array.length" is cleaner and more precise!
  if (index === array.length) return array;
  array[index] = items[index];
  return fillArray(array, items, index + 1);
}
const fruits = ["mango", "banana", "apple", "grapes", "melon"];
fillArray(arr, fruits);
console.log(arr);
