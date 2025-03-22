const arr = [
  [1, 2],
  [3, 4],
];

function mergeArray(array, merged = [], index = 0) {
  if (index === array.length) return merged;
  if (Array.isArray(array[index])) {
    mergeArray(array[index], merged);
  } else {
    merged.push(array[index]);
  }
  return mergeArray(array, merged, index + 1);
}

console.log(mergeArray(arr));
