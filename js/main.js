// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// solution
function solution(str){
  let arrString =  str.split('')
  console.log(arrString)
  let reverseStr = arrString.reverse()
  console.log(reverseStr)
  let joinToString = reverseStr.join('')
  return joinToString
}
console.log(solution('world'))