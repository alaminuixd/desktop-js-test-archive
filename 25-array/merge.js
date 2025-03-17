const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

function merge(arr) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`Inner Loop (${i}): ${arr[i][j]}`);
      resArr.push(arr[i][j]);
    }
  }
  return resArr;
}
merge(arr);

/* 
explanation:
resArr = []
parent loop starts with i = 0
i < arr.length wich is 1 OR "0 , 1"
As i starts from 0, it will stop iteration when reach 1
So, parent loop will iterate 0, 1 OR 2 times
Parent iteration 1: (j is 0, 2 times [0, 1])
    child loop starts with j = 0 OR first child array [1, 2, 3, 4]
    j < arr[i].length which is 0, 1, 2, 3
    How? arr[i] is the first child array and it has 4 items
    As j starts from 0, it will stop iteration when reach 3
    child iteration 1: (4 times)
        4 iterations- resArr: [1], resArr: [1, 2], resArr: [1, 2, 3], resArr: [1, 2, 3, 4], 
resArr is now [1, 2, 3, 4]
Parent iteration 2: (j is 1, 2 times [0, 1])
    child loop starts with j = 1 OR second child array [5, 6, 7, 8]
    j < arr[i].length which is 0, 1, 2, 3
    How? arr[i] is the second child array and it has 4 items
    As j starts from 0, it will stop iteration when reach 3
    child iteration 2: (4 times)
        resArr was [1, 2, 3, 4]
        4 iterations- 
            resArr: [1, 2, 3, 4, 5], 
            resArr: [1, 2, 3, 4, 5, 6], 
            resArr: [1, 2, 3, 4, 5, 6, 7], 
            resArr: [1, 2, 3, 4, 5, 6, 7, 8], 
resArr is now [1, 2, 3, 4, 5, 7, 8]

There are no more elements so return the resArr
result: [1, 2, 3, 4, 5, 7, 8]

*/
