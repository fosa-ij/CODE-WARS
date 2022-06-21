// given array of numbers, return (number + 10) if number is < 10, 
// return (number + 3) / 4 if (number + 3) is divisible by 4
// return number / 2 if number is even

// so basically we want to loop through the array maybe using map method and use the different conditionals to solve the question above
// we're getting an array and returning an array

function manipulateArray(array){
return array.map((x, i) => {
    if ((x + 3) % 4 == 0){
        return (x + 3) / 4
    } else if (x % 2 == 0){
        return x / 2
    } else if (x < 10) {
        return x + 10
    } else {
        return x
    }
})
}
console.log(manipulateArray([3, 2, 10, 5, 12, 7, 9]));