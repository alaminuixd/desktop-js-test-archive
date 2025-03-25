const conbineArray = (names) => {
  const resultArray = [];
  return (age) => {
    const result = names.forEach((name, i) => {
      resultArray.push({ name: name, age: age[i] });
    });
    return resultArray;
  };
};

const names = ["Al Amin", "Ruhul Amin", "Sultana", "Sabrin"];
const age = [38, 34, 43, 24];

const people = conbineArray(names);
const result = people(age);
console.log(result);
