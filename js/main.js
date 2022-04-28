//Given an array of integers as strings and numbers, return the array with 200 as an integer in the 3rd and the 4th index
let allNumbers = arr => {
  return arr.map(x => Number(x)).fill(200, 3, 5)
}
console.log(allNumbers([22, '-6', 32, 82, '9', 25]))