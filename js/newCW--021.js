/* Logical calculator

Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False

booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True

booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False

Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False). */

// SOLUTION
// P: two parameters (an array and a logical operator(string))

// R: return a boolean value 

// E: booleans = [True, True, False], operator = "AND"
                // True AND True -> True
                // True AND False -> False
                // return False

// P: compare the various index values against each other using the reduce method
    // compare the result of the first two and use it to solve the next index value

function logicalCalc(array, op){
    let mapped = array.reduce((acc, curr) => {
        if (op === 'AND'){
            return acc && curr
        } else if (op === 'OR'){
            return acc || curr
        } else if (op === 'XOR'){
            return acc ^ curr ? true : false
        }
    })
    return mapped
}
console.log(logicalCalc([true, true, true], 'AND'));
console.log(logicalCalc([true, true, false], 'OR'));
console.log(logicalCalc([true, true, false, true], 'XOR'));