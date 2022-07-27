// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)



function getSum( a,b )
{
    // If the two numbers are equal return a or b.
    if (a === b) return a
    // okay so to decide which value is the smaller to use for the initial loop we can define a condition and store the value in a variable
    const S = a < b ? a : b
    const L = a > b ? a : b
    // so now we have the smaller value we can run the for loop and sum all the values between the two parameters
    let count = 0
    for (let i = S; i <= L; i++){
        count += i
    }
    return count 
}
console.log(getSum(-1, 2));