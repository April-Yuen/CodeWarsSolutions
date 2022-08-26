// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let strArray
    let newArray =""
    if(str.indexOf("-")!== -1){
        strArray = str.split("-")
      }else{
        strArray = str.split("_")
      }
      newArray+=strArray[0]
    for(let i = 1; i < strArray.length; i++){
      let firstLetter= strArray[i][0].toUpperCase()
      newArray+=firstLetter+strArray[i].slice(1)
    }
    return newArray
}

console.log(toCamelCase(''))//, '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"))//, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"))//, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"))//, "ABC", "toCamelCase('A-B-C') did not return correct value")