function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

/* 
As soon as I call this function outside of the function it piles a (anonymous) function to the call stack which is the global call.
Then it get inside the function and add the function "factorial()" to the call stack.
Then it keep adding on the call stack one on top of another.
Emample:

factorial(factorial local scope is: 1) as (2 - 1) = 1
factorial(factorial local scope is: 2 as (3 - 1) = 2)
factorial(factorial local scope is: 3 as (4 - 1) = 3)
factorial(factorial local scope is: 4)
(anonymous)
-------------------
Call Stack

Now the functions on the call stack will "unwind" in (LIFO) order Or the the top one 1st then all the way to the down. 
While unwinding, as we returned the function with (n * function(local values)), it will use that logic of multification and each time the "n" value will be decreasing. like so:
!Note: this calculation/ subtruction of n (4, 3, 2, 1) happens in each functoin execution context as the function local value.
n is 1 * factorial(1) -> 1 * 1 = 1 so n is now 1
n is 1 * factorial(2) -> 1 * 2 = 2 so n is now 2
n is 2 * factorial(3) -> 2 * 3 = 6 so n is now 6
n is 6 * factorial(4) -> 6 * 4 = 24 so n is now 24 
So, 24 is the final result.
*/
