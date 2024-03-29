// // Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let LowerCase = word.toLowerCase().split("")
      let map = new Map()
    for(let i = 0; i < LowerCase.length; i++){
      if(!map.has(LowerCase[i], 1)){
        map.set(LowerCase[i], 1)
      }else{
        map.set(LowerCase[i], map.get(LowerCase[i]) + 1)
      }
    }
    let parentheses = []
    for(let i = 0; i < LowerCase.length; i++){
      if(map.get(LowerCase[i]) === 1){
        parentheses.push("(")
      }else{
        parentheses.push(")")
      }
    }
    return parentheses.join("")
  }
  
      console.log((duplicateEncode("din")))//"((("));
      console.log((duplicateEncode("recede")))//"()()()"));
      console.log((duplicateEncode("Success")))//")())())","should ignore case"));
      console.log((duplicateEncode("(( @")))//"))(("));