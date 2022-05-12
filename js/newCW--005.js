// Alphabet symmetry

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

// SOLUTION
let solve = arr => {
      let alphabets = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      // console.log(alphabets)
      //for each arr element given, check if it contains any of the alphabets in their given order (according to the normal alphabets from 1 - 26)
      arr.forEach((x, i) => {
            alphabets.forEach((z, u) => x.toLowerCase())
            
      })
}
console.log(solve(["abode","ABc","xyzD"]));