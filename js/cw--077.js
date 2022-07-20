// Stop gninnipS My sdroW!

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// so it's definitely doable, we're to create a function which takes in a string of words and returns the same string but in a slightly formatted way where only words with five or more characters gets inverted or reversed
// we're getting only strings and no integers, hence when giving this string "This is a test" we return the exact same thing, 
// but if a string like this "Hey fellow warriors" is giving we get something like "Hey wollef sroirraw"

// so firstly we're to separate the words and check if any has length of 5 or more if not just return the exact same string
// then reverse the words that are 5 or more and return the joint string

function spinWords(string){
    //TODO Have fun :)
    const strArray = string.split(' ')
    return strArray
    .map((x, i) => {
        if (x.length >= 5) return x.split('').reverse().join('')
        return x
    })
    .join(' ')
}
console.log(spinWords("Hey fellow warriors"));