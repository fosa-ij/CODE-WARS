/* Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
write a function that

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
Hi, could you please provide your <property name>.

and returns only the developers with missing details:
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
]
Notes:

At most only one of the values will be null / empty.
Preserve the order of the original list.
Return an empty array [] if there is no developer with missing details.
The input array will always be valid and formatted as in the example above.

SOLUTION */
// P : an array of objects

// R : returning an array to

// E : ==>

// P : so we want to loop through the array of objects and find each user(object) that has a property with the value 'null' and add a new property question then return only the users that have a null value with the new property added.

let list1 = [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
function askForMissingDetails(list) {
    // thank you for checking out the Coding Meetup kata :)
    let arr = list.forEach((x, i) => {
        // let testArr = []
        // let nullUsers = list.filter((x, i) => {
        //     Object.values(x).forEach(x => x === null)
        //     return 
        //     // for (key in x){
        //     //     testArr.push(x[key])
        //     //     return x[key] === null
        //     // }
        // })
        // console.log(list);
        // // console.log(testArr);
        // return nullUsers
    })

    let arrOfNullUsers = Object.values(arr)
    return arrOfNullUsers
}
console.log(askForMissingDetails(list1)); 