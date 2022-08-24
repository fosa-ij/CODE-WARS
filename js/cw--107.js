// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// This is basically a function that takes a string and returns a more formatted string
// okay so basically removing all the vowels from a string and returning whats left of the string 
// The question is how do i remove the vowels from the string? 
//      so one way is to split into an array and check each element in the arrray and if they match any letter in the variable of vowels find a way to remove it.
// Then return the formatted string

function disemvowel(str) {
    const arrayOfStr = str.split('')
    const vowels = 'aeiou'
    let disemvowel = []
    arrayOfStr.forEach((x, i) => vowels.includes(x.toLowerCase()) ? false : disemvowel.push(x))
    return disemvowel.join('')
}
console.log(disemvowel("This website is for losers LOL!"));