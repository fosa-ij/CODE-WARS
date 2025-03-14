// Alphabet war

// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight){
    const obj = {
        R: {
            w: 4,
            p: 3,
            b: 2,
            s: 1,
        },
        L: {
            m: 4, 
            q: 3,
            d: 2,
            z: 1
        }
    }
    
    const arr = fight.split('')
    const right = arr.map(x => obj.R[x]).filter(x => Number.isInteger(x)).reduce((acc, curr) => acc + curr, 0)
    const left = arr.map(x => obj.L[x]).filter(x => Number.isInteger(x)).reduce((acc, curr) => acc + curr, 0)

    return left > right ? "Left side wins!" : left < right ? "Right side wins!" : "Let's fight again!"
}
console.log(alphabetWar("imkthqswp")); 