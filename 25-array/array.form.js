const myList = document.querySelectorAll("ul.myList > li");
console.log(myList);
const listArray = Array.from(myList);
console.log(listArray);

// test
// My
const arr = [33, 93, 37, 73, 42, 8, 24];
function getLargest(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > max && (max = arr[i]);
  }
  return max;
}

console.log(getLargest(...arr));

// GPT
function getLargest2(...arr) {
  // Use spread here to accept individual arguments
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    arr[i] > max && (max = arr[i]); // Use shorthand inside the loop
  }
  return max;
}

console.log(getLargest2(...arr)); // 93
/* 
const arr = [20, 45, 76, 34]
According to your statement, if this "getLargest(...arr)" is === "getLargest(20, 45, 76, 34)" then the arguments are not an array anymore just array items. If it's not an array how came we use "arr.length", "arr[i]" and so on in the for loop?


*/