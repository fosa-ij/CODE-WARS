/* Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

 */

// SOLUTION
// P: one string 

// R: an array of two strings 

// E: capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

// P: loop through the length of the string and capitalize the odd or even number

function capitalize(str){
    let firstValue = ''
    let secondValue = ''
    for (let i = 0; i < str.length; i++){
        if (i % 2 === 0){
            firstValue += str.charAt(i).toUpperCase()
            secondValue += str.charAt(i)
        } else {
            firstValue += str.charAt(i)
            secondValue += str.charAt(i).toUpperCase()
        }
    }
    return [firstValue, secondValue]
};
console.log(capitalize('fosa'));
console.log(capitalize('abcdef'));
console.log(capitalize('codewars'));