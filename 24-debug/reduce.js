function concate(arr) {
  return arr.reduce((accu, curr, index) => {
    return accu + " : " + curr;
  }, "");
}
const arr1 = ["Mango", "Banana"];

const value = concate(arr1);
console.log(value);

// Array.redeuce expriment without parent function
const arr2 = ["a", "b"];
const result = arr1.reduce((accu, curr) => {
  return accu + " : " + curr;
}, "");
console.log(result);
/* 
  reduce callback function add an anonymous function to the call stack and start iteration and accumulation following array length. 
  iterations:
  1. accu which is initially "" concatenates 2 items " : " and "curr" OR  " : a"  
  So, after return, accu is now "" + " : " + "a" OR " : a" 
  2. accu which is now " : a" concatenates " : " and "curr" OR " : b" 
  So, after return, accu is now " : a" + " : " + "b" OR " : a : b"
  The final accumulation result is " : a : b"
  the reduce function finally return " : a : b"
  */

const ar3 = ["a", "b"];

const result2 = ar.reduce((accu, curr) => {
  return accu ? ` ${accu} : ${curr}` : `${curr}`;
}, "");
result2;

const ar4 = ["a", "b"];
//! Here all iteration will accure based on 2 conditions
const result3 = ar3.reduce((accu, curr) => {
  if (accu) {
    //this is false in the fast iteration as "accu" is ""/empty/falsey here
    //"accu" will not get this in the first iteration
    return accu + " : " + curr;
  } else {
    //"accu" will get this first time
    return curr;
  }
}, "");
result3; // result: a : b
