/* Minimize Sum Of Array (Array Series #1)

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes
Array/list will contain positives only .
Array/list will always has even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product , 26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product , 9*0 + 8*2 +7*4 +6*5 = 74

SOLUTION */
// P : one array of even length and only integers
// R : single number
// E : minSum([5,4,2,3]), 22); || minSum([12,6,10,26,3,24]), 342);

// P : so firstly i have to sort the array in ascending order || then loop through the array and multiply the first element with the last element and so on and so fort, then return the value


function minSum(arr) {
    // your code here
    arr.sort((a, b) => a - b)
    const mapped = arr.map((x, i, array) => x * array[array.length -i -1])
    const rmvDup = [...new Set(mapped)]
    const minimumSum = rmvDup.reduce((acc, curr) => acc + curr, 0)
    return minimumSum
}
console.log(minSum([5,4,2,3]))
console.log(minSum([12,6,10,26,3,24]))
console.log(minSum([9,2,8,7,5,4,0,6]))