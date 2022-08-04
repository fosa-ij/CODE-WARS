// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// okay so this is simple and straight foward, split the string and map it to the length of each string and get the min value of every thing and return 

function findShort(str){
    const [ min ] = str.split(' ').map(x => x.length).sort((a, b) => a - b)
    return min
}
console.log(findShort("Let's go too thee cinema"));