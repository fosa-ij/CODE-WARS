// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// SOLUYION
function invert(array) {
    let mapped = array.map(x => x >= 0 ? Number(`-${x}`) : Math.abs(x)) 
    return mapped 
  }
  console.log(invert([1,-2,3,-4,5,0]))