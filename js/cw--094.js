// pick a set of first elements

// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
const arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

    // firstly, we're taking two arguments the arr and an integer 
    // and to retrun a formatted array 
    // with the default value for n = 1, return the first elements in the array according to the number passed in the second argument
function first(arr, n = 1) {
    // so basically we're are to copy the array using the splice method 
    return arr.slice(0, n)
    // return arr;
}
console.log(first(arr, 0))
console.log(first(arr, 2));