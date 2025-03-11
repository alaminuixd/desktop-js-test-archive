function one() {
  console.log("one");
}
function two() {
  console.log("two");
  one();
}
function three() {
  console.log("three");
  two();
}

three();

const myAsync = setTimeout(() => {
  console.log("I am asynchronous.");
}, 0);

/* 
one()
two();
three();
myAsync
*/
