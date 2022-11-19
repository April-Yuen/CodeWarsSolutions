// Roman Numerals Decoder

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// I will not be given any letters that are undefined, empty, or numbers in the string. 
// parameter => The roman numeral letters. If there is a number that is less then the number that is 1, 10, 100, less, you put the smaller letter minus the larger letter. 
// the largest letter would be a 4 digit letter. 

// 1.split the string to turn into an array. 
// Set count to = 0
// Make an object with the key value pair of each letter. Put the ones that require subtraction into the map. 
// for each element in the split, I will add the equivalent amount to the count. 
// if the

function solution (roman) {
    let romanNums = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1}
    let splitRoman= roman.split("")
    let total = 0
    let current
    let currentValue
    let next
    let nextValue
      for(let i = 0; i < splitRoman.length; i++){
      current = splitRoman[i]
      currentValue = romanNums[current]
      next = splitRoman[i+1]
      nextValue = romanNums[next]
      if(currentValue < nextValue){
         total-=currentValue
       }else {
         total+= currentValue
       }
     }
   return total
  }
  
  
          console.log(solution('XXI', 21));
          console.log(solution('I', 1));
          console.log(solution('IV', 4));
          console.log(solution('MMVIII', 2008));
          console.log(solution('MDCLXVI', 1666));