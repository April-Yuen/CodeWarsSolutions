// Count characters in your string

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) { 
    const map = {}
    
    for(let char of string){
      if(map[char]){
        map[char]++
      }else{
        map[char] = 1
      }
    }
    return map
  }