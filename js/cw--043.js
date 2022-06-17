/* Coding Meetup #10 - Higher-Order Functions Series - Create usernames

Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

SOLUTION */
// P : we will be given an array of objects 

// R : return the same object but with an added property of username

// E : =>

// P : so this is pretty simple just add the property "username" to all the objects in the array. firstly you need to get the current date of the year, then get the initial of the users lastname in lowercase and concatenate all the values to form a username (using dot notation) that will be added to the users in the array.


var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

function addUsername(list) {
    // thank you for checking out the Coding Meetup kata :)
    let currentYear = new Date().getFullYear()
    list.forEach((x, i) => {
        let name = x.firstName.toLowerCase() + x.lastName.charAt(0).toLowerCase()
        let birthYear = currentYear - x.age
        return x.username = name + birthYear
    })
    return list
}
console.log(addUsername(list1));