// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
const
    a = "xyaabbbccccdefww",
    b = "xxxxyyyyabklmopq",
    c = "abcdefghijklmnopqrstuvwxyz"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    return [...new Set(s1.concat(s2))].sort().join("")
}
console.log(longest(a, b));
console.log(longest(c, c));