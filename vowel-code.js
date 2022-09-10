// The Vowel Code

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.




function encode(string){
    const vowelCode = {"a" : "1", "e": "2", "i": "3", "o": "4", "u": "5"}
    let result = ""

    for(let i = 0; i < string.length; i++){
        if(vowelCode[string[i]]){
            result += vowelCode[string[i]]
        }else{
            result += string[i]
        }
    }
    return result
}

function decode(string){
    const numberCode = {"1" : "a", "2": "e", "3": "i", "4": "o", "5": "u"}

    let result = ""
    
    for(let i = 0 ; i < string.length; i++){
        if(numberCode[string[i]]){
            result+= numberCode[string[i]]
        }else{
            result += string[i]
        }
    }
    return result
}


// const vowels = ["a", "e", "i", "o", "u"]
// const numbers = ["1", "2", "3", "4", "5"]

// let encode = str => [...str].map(letter => vowels.includes(letter) ? letter = vowels.indexOf(letter)+ 1 : letter).join("")
  
// let decode = str => [...str].map(number => numbers.includes(number) ? number = vowels[numbers.indexOf(number)] : number).join("")

console.log(encode('hello'))//, 'h2ll4');
console.log(encode('How are you today?'))//, 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'))//, 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'))//, 'hello');