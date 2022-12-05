//  MaxChar of String
// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

// iterate through the string and create a hash map that will save the element and the number of occurances of the element. 
// Create another for loop. It will iterate through the map, setting the value of the element as the count. 
// set the element as the maxChar. 
// compare the next value of the next element to the previous element, if the next element's value is greater than the previous, then I will replace count and Max Char. 
// return the char. 

function maxChar(string){
    let count = 0
    let maxChar = null
    let map = {}
    for(let char of string){
        map[char] = (map[char] || 0) + 1
    }
    for(let key in map){
        currentCount = map[key]
        if(currentCount > count){
            count = currentCount
            maxChar = key
        }
    }
    return maxChar
}

console.log(maxChar("Hello World!"))