// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// SOLUTION
function remove (string) {
      //coding and coding....
    //   return string.replace(/!+/g, '') + '!'
      return string.split('!').join('') + '!'
}
console.log(remove(("Hi!!!")))