function filterNamesByCondition(arr) {
  const filtered = [];
  // "filterCondition" is a callback
  return (filterCondition, item) => {
    for (let i = 0; i < arr.length; i++) {
      let found = false;
      // convert each item into an Array with lowercase characters
      const arrString = arr[i].toLowerCase().split("");
      for (let j = 0; j < arrString.length; j++) {
        if (filterCondition(arrString, item.toLowerCase())) {
          found = true;
          break;
        }
      }
      if (!found) {
        filtered.push(arr[i]);
      }
    }
    return filtered;
  };
}

const names2 = ["sina", "Sam", "Qoli", "Ben", "Zod", "Quantin", "Ala"];

const filterByFirstChar = filterNamesByCondition(names2);

console.log(
  filterByFirstChar((arSt, item) => {
    return arSt[0] === item;
  }, "q")
);
