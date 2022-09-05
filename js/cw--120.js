// Most digits

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    // code here
    let num = ''
    array.map(x => x.toString()).forEach((x, i, a) => {
      return x.length > num.length ? num = x : false
    })
    return Number(num)
}
console.log(findLongest([1, 10, 100]))