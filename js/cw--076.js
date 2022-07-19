// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function countString(str, letter) { 
    let count = 0; 
 
    // looping through the items 
    for (let i = 0; i < str.length; i++) { 
 
        // check if the character is at that position 
        if (str.charAt(i) == letter) { 
            count += 1; 
        } 
    } 
    return count; 
} 
function XO(str) {
    const STR = str.toLowerCase()
    // if (STR.includes('x') && STR.includes('o')) {

        // when same amount of x and o return true
        // when x and o and other letter is present return true
        // if (countString(STR, 'x') === countString(STR, 'o')) return true
        // return false

    // } else {
    //     // when no x and o return true
    //     if (!STR.includes('x') && !STR.includes('o')) return true

    //     // when only either x or o return false
    //     return false
    // }
    
    return countString(STR, 'x') === countString(STR, 'o')
}
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log( XO("zzoo"));