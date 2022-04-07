// The 'if' function

// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.

// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

// SOLUTION
let _if = (bool, func1 = function(){console.log('fosa says the truth')}, func2 = function(){console.log('fosa is a liar')}) => bool ? func1() : func2()
console.log(_if(true))