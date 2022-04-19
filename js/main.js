// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0

// SOLUTION
function positiveSum(arr) {
      //get the positive numbers out of the array
      //then sum the numbers
      let total = 0
      arr.forEach((x) => {
        return x > 0 ? total += x : total += 0
      })
      return total
    }
console.log(positiveSum([3, -2, 4]))