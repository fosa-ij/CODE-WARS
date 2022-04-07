// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// SOLUTION
function fakeBin(x){
    let zeroAndOne = x.split('').map(x => x < 5 ? x = 0 : x = 1).join('')
    return zeroAndOne
}
console.log(fakeBin('45385593107843568'))