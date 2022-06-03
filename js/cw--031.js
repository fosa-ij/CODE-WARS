/* Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

SOLUTION */
// P: one array containing numbers of not less than 4, no floats or negative integers

// R: returning an integer which is the sum of the two least numbers on the array

// E: [19, 5, 42, 2, 77] => 7

// P: so THIS IS SIMPLE, first sort the array and sum the first index values of the sorted array

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    let sortedArr = numbers.sort((a, b) => a - b)
    return sortedArr[0] + sortedArr[1]
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));