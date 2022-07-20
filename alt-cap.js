//Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    let alt = []
    let newStr=[]
    let split=s.split("")
    for(let i=0; i < split.length; i++){
      if(i % 2 === 0){
        newStr.push(split[i].toUpperCase())
      }else{
        newStr.push(split[i].toLowerCase())
      }
    }
    let newStr2=[]
     for(let j = 0; j < split.length; j++){
         if(j % 2 === 0){
             newStr2.push(split[j].toLowerCase())
         }else{
             newStr2.push(split[j].toUpperCase())
         }
    }
    let joinedA = newStr.join("")
    alt.push(joinedA)

    let joinedB = newStr2.join("")
    alt.push(joinedB)
    return alt

};

console.log(capitalize("abcdef"))//['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"))//['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"))//['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"))//['CoDeWaRrIoRs', 'cOdEwArRiOrS'])