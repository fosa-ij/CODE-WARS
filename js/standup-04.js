// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

// so basically we are going to solve this using the usual mathematical method of calculating the average of a numbeer.
// which is sum of all the numbers divided by the count of numbers given.
//> Different algorithms to solve this problem would be; 1. the for of loop and a simple mathematical expression 2. Using the reduce method and dividing it by the count of numbers present.

//* USING THE FOR OF LOOP METHOD
function getAverage(arr){
    let sum = 0
    let result = 0

    for (let num of arr){
        sum += num
    }
    return result = Math.floor(sum / arr.length)
}
console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,1,1,1,1,1,1,2]))
console.log(getAverage([1,2,3,4,5,]))

//* USING THE REDUCE METHOD
// function getAverage(arr){
//     let sum = 0
//     let result = 0

//     sum = arr.reduce((acc, curr) => acc + curr, 0)
//     return result = Math.floor(sum / arr.length)
// }