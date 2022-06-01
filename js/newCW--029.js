/* Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

SOLUTION */
// P: two parameter

// R: an integer (one value)

// E: twiceAsOld(36,7) , 22) || twiceAsOld(55,30) , 5) || twiceAsOld(42,21) , 0)

// P: multiply the son's age by 2 and store in a variable, add or subtract till the father's age equals the value in the variable (we made), if the father's age subtracted from double the son's age is greater than zeroo, run the conditonal to 

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let doubleSonsAge = sonYearsOld * 2
    return Math.abs(dadYearsOld - doubleSonsAge)
    
}
console.log( twiceAsOld(36, 7) );
console.log( twiceAsOld(55, 30) );
console.log( twiceAsOld(42, 21) );