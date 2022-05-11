// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// SOLUTION
function remove(s){
      //coding and coding....
      while (s[s.length - 1] === '!') {
        s = s.slice(0, -1);
      }
      return s;
    }