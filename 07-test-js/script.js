const arr2 = [1, 2, 3, 4, 5, [6, 7, [9], 10]];

function mergeArray(arr, index = 0, combArr = []) {
  if (index >= arr.length) return combArr;
  if (Array.isArray(arr[index])) {
    // What and how this function return will happend? Can you explain in short?
    return mergeArray(arr[index], 0, combArr);
  } else {
    combArr.push(arr[index]);
  }
  return mergeArray(arr, index + 1, combArr);
}
debugger;
const a1 = mergeArray(arr2);
/* 
1) "index.length" check false 
2)  "Array.isArray" check false
3) push [1, 2, 3, 4, 5]
4) On 6th loop found "Array.isArray" is true
So, 
return mergeArray(arr[index], 0, combArr) || ([6, 7, [9], 10], 0, [1, 2, 3, 4, 5]);
*/
