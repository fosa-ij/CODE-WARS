// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    const array = str.split('-')
    const arrayy = str.split('_')
    if (str.includes('-')) return array.map((x, i) => i > 0 ? `${x[0].toUpperCase()}${x.slice(1)}` : x).join('')
    if (str.includes('_')) return arrayy.map((x, i) => i > 0 ? `${x[0].toUpperCase()}${x.slice(1)}` : x).join('')
    return str
}