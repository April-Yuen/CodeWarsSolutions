//Counting Duplicates


// Output
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    let obj = {}
    count = 0
  for (letter of text){
    letter = letter.toLowerCase()
    if(!obj[letter]){
        obj[letter] =1
    }else{
        obj[letter]
            obj[letter]++
        }
    }
    for(letter in obj){
        if(obj[letter] > 1){
            count +=1
        }
      }
      return count
  }


//   let lowercase = text.toLowerCase()
//   let array = lowercase.split("")
//   let duplicates = []
//   for (let i =0; i < text.length; i++){
//       for(let j = 0; j < text.length; j++)
//     if (array[i] == array[j] )
//       duplicates.push(array[i])
//   }
//   return duplicates

console.log(duplicateCount(""))// 0);
console.log(duplicateCount("abcde"))// 0);
console.log(duplicateCount("aabbcde"))// 2);
console.log(duplicateCount("aabBcde"))// 2,"should ignore case");
console.log(duplicateCount("Indivisibility"))// 1)
console.log(duplicateCount("Indivisibilities"))// 2, "characters may not be adjacent")
