//PREP(parameters, returns, examples, pseudocode)

// Check same case

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// making function
// it can take 2 arguements
// arguments can be string, letter, punctuation, tab escape, it can be anything? 
//need to return -1, 1, 0. 
// before writing conditionals, need to check to see if case is true. declare variables for each arguemnet. 
// write a condition for each senario and return the correct number. 


    function sameCase(a, b){
        if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
           return -1
         }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
             return 1
         }else{
           return 0
         }
       }
  

  console.log(sameCase('b', 'a'))// 1);
  console.log(sameCase('d', 'd'))// 1);
  console.log(sameCase('A', 's'))// 0);
  console.log(sameCase('c', 'B'))// 0);
  console.log(sameCase('b', 'Z'))// 0);
  console.log(sameCase('\t', 'Z'))// -1);
  console.log(sameCase('H', ':'))// -1);