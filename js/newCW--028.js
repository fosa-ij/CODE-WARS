/* How many pages in a book?

Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of digits of all page numbers.

Task: Given the summary, find the number of pages n the book has.

Example
If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in total: 1234567891011121314151617.

Be aware that you'll get enormous books having up to 100.000 pages.

All inputs will be valid.

SOLUTION */
// P: one parameter (the summary an integer)

// R: an integer the number of pages the book has

// E: summary = 25, num of pages = 17

// P: so basically we want to create a loop that will run 'summary num of times' and concat a number to a variable (string or array) on each round

function amountOfPages(summary){
  let pages = ''
  let arrOfPages = []
    for (let i = 1; i <= summary; i++){
        if (pages.length === summary) break 
        else {
            pages += i
            arrOfPages.push(i)
        }
    }
    return arrOfPages.pop()
}
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));