/* Evens and Odds

This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.

SOLUTION */
// P 

// R 

// E : doTest(2,'10');
	// doTest(13,'d');
	// doTest(47,'2f');
	// doTest(0,'0');

// P : first of all find a way to check if a number is odd or even(using the modulo symbol) and pass them into thier various functions
function convertToBinary(num){
    return (num >>> 0).toString(2);
}
function convertToHexadecimal(num){
    return num.toString(16);
}

function evensAndOdds(number){
	//your code here
    if (number % 2 === 0){
        return convertToBinary(number)
    } else {
        return convertToHexadecimal(number).toLowerCase()
    }
}
console.log(evensAndOdds(2)); 
console.log(evensAndOdds(13)); 
console.log(evensAndOdds(47)); 