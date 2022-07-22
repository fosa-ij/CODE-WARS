// Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// so we're to create a function that takes in an integer and returns an integer also
// so we're not expecting a negative integer and also strings as well 
// basically, if a number 1234 is given it's binary is 10011010010 and hence we're expecting 5 to be returned as there are 5 number one's present 
// i'm going to approach this by first getting the binary of the parameter giving and then counting how many one's present in the resulting value

var countBits = function(n) {
    // converting an integer to binary
    const binaryNum = (n).toString(2).split('')
    console.log(binaryNum);
    let ones = 0
    binaryNum.forEach((x, i) => x == 1 ? ones += 1 : x)
    return ones
};
console.log(countBits(5921185667));