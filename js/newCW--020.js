/* Check same case

Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1 */

// SOLUTION
// P: two parameters of any data type

// R: returned values for different conditions

// E: '0' and '?' returns -1 */, 'A' and 'C' returns 1, 'B' and 'g' returns 0

// P: if both characters are letters and same case (return 1), if both characters are letters and not the same case (return 0), if either of the characters is not a letter (return -1)

function sameCase(a, b){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    
    if (typeof a === 'string' && typeof b === 'string'){
        if (alphabets.includes((a.toLowerCase())) && alphabets.includes((b.toLowerCase()))){
            if (a === a.toLowerCase() && b === b.toLowerCase()){
                return 1
            } else if (a === a.toUpperCase() && b === b.toUpperCase()){
                return 1
            } else {
                return 0
            }
        } else {
            return -1
        }
    } else {
        return -1
    }
}
console.log(sameCase('a', 'b'));
console.log(sameCase('A', 'B'));
console.log(sameCase('a', 'B'));
console.log(sameCase('a', 0));
console.log(sameCase(0, '?'));