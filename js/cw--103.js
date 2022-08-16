// Find the middle element

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme (triplet) {
    // so the first thing i have to do is to find the middle number in the array
    let middleNum = 0
    triplet.forEach(x => {
        if (x !== Math.max(...triplet) && x !== Math.min(...triplet)){
            middleNum = x
        }
    })
    console.log(middleNum);
    const indexNum = triplet.findIndex(x => x === middleNum)
    return indexNum
    // when you get the middle number use the findIndex method to get the index of the number 
}
console.log(gimme([5, 10, 14]));
console.log(gimme([2, 3, 1]));