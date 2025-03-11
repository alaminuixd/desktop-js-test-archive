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
//debugger;
const a1 = mergeArray(arr2);
console.log(a1);
/* 
    arr2.length === 6
    (arr=[1, 2...], index=0, combArr = []);
    1st if): (false)
        index is 0 which is less than 6
    2nd if): (false)
        arr[0] is not an array so, go to 
    "else": 
        combArr.push(1) || comArr = [1]
    
*/
