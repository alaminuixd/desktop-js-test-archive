/* function two() {
  let num = 0;
  function inner() {
    if (num >= 10) return num;
    num++;
    console.log(`num is now: ${num}`);
    return inner();
  }
  return inner();
}

two();
 */

function recursion(count = 0) {
  if (count < 3) {
    console.log(count);
    return recursion((count += 1));
  }
}
recursion();
