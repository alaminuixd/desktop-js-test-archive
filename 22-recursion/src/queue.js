class Person {
  constructor(name, nextInLine = null) {
    this.name = name;
    this.nextInLine = nextInLine;
  }
  getMyPositionInLine() {
    if (this.nextInLine === null) {
      return 1;
    }
    return 1 + this.nextInLine.getMyPositionInLine();
  }
}

const person3 = new Person("Al Amin");
const person2 = new Person("Ruhul Amin", person3);
const person1 = new Person("Syeda Sultana", person2);

console.log(person1.getMyPositionInLine());

/* 
A simpler version
*/
function getMyPos(pos = null) {
  if (pos == null) {
    return 1;
  }
  return pos + getMyPos();
}

let p3 = getMyPos();
console.log(`Person3 position is ${p3}`);
let p2 = getMyPos(p3);
console.log(`person2 position is ${p2}`);
let p1 = getMyPos(p2);
console.log(`person1 position is ${p1}`);

/* 
    * getMyPos function explanation
    if "pos" is null then return 1
    1. p3 = "getMyPos()" with no argument. It returns 1 as "pos" is null. So, p3 === 1;
    2. p2 = "getMyPos(p3)" with argument "p3/ 1". It returns 1 + 1 as "pos + getMyPos()". So, p2 === 2;
    3. p1 = "getMyPos(p2)" with argument "p2/ 2". It returns 2 + 1 as "pos + getMyPos()". So, p1 === 3;
*/

/* 
    !important: Prove that nextInLine is an instance of Person
*/
class Person {
  constructor(nextInLine = null) {
    this._nextInLine = nextInLine;
  }
  print() {
    console.log(this._nextInLine instanceof Person);
  }
}

const pe3 = new Person(); // Last person in line
const pe2 = new Person(p3); // p2's nextInLine is p3 (a Person object).
// Here "p3", in "new Person(p3)", is a repacement of "nextInLine" Person constructor paramenter
const pe1 = new Person(p2); // p1's nextInLine is p2 (a Person object)
// Here "p2", in "new Person(p2)", is a repacement of "nextInLine" Person constructor paramenter
pe1.print(); // true, because p2 is a Person object
