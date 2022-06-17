//Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let newStr = str.toLowerCase()
    let split = newStr.split("")
    let newSplit = new Set(split)
    let joined = [...newSplit].join("")
     if (joined === str.toLowerCase()){
       return true
     }else {
       return false
     }
  }

  console.log( isIsogram("Dermatoglyphics"))// true );
  console.log( isIsogram("isogram"))// true );
  console.log( isIsogram("aba"))// false, "same chars may not be adjacent" );
  console.log( isIsogram("moOse"))// false, "same chars may not be same case" );
  console.log( isIsogram("isIsogram"))// false );
  console.log( isIsogram(""))// true, "an empty string is a valid isogram" );