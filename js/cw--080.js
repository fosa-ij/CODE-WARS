// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// so we're to create a string taking a string as a parameter and returning the string in a modified manner
// so we split the string to an array and work on the array by mapping through it and capitalizing it and then duplicating it depending on what index it falls on 
// and join it with the hyphen "-"


function accum(s) {
	// your code
    const array  = s.toLowerCase().split('')
    return array.map((x, i) => `${x[0].toUpperCase()}${x.repeat(i)}`).join('-')
}
console.log(accum("abCd"));