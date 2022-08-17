// Find the capitals

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	// Write your code here
    // so this is similar to the previous one 
    // so firstly find the letters that are uppercase using strict equality to compare the original letter and push to a new array
    let newArr = []
    word.split('').forEach(x => (x === x.toUpperCase()) ? newArr.push(x) : false)
    // and if the condition returns true the find the index of the letter from the original array 
    const capitalsIndex = newArr.map(x => word.split('').findIndex(y => y === x))
    return capitalsIndex
};
console.log(capitals('CodEWaRs'));