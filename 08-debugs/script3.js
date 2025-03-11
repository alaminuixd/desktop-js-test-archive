/* 
To be able to push an array item into "merged" array 

During the "outer" loop's first iteration:
    In the "inner" loop's first iteration, merged[0].id will compare with both arrObj2[0].id and arrObj2[1].id.
    In the second iteration of the "outer" loop, there won't be any "inner" loop iterations because we've already compared all elements of arrObj2 with merged.

"Outer" loop 1st iteration:
    "Inner" loop 1st iteration: merged[0].id compared with arrObj2[0].id and arrObj2[1].id.
    "Outer" loop 2nd iteration: No "inner" loop iterations.

*/

/* const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Bob" },
]; */

const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 4, name: "Daniel" },
  { id: 6, name: "Shiffman" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 6, name: "Bob" },
  { id: 5, name: "Pikaso" },
  { id: 3, name: "Julian" },
];

function mergeArrayOfObjects(arrObj1, arrObj2) {
  let merged = [...arrObj1]; // make a new array from "arrObj1"
  for (let i = 0; i < arrObj2.length; i++) {
    // run 2 times
    let found = false;

    for (let j = 0; j < merged.length; j++) {
      if (merged[j].id === arrObj2[i].id) {
        found = true;
        break;
      }
    }

    if (!found) {
      merged.push(arrObj2[i]);
    }
  }

  return merged;
}

const one = mergeArrayOfObjects(array1, array2);
console.log(one);
/*
-outer loop (i) 1st iteration [0] 2nd iteration [1] times as "arrObj2.length" is 2
  -inner loop (j) 1st iteration: [0, 1] 2nd iteration: [0, 1] times 
  * How? outer loop "arrObj2.length" is "2" & inner loop "merged.length" is "2" | SO, 2 * 2 = 4
marged[j].id = 1st iteration: [0, 1] 2nd iteration: [0, 1]

if (merged[j].id === arrObj2[i].id)
j = 1st iteration: [0, 1] 2nd iteration: [0, 1] times 
i = 1st iteration [0] 2nd iteration [1] times

const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Bob" },
];

inner loop iteration 1: {
  merged[0].id === arrObj2[0]  | { id: 1, name: "John" } === { id: 2, age: 30 } = false
  merged[1].id === arrObj2[0]  | { id: 2, name: "Alice" } === { id: 2, age: 30 }, = true
}
inner loop iteration 1: {
  merged[0].id === arrObj2[1]  | { id: 1, name: "John" } === { id: 3, name: "Bob" } = false
  merged[1].id === arrObj2[1]  | { id: 2, name: "Alice" } === { id: 3, name: "Bob" }, = false
}

*/
