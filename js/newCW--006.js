// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// SOLUTION
// P: one parameter (a string of words)

// R: retrun (a string) which is the highest scoring word

// E: high('man i need a taxi up to ubud'), 'taxi'), || high('aa b'), 'aa'), || high('what time are we climbing up the volcano'), 'volcano')

// P: store all the alphabets as a string in a variable, 
      // convert the string to an array so as to treat each string seperately by converting again each item to an array 
      // map through the item, returning the position of each letter on the alphabetNum using indexOf, and reduce to a single number 
      // then use the Math.max method to get the highest number in the finally mapped array of highest words and get the index of the number in the array 
      // and return the originally splitted value of the string with that index as in arr[the num]

function high(str){
      const alphabetNum = '-abcdefghijklmnopqrstuvwxyz'
      const strToArr = str.split(' ')
      let mapped1 = strToArr.map((x, i) => x.split(''))
      let finalMap = mapped1.map((x, i) => {
            return x.map(x => alphabetNum.indexOf(x)).reduce((acc, curr) => acc + curr, 0)
      })
      console.log(strToArr);
      console.log(finalMap);
      const indexOfHighestWord = finalMap.indexOf(Math.max(...finalMap))
      return strToArr[indexOfHighestWord]
}
console.log(high('man i need a taxi up to ubud'));
console.log(high('aa b'));
console.log(high('what time are we climbing up the volcano'));