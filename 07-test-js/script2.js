function recur(n = 0) {
  if (n >= 5) return;
  console.log(n);
  recur((n += 1));
}
recur(0);
