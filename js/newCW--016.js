/* I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals,
where nb_petals > 0. */

// SOLUTION
//P: 1 parameter which is the number of petals == nbpetals
//   nbpetals can never be 0, always greater

//R: to determine the phrase that would be returned

//E: (howMuchILoveYou(7),"I love you")
//   (howMuchILoveYou(3),"a lot")
//   (howMuchILoveYou(6),"not at all")

//P: function to take in a num and return a string matching that number according to the game
//     - store the return string values in an array 
//     - if the nbpetals matches the number of a string in the array, return the value
//     - the number assigned to the string is in ascending order and starts from 1 everytime after 6 is called.

function howMuchILoveYou(nbPetals) {
    // your code
    let arrayOfLoveValues = [
        'I love you', 
        'a little',
        'a lot', 
        'passionately', 
        'madly', 
        'not at all'
    ]
    return arrayOfLoveValues[(nbPetals - 1)  % arrayOfLoveValues.length]
}

console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(8));