// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// COPY
// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'
// As an example, here is how a string looks before and after the characters are fixed:

// COPY
// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
// // implement fix function ->
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// Please create a function that will fix a given string of this mistake before incalculable damage can be done!

// so first things first we are to create a function that takes in a string of characters mismatched and replace them with their rigthful characters, and return the correct string
// Note: the characters can be altered both ways depending on what is given.
//> okay so firstly i'd like to create an object that holds all the characters and their rightful values if i may say.

class ReplaceChar {
  constructor() {
    this.char = {
      '0': "O",
      '1': "I",
      '2': "Z",
      '3': "E",
      '4': "h",
      '5': "S",
      '6': "G",
      '7': "L",
      '8': "B",
      '9': "q",
    };
    this.revChar = {
      'O': "0",
      'I': "1",
      'Z': "2",
      'E': "3",
      'h': "4",
      'S': "5",
      'G': "6",
      'L': "7",
      'B': "8",
      'q': "9",
    };
  }
  replaceChar(str) {
    const arr = str.split("");
    const reversedArr = arr.map((x) => this.char[x] || this.revChar[x] || x);
    return reversedArr.join("");
  }
}

const test = new ReplaceChar().replaceChar(
  "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
);
console.log(test);



