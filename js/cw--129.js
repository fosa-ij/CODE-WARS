// Flatten and sort an array

// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// "use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
//   so looking at these in over three months all i can say is GOD DEY!!!!
//   look for a way to make the array one dimensional and then sort it out in an ascending order.
  let realArr = [];
  array.forEach(z => {
    z.forEach(x => realArr.push(x))
  })
  console.log(realArr);
  return realArr.sort((a, b) => a - b);

//   let emptyArray = [];
//   console.log(emptyArray.concat(array).sort((a, b) => a - b));
}
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8]]))