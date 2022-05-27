/* Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ). */

// SOLUTION
//p: An array (one value) 

//R: a single number 

//E: [2, 1, 10]  -->  9 || Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

//P: 1. rearrange the array in descending order || 2. subtract each number in this index order (0 - 1, 1 - 2, 2 - 3....) || 3. reduce to a single value

function sumOfDifferences(arr){
    let sorted = arr.sort((a, b) => b - a)
    // console.log(sorted)
    let newArr = []

    for (let i = 0; i < sorted.length; i++){
        if (i === sorted.length -1){
            newArr.push(0)
        } else {
            newArr.push(sorted[i] - sorted[i + 1])
        }
    }
    // console.log(newArr)
    return newArr.reduce((acc, curr) => acc + curr, 0)
}
console.log(sumOfDifferences([2, 1, 10]))
console.log(sumOfDifferences([2, 1, 10, 5, 13]))
console.log(sumOfDifferences([10]))
console.log(sumOfDifferences([]))

///////////////////////////////////////////////////////////////////

// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }