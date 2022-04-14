// Filter unused digits

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:
// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted

// SOLUTION
function unusedDigits(...x) {
  const a = [0,1,2,3,4,5,6,7,8,9]
  let y = x.join('')
  let newArr = a.filter(arr => !y.includes(arr))
  return newArr.join('');
}
console.log(unusedDigits(12,34,56,78))