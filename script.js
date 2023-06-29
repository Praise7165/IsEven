


// EXERCISE 2
// write a function, isEven, to test whether a number is even or odd. It should
// accept a single parameter (a positive, whole number) and return a boolean. 
// true if it is even, false if it is odd.

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);

    else return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-20));