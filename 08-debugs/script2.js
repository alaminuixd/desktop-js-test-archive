// recursive function
/* function one(num = 0) {
  if (num >= 5) return;
  let text = "Loop time: " + num;
  console.log(text);
  num++;
  one(num);
}
one(0);
 */
/* function one(num = 0, depth = 6) {
  if (num >= 5) return;
  let text = "one" + depth + " - Loop time: " + num;
  console.log(text);
  num++;
  one(num, depth - 1);
}
one(0, 6);

var x = 100;
var y = 50;
function getSum(n1, n2) {
  var sum = (n1 = n2);
  return sum;
}

var sum1 = getSum(x, y);
var sum2 = getSum(20, 10);

const salaryArr = [50, 40, 60, 20, 400, 300, 200];
const groceSallary = (amount) => {
  return amount * 0.7;
};
const rangeSalary = (amount) => {
  return amount >= 20;
};

let mySalary = salaryArr.map(groceSallary).filter(rangeSalary);
console.log(mySalary);

 */
const arr1 = [];
const arr2 = [];
const arr3 = [];
for (let i = 0; i < 5; i++) {
  arr1.push(i);
  console.log(i);
  for (let j = i; (j = i.length); j++) {
    arr2.push(j);
    console.log(j);
    for (let k = j; (k = j.length); k++) {
      arr3.push(k);
      console.log(k);
    }
  }
}
/* console.log(arr1);
console.log(arr2);
console.log(arr3); */
/* 
  i = 0
    j = 0
      k = 0
  i = 1
    j = 0
      k = 0
      k = 1
    j = 1
      k = 0
      k = 1
  i = 2
    j = 0
      k = 0
      k = 1
      k = 2
    j = 1
      k = 0
      k = 1
      k = 2
    j = 2
      k = 0
      k = 1
      k = 2    
*/
