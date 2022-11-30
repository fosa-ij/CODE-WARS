// Sorted? yes? no? how?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    // it's gonna take a long process to solve, but we can get there eventually....that's P.
    //   so basically just store the let's call it "answers" in a variable as a string and compare with the value given.
    const copyArray = array.slice()
    const ascending = copyArray.sort((a, b) => a - b).join('');
    const descending = copyArray.sort((a, b) => b - a).join('');
    console.log(array)
      console.log(array.join(''), ascending)
      return array.join('') == ascending ? "yes, ascending" : 
             array.join('') == descending ? "yes, descending" : "no"
    }
    console.log(isSortedAndHow([4, 2, 30]))