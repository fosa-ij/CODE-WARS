/* Coding Meetup #2 - Higher-Order Functions Series - Greet developers

You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:

The order of the properties in the objects does not matter (except in COBOL).
The input array will always be valid and formatted as in the example above.

SOLUTION */
// P : an array of objects (one)

// R : an array of the same object but adding a method to each person object

// E : 

// P : so the question is how do i add a method to all the objects from the function for it to spit out a new array with the method added to all the objects? == so we could loop through the array(map) and on each item add the method of greeting() referenced by this. and the return the new mapped array.

let list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

function greetDevelopers(list) {
    // thank you for checking out my kata :)
    list.forEach((x, i) => {
        x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`
    })
    return list
}
console.log(greetDevelopers(list1));
console.log(list1[0].greeting);