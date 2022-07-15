// Find the capitals
// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


var capitals = function (word) {
    let wordSplit = word.split("")
    let capitals = []
    for(let i = 0; i < wordSplit.length; i++){
      if(word[i] === word[i].toUpperCase()){
        capitals.push(wordSplit.indexOf(word[i]))
      }
    }
    return capitals
  };