// Maximum Multiple

// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,


// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// maxMultiple (10,50)  ==> return (50)

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound){
    //your code here
    //   the idea is to have an array that holds all the possible numbers that matches the condition and after the loop is finished get the last value off the array
    let n = 0
    for (let i = 1; i <= bound; i++){
        if (i % divisor == 0) n = i
    }
    return n
}
console.log(maxMultiple(37, 200));