"use strict";
const obj = {
  amount: 20,
  func: () => {
    console.log(this);
  },
};

obj.func();
