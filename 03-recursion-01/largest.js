// get largest number in an array
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

const getLearge2 = (arr, lergest = -Infinity, index = 0) => {
  if (index === arr.length) return lergest;
};
/* 
Call Stack Build-Up (1st Pass is callstack bottommost one: Bottom to Top)
1. call(1): getLargest([33, 93, 37], largest = -Infinity, index = 0)
  * index = 0, arr[0] = 33.
  * 33 > -Infinity is true, so largest = 33.
  * Calls(2) getLargest([33, 93, 37], 33, 1).

2. call(2): getLargest([33, 93, 37], largest = 33, index = 1)
  * index = 1, arr[1] = 93.
  * 93 > 33 is true, so largest = 93.
  * Calls(3) getLargest([33, 93, 37], 93, 2).

3. call(3): getLargest([33, 93, 37], largest = 93, index = 2)
  * index = 2, arr[2] = 37.
  * 37 > 93 is false, so largest remains 93.
  * Calls(4) getLargest([33, 93, 37], 93, 3).

4. call(4): getLargest([33, 93, 37], largest = 93, index = 3)
  * index = 3, which is equal to arr.length (base case).
  * Returns largest = 93.
*/

/* 
Call Stack:
call(4) getLargest([33, 93, 37], largest = 93, index = 3) → Base case, returns 93
call(3) getLargest([33, 93, 37], largest = 93, index = 2)
call(2) getLargest([33, 93, 37], largest = 33, index = 1)
call(1) getLargest([33, 93, 37], largest = -Infinity, index = 0)
--------------Call Stack------------------

Unwinding the Call Stack (2nd Pass: Top to Bottom)
1. call(4): Returns 93 to call(3).
2. call(3): Returns 93 to call(2).
3. call(2): Returns 93 to call(1).
4. call(1): Returns 93 as the final result.
*/
