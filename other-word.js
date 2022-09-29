// Reverse every other word in the string

// DESCRIPTION:
// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
    let newStr = str.trim().split(" ")
    let finalStr = []
    for(let i = 0; i < newStr.length; i++){
      if(i % 2 ===1){
        let splitStr = newStr[i].split("").reverse().join("")
        finalStr.push(splitStr)
      }else{
        finalStr.push( newStr[i])
      }
    }
    return finalStr.join(" ")
}