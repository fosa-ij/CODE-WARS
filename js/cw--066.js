// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// SOLUTION
// so we're getting two arrays as parameters 
// are they all integers 
// are they gonna be positive integers 
// okay so all positive integers....GREAT!

// okay so i'm to return an array back 

// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// what about an empty array? if one return the other array as the result, if two empty arrays, return an empty array...

// - firstly, check the two arrays for similar elements....\\ loop through both arrays and check if one value exists in the other.

// - if similar elements are present eliminate all of them....\\ so we can store them in another array if they return false to the first check(present in both arrays)

// - then return the value of the resulting array

function arrayDiff(a, b) {
    let array = []
    // if ( (a.length === 0 && b.length === 0) || a.length === 0) return []
    // if (a.length !== 0 && b.length === 0) return a

    for(let i = 0; i < a.length; i++){
        if (!b.includes(a[i])) array.push(a[i])
    }
    return array
}
console.log(arrayDiff([1,2,3],[1,2]));
console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([],[1]));
console.log(arrayDiff([1,2],[]));