<<<<<<< HEAD
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
=======
// Multiply

// This code does not execute properly. Try to figure out why.

// SOLUTION
function multiply(a, b){
  return a * b
 }
 console.log(multiply (3, 4))
>>>>>>> fb269dfab55fc412f137c8b828e566ebfe8c8d5b
