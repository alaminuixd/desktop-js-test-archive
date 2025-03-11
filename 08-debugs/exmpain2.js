const array1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
];
const array2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Bob" },
];

let merged = [...array1];

for (let i = 0; i < array2.length; i++) {
  console.log(`Array1: ${merged[i].id}`);
  console.log(`Array2: ${array2[i].id}`);
}

/* 
    Array1 -> item-(1).id = 1
    Array2 -> item-(1).id = 2
    Array1 -> item-(2).id = 2
    Array2 -> item-(2).id = 3
*/

for (let i = 0; i < array2.length; i++) {
  for (let j = 0; j < merged.length; j++) {
    console.log(`Array1: ${merged[j].id} ${merged[j].name}`);
    console.log(`Array2: ${array2[i].id} ${array2[i].name}`);
  }
}

/* 
  Array1 -> item-(1).id = 1
*/
