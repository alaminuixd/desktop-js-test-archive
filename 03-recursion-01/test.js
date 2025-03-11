function flatenArr(arr, index = 0, val = 0) {
  if (index >= arr.length) return val;
  val += arr[index];
  return flatenArr(arr, index + 1, val);
}

debugger;
const res1 = flatenArr([1, 2, 3]);
console.log(res1);
