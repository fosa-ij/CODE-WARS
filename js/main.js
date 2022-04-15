// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// SOLUTION
function removeEveryOther(arr){
  //leave the first element in the array untouched
  //remove every second element in the array
      //filter through and return the even index elements
    let mapped = arr.filter((x, i) => i % 2 === 0)
    return mapped
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))