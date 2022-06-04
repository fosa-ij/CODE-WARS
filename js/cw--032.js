/* Get key/value pairs as arrays

Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?

SOLUTION */
// P: one value (an object)

// R: an array containing two arrays of which contains the keys and values of the object passed in the function

// E: keysAndValues({a: 1, b: 2, c: 3}) => [['a', 'b', 'c'], [1, 2, 3]]

// P: loop through the object and store the key and value in seperate arrays which is then stored in another array and return!

function keysAndValues(object){
    // TODO: complete
    let keys = []
    let values = []
    for (key in object){
        keys.push(key)
        values.push(object[key])
    }
    return [keys, values]
}

// function keysAndValues(data){
//     return [Object.keys(data), Object.values(data)];
// }

console.log(keysAndValues({a: 1, b: 2, c: 3}));
console.log(keysAndValues({1: 'a', 2: 'b', 3: 'c'}));