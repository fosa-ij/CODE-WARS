// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// okay so we are giving a function which will take in a string of mixed data types specifically alphabets and numbers
// And return an integer telling the number of duplicate characters, case-insensitive
//      So basically split the string and loop through the array and kinda check how many times the element appears in the array
//      okay so, using the split method to get the num of times an element occurs, then map through to replace the elements with their duplicate num
//      but before that i also want to remove the duplicate from the original array so i can focus on a single element when checking for the number of times an element occured

function duplicateCount(textt){
    //...
    const text = textt.toLowerCase();
    const rmvDup = [...new Set(text.split(''))]
    const duplicateNum = element => text.split(element).length -1 // @how to get the number of times a letter occured in a string.. 
    const individualDup = rmvDup.map((x, i) => x == ' ' ? false : duplicateNum(x))
    const numOfDup = individualDup.filter(x => x > 1).length
    return numOfDup
}
console.log(duplicateCount("Indivisi  bilities")); 