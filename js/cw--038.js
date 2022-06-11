/* Duck Duck Goose

The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

SOLUTION */
// P : two parameters, an array of objects and an integer 

// R : a string 

// E : duck_duck_goose([a, b, c, d], 1) should return a.name \\ duck_duck_goose([a, b, c, d], 5) should return a.name

// P : so the gist is to loop through the array more than once using the second parameter, how?? one way to do it would be to create a for loop and when the i is more than the length of the array start from the first item in the array again OR you cann subtract the length of the array from the integer given or divide it some kinda way

function duckDuckGoose(players, goose) {
    // ...
    let newP = ''
    for (let i = 0; i < goose; i++){
        let j = i % players.length
        newP = players[j].name
    }
    return newP
}
console.log( duckDuckGoose(["a", "b", "c", "d"], 4) );
console.log( duckDuckGoose(["a", "b", "c", "d"], 5) );
console.log( duckDuckGoose(["a", "b", "c", "d"], 8) );
console.log( duckDuckGoose(["a", "b", "c", "d"], 9) );
console.log( duckDuckGoose(["a", "b", "c", "d"], 21) );