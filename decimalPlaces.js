// PREP (parameters, return, example pseudocode)

// Formatting decimal places #0

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34

//Take in a decimal number. 
// Must return a number that is rounded to two decimal places. 
//Only valid numebrs will be used in the test. no, negative, no, strings, 

//Can use twofixed which is a method that will take in a decimal number and round it to however many deicmal places you specify. 



function twoDecimalPlaces(n) {
    return Number(n.toFixed(2))
  }

  console.log(twoDecimalPlaces(4.659725356))// 4.66, "didn't work for 4.659725356");
  console.log(twoDecimalPlaces(173735326.3783732637948948))// 173735326.38, "didn't work for 173735326.3783732637948948");
  console.log(twoDecimalPlaces(4.653725356))// 4.65, "didn't work for 4.653725356");