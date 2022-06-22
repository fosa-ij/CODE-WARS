/* SevenAte9

Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"

SOLUTION */
// we are receiving a parameter as a string of numbers 
// and we are to retrun the string of numbers modified

// for example: "79712312" --> "7712312"
// so what we want to do is convert the string to an array and delete all the 9's in between 7's ... we create a conditional to check for all the 9's between two 7's
// and join the array to a string and return it

function sevenAte9(str) {
    let arr = str.split("")
    // let x = arr.indexOf('9')
    arr.forEach((x, i) => {
        if (x == '9'){
            if ((arr[i -1]) == '7' && (arr[i +1]) == '7'){
                arr.splice(i, 1)
            }
        } else {
            return x
        }
        return arr
    })
    let newStr = arr.join("")
    return newStr
}
console.log(sevenAte9("165561786121789797"));