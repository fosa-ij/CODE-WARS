// Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!


// so firstly, we're accepting an array of numbers
// and returning a string in a formatted way
// so firstly divide the array into 3 places
// then hardcode shit and just get it done

function createPhoneNumber(numbers){
    let fThree = numbers.slice(0, 3)
    let sThree = numbers.slice(3, 6)
    let lThree = numbers.slice(6)
    return `(${fThree.join('')}) ${sThree.join('')}-${lThree.join('')}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));