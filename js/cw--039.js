/* Even numbers in an array

Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

SOLUTION */
// P : two parameters one is an array and the other is an interger

// R : one array

// E : ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]

// P : so the question is how do we filter throught the array to get all the even numbers? that's settled \\ secondly, we are to find a way to return only the "second argument" number of even numbers in an array, ps. use only absolute values no negatives

function evenNumbers(array, number) {
    // good luck
    let evenNum = array.filter(x => Math.abs(x) % 2 == 0)
    evenNum.splice(0, (evenNum.length -number))
    // console.log(evenNum);
    return evenNum
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, -8, 9], 3)); 
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)); 
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); 