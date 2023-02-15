/*
Write a function that takes one integer argument, 
which may be positive, negative, or zero. This method
returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.
*/

let isOdd = num => num % 2 == 1;


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

console.log(isOdd(-4)); // => false
console.log(isOdd(-3)); // => true

/*
I believe an even simpler function works just as well without using Math.abs().

Copy Code
let isOdd = num => num % 2 !== 0;
For example: An argument of -4 passed into the function will evaluate to -0 which IS loosely equal to zero and will return the Boolean value false. An argument of -3 passed into the function will evaluate to -1 which is not loosely equal to zero and will return the Boolean value true.

All positive number arguments work as you'd expect.

Using Math.abs() and a strict equality comparison is certainly safer in general, but this was a fun way to minimize the code while playing with loose equality of 0 and -0.
*/