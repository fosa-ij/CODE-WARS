// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// SOLUTION
let getCount = str => {
      let vowelsCount = 0
      let array = str.split('')
      console.log(array)
      // array.forEach(x => (x === 'a' || 'e' || 'i' || 'o' || 'u') ? vowelsCount++ : x)
      array.forEach(x => {
            switch (x) {
                  case 'a':
                        vowelsCount++
                        break
                  case 'e':
                        vowelsCount++
                        break
                  case 'i':
                        vowelsCount++
                        break
                  case 'o': 
                        vowelsCount++
                        break
                  case 'u': 
                        vowelsCount++
                        break
            }
      })
      
      return vowelsCount

}
console.log(getCount('efosa joshua'));