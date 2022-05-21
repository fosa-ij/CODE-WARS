/* Squash the bugs

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
 */

// SOLUTION
// P: one parameter (a string) of different words
 
// R: length of the longest word in (NUMBER)

// E: findLongest("The quick white fox jumped around the massive dog"), 7),  findLongest("Take me to tinseltown with you"), 10)

// P: split the string into an array and map throught the array with str.length and sort them in ascending order and return the pop() value

function findLongest(str) {
    let strToArr = str.split(' ')
    let mappedThenSorted = strToArr.map((x, i) => x.length).sort((a, b) => a - b)
    return mappedThenSorted.pop()

}
console.log(findLongest('Take me to tinseltown with you'));
console.log(findLongest("The quick white fox jumped around the massive dog"));