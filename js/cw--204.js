// In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

// If there is an equal amount of bad and good actions, return 'naughty'

// Examples:

// bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
// whatListAmIOn(bad_actions)
// #-> 'naughty'
// good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
// what_list_am_i_on(good_actions)
// #-> 'nice'
// actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
// what_list_am_i_on(actions)
// #-> 'naughty'

function whatListAmIOn(actions) {
  //your code here
  //map out the array into their first char and work with that
  //b,f, k are naughty
  //g, s, n are nice
  //i want to loop through the arr and count the number of char that are naughty or nice
  const map = actions.map((x) => x[0]);
  let naughty = 0;
  let nice = 0;
  for (let x of map) {
    if (x == `b` || x == "f" || x == "k") {
      naughty++;
    } else if (x === "g" || x == "s" || x == "n") {
      nice++;
    }
  }
  return naughty < nice ? "nice" : "naughty";
  console.log(map, nice, naughty);
}
