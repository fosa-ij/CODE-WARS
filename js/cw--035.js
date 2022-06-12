/* Sort by Last Char

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.

SOLUTION */
// P : one (string of words) 

// R : an array of words

// E : last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']); || last('take me to semynak'), ['take', 'me', 'semynak', 'to']);  

// P : the big question will be, how to sort in alphabetical order? || that's done by the localeCompare method \\ so basically what we want to do is use the method for only the last letter in the word

function last(x){
    let arr = x.split(' ')
    console.log(arr[3].charAt(arr[3].length -1));
    return arr.sort((a, b) => {
        return (a.charAt(a.length -1)).localeCompare((b.charAt(b.length -1)))
        // (a.slice(-1)).localeCompare(b.slice(-1))
    })
}
console.log(last('a b c den i ab z x p'));
console.log(last('take me to semynak'));