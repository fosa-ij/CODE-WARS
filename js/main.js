// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

// SOLUTION
function isPalindrome(x) {
  // your code here
  let xL = x.toLowerCase();
  return xL === xL.split('').reverse().join('')
}