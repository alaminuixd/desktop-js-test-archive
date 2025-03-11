function rc(num) {
  //   debugger;
  if (num === 3) return num;
  return rc(num + 1);
}
console.log(rc(0));
