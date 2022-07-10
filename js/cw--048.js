// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Find Nearest square number

// SOLUTION
// so we are taking a positive integer as parameter
// and return an integer too
// like nearestSq(10),9) || nearestSq(111),121)
// how do you square a number (Math.sqrt(x)), when we get the number 
// you can think of it as creating two different loops and calculating how many iterations it takes to find a perfect square from both loops 

// or you can add all the values to an array and check the array first for the perfect square before creating an after loop to find the perfect square 

function nearestSq(x){
    // your code
    return Math.pow(Math.round(Math.sqrt(x)), 2)
}
console.log( nearestSq(111) );
console.log( nearestSq(10) );