// *** No Loops Allowed ***

// You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// Do not use loops. Do not modify input array.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

function smallEnough(a, limit){
    //without loops check if an array has values higher than the limit, if below or equal, return true. else return false.
    return a.every(x => x <= limit)
   
  }
  console.log(smallEnough([66, 101], 100))