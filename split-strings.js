// Split Strings

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   if(str.length % 2 !== 0){
    str+="_"
   }
   let newArray = []
   for(let i = 0; i < str.length; i++){
    if(str.length %2 ==0){
        if(i % 2 === 0){
            newArray.push(str[i]+str[i+1])
        }
    }else {
         if(i % 2 === 0){
            newArray.push(str[i]+str[i+1])
            }
        }
    }
   return newArray
}


console.log(solution("abcdef"))// ["ab", "cd", "ef"]);
console.log(solution("abcdefg"))// ["ab", "cd", "ef", "g_"]);
console.log(solution(""))// []);