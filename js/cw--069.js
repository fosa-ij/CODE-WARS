// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// SOLUTION
// so we are to create a function that takes in an array
// and returns an integer that occurs an odd number of times 
// [7] == 7
// [1,1,2] == 2

// So basically i just want to talk the talk and write shit that solves the code
// so i was given an array of integers and i'm to return a single integer according to how the code is formatted
// so given an integer of numbers find the one that appears an odd number of times...@question
// okay so firstly, find all the numbers...kind off putting them in a loop situation
// then, with each number find how many times each number appears in the array and probably store in a variable
// then just find out if the number in the variable stored is odd or not and store in array and return the array

function findOdd(array){
// okay remove the duplicates before filtering to find out how many times the number occure in the array
    const minusDup = [...new Set(array)]
    // Declare a variable to store the filtered number of times 
    let filteredArr = []
    // Looping through the array...
    minusDup.forEach(x => {
        filteredArr.push(array.filter(y => y == x).length)
    })
    // using the value gotten from the filtered array, map through it and check if it is odd or not : but with a ternary to return the number if true and false for otherwise
    const mappedArr = filteredArr.map(x => x % 2 != 0 ? x : false)
    // Next step is to get the index of the integer in the array and check it with the non-duplicate array to find the original number
    const indexOfOddNumber = mappedArr.findIndex(z => z)
    return minusDup[indexOfOddNumber]
}
console.log(findOdd([1,1,2]));
console.log(findOdd([7]));