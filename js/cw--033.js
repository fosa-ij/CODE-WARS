/* Last digit symmetry

Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:

the first two digits of 1176 form a prime.
the first two digits of the square 1382976 also form a prime.
the last two digits of 1176 and 1382976 are the same.
Given two numbers representing a range (a, b), how many numbers satisfy this property within that range? (a <= n < b)

Example
solve(2, 1200) = 1, because only 1176 satisfies this property within the range 2 <= n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.

Good luck!

SOLUTION */
// P : Two numbers (a range)

// R : an integer representing the amount of numbers that can satisfy the function

// E : (1176 * 1176) = 1382976 => 1 (only 1176 satisfies the solution)

// P : so basically what we want is to loop through the range given and check the numbers that can satisfy the condition and add to a variable else, return 0

function solve(a, b) {
    let matchedCondition = 0

    for (let i = a; i < b; i++){
        let sqr = Math.pow(i, 2)
        let c = Number(i.toString().split('')[0] + i.toString().split('')[1])
        console.log( c );
        for (let j = 2; j <= c; j++){
            if (c % j === 0){
                let d = Number(sqr.toString().split('')[0] + sqr.toString().split('')[1])
                for (let k = 2; k <= d; k++){
                    return (d % k === 0) ? matchedCondition++ : matchedCondition += 0
                }
            } else false
        }
    }
    return matchedCondition 
    // let firstTwoNum = Number(a.toString().split('')[0] + a.toString().split('')[1])
    // console.log( firstTwoNum);
    // return a.toString().split('').length
}
console.log(solve(2, 1200));