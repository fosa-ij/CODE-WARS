// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    //   TODO: complete
    //   okay, so the first thing to do is to findthe index of the '#' 
      if (url.includes('#')){
        const indexOfHash = url.split('').findIndex(x => x === '#')
      //   then, delete all the words after it
        return url.split('').slice(0, indexOfHash).join('')
      }
      return url
}
console.log(removeUrlAnchor('www.codewars.com#about'))