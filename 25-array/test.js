function recur(n = 0) {
  if (n >= 4) return n;
  return 2 + recur(n + 1);
}
console.log(recur());
/* 

        recur(n+4)
        recur(n+3)
        recur(n+2)
        recur(n+1)
        recur(n=0) outermost call / outer call
-----------------------------
        call stack


        no 2 as base case recur(n+0) = 0 outermost call/ outer call
        2 + recur(n+1) = n is 1 now | this 1 will not be added to 2 but n is now 1
        2 + recur(n+2) = n is 2 now | this 2 will not be added to 2 but n is now 2
        2 + recur(n+3) = n is 3 now | this 3 will not be added to 2 but n is now 3
        2 + recur(n+4) = n is finally 4 and only this 4 will be returned and added to 4 times 2 (2*2*2*2 + 4) 
-----------------------------
            rewind

*/
