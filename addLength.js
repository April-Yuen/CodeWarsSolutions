// Add Length

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
/////////////////////////////////
// for each work in the string given, I need to include the length of each word after the word. I also need to have the words in an array. 
//Each item in the array should be word length, word length
// the word and the number should be in string form. 

//The parameter I will be given is a string. and it will have at least 1 item in the string. words will be separated by a space. 

//strategy will be to separate the string first by the word. This will convert the string into an array. 

//Then I will loop through the array and find the length of each element in the array. 

function addLength(str) {
    let numWord = []
    let newStr = str.split(" ")
    for(let i = 0; i < newStr.length; i++){
        numWord.push(newStr[i] +" " + newStr[i].length)
    }
    return numWord

    }

//Expected returns:
console.log(addLength('apple ban'))//["apple 5", "ban 3"]);
console.log(addLength('you will win'))//["you 3", "will 4", "win 3"]);