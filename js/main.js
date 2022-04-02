// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// SOLUTION
function squareSum(numbers){
    return numbers.map(x => Math.pow(x, 2)).reduce((acc, curr) => acc + curr, 0)
    }
console.log(squareSum([3, 4, 5]))