/* function PersonConstructor(name, nextInLine = null) {
  this._name = name;
  this._nextInLine = nextInLine;
}

function getMyPos(person) {
  // Returns 1 if there's no one next in line
  if (person._nextInLine === null) {
    return 1;
  }
  return 1 + getMyPos(person._nextInLine); // this "getMyPos()"
}

const p3 = new PersonConstructor("Al Amin");
const p2 = new PersonConstructor("Arshiya Amin", p3);
const p1 = new PersonConstructor("Abrar Syed", p2);

// print "._nextInLine" values whether it's "null" or not
console.log(p3._nextInLine === null); // result: true
console.log(p2._nextInLine === null); // result: false
console.log(p1._nextInLine === null); // result: false

console.log(getMyPos(p3)); // 1
console.log(getMyPos(p2)); // 2
console.log(getMyPos(p1)); // 3

const person3Position = `${p3._name}'s position is ${getMyPos(p3)}`;
const person2Position = `${p2._name}'s position is ${getMyPos(p2)}`;
const person1Position = `${p1._name}'s position is ${getMyPos(p1)}`;

console.log(person3Position);
console.log(person2Position);
console.log(person1Position);
 */
let a = "";
console.log(a == true);
let b = "one";
console.log(b == true);
