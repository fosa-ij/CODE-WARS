// Is there a vowel in there?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// SOLUION
function isVow(a){
// 97-a, 101-e, 105-i, 111-o, 117-u
        let mapped = a.map(x => x === 97 ? 'a' : x === 101 ? 'e' : x === 105 ? 'i' : x === 111 ? 'o' : x === 117 ? 'u' : x)
        return mapped
      }
    console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))