import helloWorld from "./modules/module1.js";
import defFunc from "./modules/module2.js";
import {
  oneFunc as f1,
  twoFunc as f2,
  threeFunc as f3,
} from "./modules/module2.js";
import * as modThree from "./modules/module3.js";

console.log(helloWorld);
console.log(defFunc());
console.log("********************************************");
console.log(f1());
console.log(f2());
console.log(f3());
console.log("********************************************");
console.log(modThree.Func1());
console.log(modThree.Func2());
console.log(modThree.Func3());
console.log(modThree.default());
console.log("********************************************");
// module2.js
const mod2Obj = { f1: f1, f2: f2, f3: f3 };
for (let key in mod2Obj) {
  if (typeof mod2Obj[key] === "function") {
    console.log(mod2Obj[key]() + "\n");
  }
}
console.log("********************************************");
// module3.js
for (let key in modThree) {
  // we are using [key] bracket notation instead of "dot" notation  as we don't know the property names
  if (typeof modThree[key] === "function") {
    console.log(key);
    console.log(modThree[key]() + "\n");
  }
}
