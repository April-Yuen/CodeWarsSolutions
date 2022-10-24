// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array){
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    let lowerCaseSplit = lowerCase.split("")
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let upperCaseSplit= upperCase.split("")
    if(array[0] === array[0].toLowerCase()){
      for(let i = 0; i < array.length; i++){
        let firstIndex = lowerCaseSplit.indexOf(array[0])
        let lastIndex = lowerCaseSplit.indexOf(array[array.length-1])
        let lowerCaseSliced = lowerCaseSplit.slice(firstIndex, lastIndex+1)
         if(array[i] !== lowerCaseSliced[i]){
           return lowerCaseSliced[i]
         }
       }
     }else{
         for(let i = 0; i < array.length; i++){
         let firstIndex = upperCaseSplit.indexOf(array[0])
         let lastIndex = upperCaseSplit.indexOf(array[array.length-1])
         let upperCaseSliced = upperCaseSplit.slice(firstIndex, lastIndex+1)
         if(array[i] !== upperCaseSliced[i]){
           return upperCaseSliced[i]
           }
       }
     }
  }