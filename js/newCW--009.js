// L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// SOLUTION
let getDrinkByProfession = string => {
      let statement;
      switch (string.toLowerCase()){
            case 'jabroni': 
                  statement = 'Patron Tequila'
                  break
            case 'school counselor':
                  statement = 'Anything with Alcohol'
                  break
            case 'programmer':
                  statement = 'Hipster Craft Beer'
                  break
            case 'bike gang member': 
                  statement = 'Moonshine'
                  break
            case 'politician':
                  statement = 'Your tax dollars'
                  break
            case 'rapper': 
                  statement = 'Cristal'
                  break
            default: 
                  statement = 'Beer'
      }
      return statement
}
console.log(getDrinkByProfession( "Bike Gang Member"))