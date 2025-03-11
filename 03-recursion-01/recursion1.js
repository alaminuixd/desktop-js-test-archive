const flatenArr = (arr, index = 0, flaten = []) => {
  if (index >= arr.length) return flaten;
  if (Array.isArray(arr[index])) {
    flatenArr(arr[index], 0, flaten);
  } else {
    flaten.push(arr[index]);
  }
  return flatenArr(arr, index + 1, flaten);
};

debugger;
const res1 = flatenArr([1, 2, [3, 4, [5], 6], 7]);
console.log(res1);
