/* Do you speak "English"?

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

 */

// SOLUTION
// p: one parameter (string)

// R: true if the string contains english and false if not

// E: spEng("english"), true); spEng("egnlish"), false)

// P: check if the string contains the word 'english' in the correct order

function spEng(sentence){
    //write your code here
    return sentence.toLowerCase().includes('english')
}
console.log(spEng('ihvkhahfihkenglishoijkj')); 
console.log(spEng('ihvkhahfihkengilshoijkj')); 