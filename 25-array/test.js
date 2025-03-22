function recur(n = 0) {
  if (n >= 3) return n;
  return 2 + recur(n + 1);
}
console.log(recur());
/* 
!The value passing in recursion happens twice:
1) First Pass (Bottom to Top): Values are passed forward as the stack builds.
2) Second Pass (Top to Bottom): Values are passed backward as the stack unwinds.

Call Stack:
recur(3) → waits for nothing (as condition meets) "returns 3"
recur(2) → waits for recur(3)
recur(1) → waits for recur(2)
recur(0) → waits for recur(1)
--------------call stack (bottom to top) [1st pass]----------

-------------unwind from call stack (Top to Bottom) [2nd pass]-------
recur(3) → returns 3. pass "3" to down recur(recurtion: 3, value: 3)
recur(2) → 2 + 3 = 5. pass "5" to down recur(recurtion: 2, value: 5)
recur(1) → 2 + 5 = 7. pass "7" to down recur(recurtion: 1, value: 7)
recur(0) → 2 + 7 = 9. no more pass and this "9" is the final value




*/
