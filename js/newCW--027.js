/* Fuel Calculator

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note 
1 Dollar = 100 Cents

SOLUTION */
// P: two parameters (Litre and PPLitre) in dollars 

// R: total cost of the fuel rounded to two decimal places

// E: fuelPrice(5, 1.23), 5.65) || fuelPrice(8, 2.5), 18.40) that's 5 litres bought for 123 cents 

// P: firstly conveert the parameters in dollars to cents.
    // then do a switch case statement for the price discount and litres bought 
    // the calculation is subtract the discount from the pPLitre and multiply the number of litres bought then return the value

function fuelPrice(litre, pPLitre) {
    // your code here 
    let discount = 0
    if (litre >= 10){
        discount = (pPLitre * 100) - 25
    } else if (litre >= 8){
        discount = (pPLitre * 100) - 20
    } else if (litre >= 6){
        discount = (pPLitre * 100) - 15
    } else if (litre >= 4){
        discount = (pPLitre * 100) - 10
    } else if (litre >= 2){
        discount = (pPLitre * 100) - 5
    }
    // return litre * discount
    return Number((litre * discount).toFixed(2) / 100)
}
console.log(fuelPrice(5, 1.23))
console.log(fuelPrice(10, 3))
console.log(fuelPrice(8, 2.5))