// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i <str.length; i++){
      if(str[i] === "a"){
        vowelsCount+=1;
      }else if(str[i] === "e"){
        vowelsCount += 1;
      }else if(str[i] === "i"){
        vowelsCount+= 1;
      }else if(str[i] === "o"){
        vowelsCount+=1;
      }else if(str[i] === "u"){
        vowelsCount +=1;
      }
    }
    return vowelsCount;
  }