const arr = [33, 93, 37];
function getLargest(arr, largest = -Infinity, index = 0) {
  if (index === arr.length) return largest;
  console.log(index);
  if (arr[index] > largest) {
    largest = arr[index];
  }
  return getLargest(arr, largest, index + 1);
}
console.log(getLargest(arr));
