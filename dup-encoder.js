// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let map = new Map()
    let wordLower = word.toLowerCase()
    let wordArray = wordLower.split("")
  let newWord = []
    for(let i = 0; i < wordArray.length; i++){
      if(!map.has(wordArray[i])){
        map.set(wordArray[i], 1)
      }else{
        map.set(wordArray[i], map.get(wordArray[i])+1)
      }
    }
  for(let i = 0; i < wordArray.length; i++){
    if(map.get(wordArray[i]) === 1){
      newWord.push("(")
    }else{
      newWord.push(")")
    }
  }
  return newWord.join("")
}

console.log(duplicateEncode("din"))//"(((");
console.log(duplicateEncode("recede"))//"()()()");
console.log(duplicateEncode("Success"))//")())())","should ignore case");
console.log(duplicateEncode("(( @"))//"))((");