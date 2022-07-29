// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// SOLUTION
// so firstly we are creating a function with one paramter which is an integer.
// then we are to return the '"sum of the multiples"' below the number

// an example is the number 10 == we have 3, 5, 6, 9 == sum is "23"

// okay create a function with an integer parameter, create an array variable and loop through the integer given and find the numbers that can both divide 3 and 5 using mod without a reminder 
// then add the numbers to an array and sum them 

function solution(number){
    if (number < 0) return 0
    let array = []
    for (let i = 1; i < number; i++){
        if (i % 3 === 0 || i % 5 === 0){
            array.push(i)
        }
    }
    const nonDuplicateArray = [...new Set(array)]
    const sumOfMultiples = nonDuplicateArray.reduce((acc, curr) => acc + curr, 0)
    return sumOfMultiples
}

console.log(solution(10))
console.log(solution(16))