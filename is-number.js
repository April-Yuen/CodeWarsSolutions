// Is it a number?

// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

function isDigit(s) {

    return s == parseFloat(s)

  }



  console.log(isDigit("s2324"))// false);
  console.log(isDigit("   3   5"))
  console.log(isDigit("-234.4"))// true); 