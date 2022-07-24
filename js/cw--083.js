// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// if more than one element in an array is odd, loop through the array and find the even one and vice versa
// when the "odd" number is found return the value

function findOutlier(integers){
    //your code here
    const oddNum = integers.filter(x => x % 2 === 0)
    // if (oddNum.length === 1) return oddNum[0] // for the only even number in an odd array
    // if (oddNum.length > 1){
    //     return integers.filter(x => x % 2 !== 0)[0]
    // }
    return oddNum.length === 1 ? oddNum[0] : integers.filter(x => x % 2 !== 0)[0]
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));