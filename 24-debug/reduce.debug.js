function compress(array, accu = "", index = 0) {
  if (index >= array.length - 1) return accu;
  accu += array[index];
  return compress(array, accu, index + 1);
}
compress([1, 2, 3, 4, 5]);

function compress2(array, accu = "", index = 0) {
  if (index >= array.length) return accu;
  accu = accu.length > 0 ? accu + " : " + array[index] : String(array[index]);
  return compress2(array, accu, index + 1);
}

console.log(compress2([1, 2, 3, 4, 5]));
