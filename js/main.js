// Powers of 2

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// SOLUTION
function powersOfTwo(n){
  //take a number "n" return an array of all the numbers from 0 - n
      let arr = []
          for (let i = 0; i <= n; i++){
            arr.push(i)
          }
  //square 2 with each of the numners from that array by mapping them
      let squared = arr.map(x => Math.pow(2, x))
  //return an array of the results
  return squared
}
console.log(powersOfTwo(4))