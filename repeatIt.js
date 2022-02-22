// Repeat It

// Create a function that takes a string and an integer (n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 --> "HiHi"
// 1234, 5 --> "Not a string"

var repeatIt = function(str, n) {
    let newStr = ""
    if(typeof str === "string"){
      for(let i = 1; i <= n; i++){
        newStr += str
      }
      return newStr
    }else{
      return "Not a string"
    }
  
    }