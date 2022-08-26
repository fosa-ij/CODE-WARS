// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    // ...
    // so getting the no of times each letter occured is not a problem
    // then just map it and any number greater than 1....you know the vibe
    const dupNum = worddd => worddd.toLowerCase().split('').map(x => worddd.toLowerCase().split(x).length -1)
    return dupNum(word).map(x => x > 1 ? ")" : "(").join('')
}
console.log(duplicateEncode('(( @'));
console.log(duplicateEncode('recede'));