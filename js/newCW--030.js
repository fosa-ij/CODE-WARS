/* Square Every Digit

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

SOLUTION */
// P: an integer (one)

// R: an integer from the resulting equation

// E: 9119 => 811181

// P: so the function recieves an integer which is then converted into a string and put in an array and use the various methods used to solve the equation

function squareDigits(num){
    let numToString = num.toString()
    // console.log(numToString)
    return (+numToString.split('').map(x => (+x)*x).join(''))
}
console.log(squareDigits(9119));