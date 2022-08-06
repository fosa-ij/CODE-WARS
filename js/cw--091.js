// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    //return true or false
    // if (pin.length === 4 || pin.length ===  6){
    // //  so first condition should be to know if the string meets the condition of 4 or 6 numbers
    //     const pinArr = pin.split("").map(x => Number(x))
    //     console.log(pinArr);
    // //  so firstly convert to array and loop through to find if everything is a number(i suggest using the filter method to check and equate it to the original array)
    //     const filterPinArr = pinArr.filter(x => Number.isInteger(x))
    //     console.log(filterPinArr);
    //     return pinArr.length === filterPinArr.length
    // } else return false
    var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
}
console.log(validatePIN("123"));
console.log(validatePIN("122345"));
console.log(validatePIN("1234.4"));