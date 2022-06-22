// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
    let split = string.split("")
    let filteredA = split.filter(letter => letter != "a")
    let filteredE = filteredA.filter(letter => letter != "e")
    let filteredI = filteredE.filter(letter => letter !== "i")
    let filteredO = filteredI.filter(letter => letter !== "o")
    let filteredU = filteredO.filter(letter => letter !== "u")
    return filteredU.join("")
  }