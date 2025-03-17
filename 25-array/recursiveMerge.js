const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
// recursive function
function merge(arr, merged = [], index = 0) {
  if (index >= arr.length) return merged;
  if (Array.isArray(arr[index])) {
    merge(arr[index], merged);
  } else {
    merged.push(arr[index]);
  }
  return merge(arr, merged, index + 1);
}

merge(arr);
