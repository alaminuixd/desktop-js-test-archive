/* function fltArr(arr, index = 0, merged = []) {
  if (index >= arr.length) return merged;
  merged.push(arr[index]);
  return fltArr(arr, index + 1, merged);
}

const arr1 = [1, 4, 5, 3];
debugger;
fltArr(arr1); */

function arrFilterByChar(arr) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log("i: " + item);
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j]);
      if (item === arr[j]) {
        console.log("found");
        found = true;
        break;
      }
    }
    if (!found) {
      filtered.push(arr[i]);
      console.log(filtered);
    }
  }
  return filtered;
}

const nums = [1, 3, 1];
debugger;
arrFilterByChar(nums);
